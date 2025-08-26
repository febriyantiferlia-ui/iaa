"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Animasi fade
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));

    // Partikel bintang
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.6 - 0.3,
        dy: Math.random() * 0.6 - 0.3,
      });
    }
    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5 ? "rgba(255,192,203,0.9)" : "rgba(255,255,255,0.9)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  const skills = [
    { icon: "💻", text: "HTML, CSS, JavaScript" },
    { icon: "⚛", text: "React & Next.js" },
    { icon: "🛢", text: "MySQL Database" },
    { icon: "🎨", text: "UI/UX Design" },
    { icon: "📱", text: "Mobile Friendly Design" },
    { icon: "🔧", text: "Problem Solving" },
  ];

  const projects = [
    { img: "/fefer.jpg", title: "Portfolio Website", desc: "Website pribadi untuk menampilkan biodata, skill, dan project." },
    { img: "/ferfer.jpg", title: "E-Commerce App", desc: "Aplikasi toko online dengan fitur keranjang belanja dan checkout." },
    { img: "/lilia.jpg", title: "UI Design Dashboard", desc: "Desain dashboard modern untuk monitoring data." },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Partikel */}
      <canvas
        id="particles"
        style={{ position: "fixed", top: 0, left: 0, zIndex: -2 }}
      />

      {/* Background gradasi */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(-45deg, #ffdde1, #ee9ca7, #ffffff, #f9c5d1)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 12s ease infinite",
          zIndex: -3,
        }}
      />

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .fade-section {
          opacity: 0;
          transition: opacity 1s ease, transform 1s ease;
        }
        .fade-bottom {
          transform: translateY(40px);
        }
        .fade-left {
          transform: translateX(-60px);
        }
        .fade-right {
          transform: translateX(60px);
        }
        .fade-section.show {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }
        .gradient-text {
          background: linear-gradient(90deg, #ff9a9e, #fad0c4, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Header */}
      <h1
        className="gradient-text"
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "20px",
          fontWeight: 800,
          textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        🌸 Portfolio Ferlia Febriyanti 🌸
      </h1>

      {/* Biodata */}
      <section
        className="fade-section fade-bottom"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
      >
        <Image
          src="/fer.jpg"
          alt="Ferlia Febriyanti"
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid pink",
          }}
        />
        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            listStyle: "none",
            margin: 0,
            padding: 0,
            color: "#333",
          }}
        >
          <li><b className="gradient-text">Nama:</b> Ferlia Febriyanti</li>
          <li><b className="gradient-text">Jurusan:</b> Rekayasa Perangkat Lunak</li>
          <li><b className="gradient-text">Hobby:</b> Membaca & Desain</li>
          <li><b className="gradient-text">Alamat:</b> Malang, Jawa Timur</li>
          <li><b className="gradient-text">Email:</b> ferliafebriyanti@email.com</li>
        </ul>
      </section>

      {/* Skills */}
      <section
        className="fade-section fade-left"
        style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "900px",
          background: "rgba(255,255,255,0.8)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          className="gradient-text"
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            fontWeight: 700,
          }}
        >
          💡 My Skills
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #ffdde1, #fff)",
                borderRadius: "15px",
                padding: "20px",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                color: "#333",
              }}
            >
              <span style={{ fontSize: "24px", marginRight: "8px" }}>{skill.icon}</span>
              {skill.text}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        className="fade-section fade-right"
        style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "900px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          className="gradient-text"
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            fontWeight: 700,
          }}
        >
          📂 Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                textAlign: "left",
              }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
              <h3 className="gradient-text" style={{ margin: "10px 0" }}>
                {project.title}
              </h3>
              <p style={{ color: "#555" }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        className="fade-section fade-bottom"
        style={{
          margin: "50px auto",
          textAlign: "center",
          maxWidth: "600px",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="gradient-text" style={{ fontSize: "30px", marginBottom: "20px", fontWeight: 700 }}>
          📩 Contact Me
        </h2>
        <p>
          <b className="gradient-text">Email:</b>{" "}
          <a href="mailto:ferliafebriyanti@email.com">
            ferliafebriyanti@email.com
          </a>
        </p>
        <p>
          <b className="gradient-text">Instagram:</b>{" "}
          <a href="https://instagram.com/ferliafebriyanti" target="_blank">
            instagram.com/ferliafebriyanti
          </a>
        </p>
      </section>
    </main>
  );
}