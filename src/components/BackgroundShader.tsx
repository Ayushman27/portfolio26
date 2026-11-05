"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Device Pixel Ratio scaling for ultra-crisp rendering on Retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    // Interactive mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color Palette matching Obsidian Cybernetics
    const VIOLET = "#8B5CF6";
    const CYAN = "#22D3EE";
    const EMERALD = "#10B981";

    // Initialize Neural Nodes
    const nodeCount = Math.floor(Math.min(width, 1440) / 18);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isViolet = Math.random() > 0.45;
      const isEmerald = !isViolet && Math.random() > 0.7;
      const color = isViolet ? VIOLET : isEmerald ? EMERALD : CYAN;
      const glowColor = isViolet
        ? "rgba(139, 92, 246, 0.4)"
        : isEmerald
        ? "rgba(16, 185, 129, 0.4)"
        : "rgba(34, 211, 238, 0.4)";

      const radius = Math.random() * 1.6 + 1.2;

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius,
        baseRadius: radius,
        color,
        glowColor,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Active token stream packets traveling between nodes
    const packets: Packet[] = [];
    const maxPackets = 12;

    const connectionDistance = 140;

    let lastTime = performance.now();

    function render(currentTime: number) {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (!ctx) return;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // 1. Digital Dot Grid (Cybernetic Mesh Floor)
      const gridSize = 48;
      const startX = 0;
      const startY = 0;

      ctx.save();
      for (let x = startX; x < width; x += gridSize) {
        for (let y = startY; y < height; y += gridSize) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let dotAlpha = 0.08;
          let dotRadius = 1;

          // Sonar / radar lightup around mouse cursor
          if (mouse.active && dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius;
            dotAlpha = 0.08 + factor * 0.35;
            dotRadius = 1 + factor * 1.2;
            ctx.fillStyle = `rgba(34, 211, 238, ${dotAlpha})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
          }

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 2. Cursor Ambient Field
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        cursorGlow.addColorStop(0, "rgba(139, 92, 246, 0.15)");
        cursorGlow.addColorStop(0.5, "rgba(34, 211, 238, 0.06)");
        cursorGlow.addColorStop(1, "rgba(8, 10, 15, 0)");

        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update & Draw Neural Nodes
      const connectedPairs: [number, number][] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around borders smoothly
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Interactive mouse deflection / pull
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 0.6;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // Pulse phase
        node.pulsePhase += dt * 2.5;
        const pulse = Math.sin(node.pulsePhase) * 0.4 + 1;
        node.radius = node.baseRadius * pulse;

        // Find neighbors for connection
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            connectedPairs.push([i, j]);

            const alpha = (1 - dist / connectionDistance) * 0.22;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            // Subtle gradient edge
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect node to cursor if nearby
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Node Halo Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = node.glowColor;
        ctx.fill();

        // Draw Core Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      // 4. Spawn & Animate Token Stream Packets
      if (connectedPairs.length > 0 && packets.length < maxPackets && Math.random() < 0.08) {
        const randomPair = connectedPairs[Math.floor(Math.random() * connectedPairs.length)];
        packets.push({
          fromNode: randomPair[0],
          toNode: randomPair[1],
          progress: 0,
          speed: Math.random() * 0.015 + 0.008,
          color: Math.random() > 0.5 ? CYAN : VIOLET,
        });
      }

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        const from = nodes[pkt.fromNode];
        const to = nodes[pkt.toNode];

        if (!from || !to || pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        // Packet glow dot
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    // Pause animation when tab is inactive to preserve 100% CPU/GPU efficiency
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Canvas Background */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-70"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
