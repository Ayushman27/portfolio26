import math
from PIL import Image, ImageDraw, ImageFilter

def create_cyber_icon(size=512):
    # Create image with RGBA
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Dimensions
    padding = int(size * 0.05)
    corner_radius = int(size * 0.22)
    box = [padding, padding, size - padding, size - padding]

    # 1. Background Squircle
    # Background fill: deep obsidian cybernetic #090B10 -> #121622
    bg_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bg_draw = ImageDraw.Draw(bg_img)
    bg_draw.rounded_rectangle(box, radius=corner_radius, fill=(9, 12, 19, 255))
    
    # 2. Ambient Core Glow layer
    glow_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)
    center_x, center_y = size // 2, int(size * 0.52)
    glow_radius = int(size * 0.28)
    glow_draw.ellipse(
        [center_x - glow_radius, center_y - glow_radius, center_x + glow_radius, center_y + glow_radius],
        fill=(93, 230, 255, 65) # soft cyan glow
    )
    glow_img = glow_img.filter(ImageFilter.GaussianBlur(radius=int(size * 0.12)))

    # Composite glow on background
    img = Image.alpha_composite(img, bg_img)
    img = Image.alpha_composite(img, glow_img)
    draw = ImageDraw.Draw(img)

    # 3. Outer Neon Border (Gradient simulation)
    border_width = max(3, int(size * 0.028))
    draw.rounded_rectangle(box, radius=corner_radius, outline=(93, 230, 255, 230), width=border_width)

    # 4. Central Geometric Cybernetic "A" / Neural Apex
    # Apex: (size/2, size * 0.22)
    # Left foot: (size * 0.24, size * 0.78)
    # Right foot: (size * 0.76, size * 0.78)
    apex = (size // 2, int(size * 0.22))
    left_foot = (int(size * 0.24), int(size * 0.78))
    right_foot = (int(size * 0.76), int(size * 0.78))
    
    cross_left = (int(size * 0.32), int(size * 0.60))
    cross_right = (int(size * 0.68), int(size * 0.60))

    beam_width = max(4, int(size * 0.08))

    # Outer legs - Cybernetic Violet to Cyan
    # Draw Left Leg (violet #d0bcff)
    draw.line([apex, left_foot], fill=(208, 188, 255, 255), width=beam_width)
    # Draw Right Leg (cyan #5de6ff)
    draw.line([apex, right_foot], fill=(93, 230, 255, 255), width=beam_width)
    
    # Glowing Crossbar (emerald-cyan bridge #4edea3)
    cross_width = max(3, int(size * 0.065))
    draw.line([cross_left, cross_right], fill=(78, 222, 163, 255), width=cross_width)

    # 5. Glowing Quantum Nodes at key vertices
    node_r = max(4, int(size * 0.06))
    
    # Apex Node (Radiant Cyan)
    draw.ellipse([apex[0] - node_r, apex[1] - node_r, apex[0] + node_r, apex[1] + node_r], fill=(93, 230, 255, 255), outline=(255, 255, 255, 255), width=max(1, size // 100))
    
    # Left foot node (Violet)
    foot_r = int(node_r * 0.85)
    draw.ellipse([left_foot[0] - foot_r, left_foot[1] - foot_r, left_foot[0] + foot_r, left_foot[1] + foot_r], fill=(160, 120, 255, 255), outline=(208, 188, 255, 255), width=max(1, size // 120))

    # Right foot node (Cyan)
    draw.ellipse([right_foot[0] - foot_r, right_foot[1] - foot_r, right_foot[0] + foot_r, right_foot[1] + foot_r], fill=(34, 211, 238, 255), outline=(165, 243, 252, 255), width=max(1, size // 120))

    # Center Heart Node / Quantum Pulse
    core_r = int(node_r * 0.7)
    core_center = (size // 2, int(size * 0.48))
    draw.ellipse([core_center[0] - core_r, core_center[1] - core_r, core_center[0] + core_r, core_center[1] + core_r], fill=(78, 222, 163, 255), outline=(255, 255, 255, 255), width=max(1, size // 120))

    return img

# Generate icons
high_res = create_cyber_icon(512)
high_res.save("public/apple-touch-icon.png")

# Generate sizes for ICO
sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
ico_images = [create_cyber_icon(s[0]) for s in sizes]
ico_images[0].save("public/favicon.ico", format="ICO", sizes=sizes, append_images=ico_images[1:])
ico_images[0].save("src/app/favicon.ico", format="ICO", sizes=sizes, append_images=ico_images[1:])

print("Favicon files generated successfully!")
