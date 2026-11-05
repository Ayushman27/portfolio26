"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let gl: WebGLRenderingContext | null = null;

    try {
      gl = (canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")) as WebGLRenderingContext;
    } catch {
      return;
    }

    if (!gl) return;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    float t = u_time * 0.18;
    
    float n1 = snoise(uv * 1.8 + vec2(t * 0.4, -t * 0.3));
    float n2 = snoise(uv * 3.2 - vec2(t * 0.2, t * 0.5) + n1 * 0.5);
    
    vec2 gridUV = fract(st * vec2(28.0, 16.0)) - 0.5;
    float gridDist = length(gridUV);
    float gridPoints = smoothstep(0.06, 0.01, gridDist) * 0.15;
    
    float coreDist = length(uv - vec2(0.25, 0.0));
    float aura = exp(-coreDist * 2.8) * 0.65;
    float filament = smoothstep(0.45, 0.48, abs(n2)) * smoothstep(0.55, 0.50, abs(n2));
    
    vec3 cBg = vec3(0.031, 0.039, 0.059);      // #080A0F
    vec3 cViolet = vec3(0.545, 0.361, 0.965);  // #8B5CF6
    vec3 cCyan = vec3(0.133, 0.827, 0.933);    // #22D3EE
    vec3 cIndigo = vec3(0.24, 0.12, 0.58);
    
    vec3 col = cBg;
    
    col += cIndigo * max(0.0, n1) * 0.45;
    col += cViolet * aura * 0.7;
    col += cCyan * max(0.0, n2 * 0.35) * exp(-length(uv) * 1.5);
    col += cCyan * filament * 0.4;
    col += vec3(gridPoints) * cCyan * 0.4;
    
    float vig = 1.0 - smoothstep(0.5, 1.4, length(st - 0.5));
    col *= vig;
    
    gl_FragColor = vec4(col, 1.0);
}`;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vert = createShader(gl.VERTEX_SHADER, vs);
    const frag = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vert || !frag) return;

    const prog = gl.createProgram();
    if (!prog) return;

    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let isDisposed = false;
    function render(t: number) {
      if (isDisposed || !gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-[1000px] pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
