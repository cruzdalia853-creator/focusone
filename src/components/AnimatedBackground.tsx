import React, { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const particleCount = Math.min(Math.floor(width / 36), 42);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      pulseSpeed: number;
      pulseVal: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 2 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.2,
        alpha: 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    // Gentle mouse tracking for organic parallax
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      const mouseParallaxX = (mouseX / width - 0.5) * 22;
      const mouseParallaxY = (mouseY / height - 0.5) * 22;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx * 60 * dt;
        p.y += p.vy * 60 * dt;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse alpha
        p.pulseVal += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.18;

        // Draw particle with glow
        const renderX = p.x + mouseParallaxX * (p.radius / 2);
        const renderY = p.y + mouseParallaxY * (p.radius / 2);

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 69, 255, ${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.fill();

        // Soft outer glow for larger particles
        if (p.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(37, 69, 255, ${p.alpha * 0.22})`;
          ctx.fill();
        }

        // Draw faint connective lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            const lineAlpha = (1 - dist / 90) * 0.1 * p.alpha;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(
              p2.x + mouseParallaxX * (p2.radius / 2),
              p2.y + mouseParallaxY * (p2.radius / 2)
            );
            ctx.strokeStyle = `rgba(37, 69, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 1. Subtle moving tech grid pattern with radial fade */}
      <div 
        className="absolute inset-0 opacity-35 animate-grid-drift"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(37, 69, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 69, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 80%)'
        }}
      />

      {/* 2. Scanning light beam line across the grid */}
      <div className="absolute inset-x-0 h-44 bg-gradient-to-b from-transparent via-[#2545FF]/10 to-transparent animate-beam-scan pointer-events-none blur-sm" />

      {/* 3. Dynamic Animated Aurora Orbs (Pure Blue / Electric Blue / Deep Indigo) */}
      {/* Top Center Hero Glow - Breathing and floating */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[760px] h-[440px] bg-gradient-to-tr from-[#2545FF]/25 via-blue-600/15 to-transparent rounded-full blur-[140px] animate-float-1 will-change-transform" />

      {/* Mid Left Indigo/Cyan Accent Glow */}
      <div className="absolute top-[28%] -left-[140px] w-[580px] h-[580px] bg-gradient-to-br from-[#2545FF]/18 via-indigo-900/20 to-transparent rounded-full blur-[160px] animate-float-2 will-change-transform" />

      {/* Mid Right Pure Blue Glow */}
      <div className="absolute top-[55%] -right-[140px] w-[620px] h-[620px] bg-gradient-to-tl from-[#2545FF]/22 via-blue-700/12 to-transparent rounded-full blur-[160px] animate-float-3 will-change-transform" />

      {/* Bottom Center Closing Glow */}
      <div className="absolute bottom-[4%] left-1/3 w-[680px] h-[450px] bg-gradient-to-r from-blue-900/15 via-[#2545FF]/18 to-transparent rounded-full blur-[150px] animate-float-1 will-change-transform" />

      {/* 4. Interactive Stardust Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-65"
      />
    </div>
  );
}
