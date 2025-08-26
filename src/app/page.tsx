"use client";

import Image from "next/image";

export default function Home() {
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
        background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "20px",
          color: "pink",
          textShadow: "2px 2px 6px black",
        }}
      >
        🌸 Portfolio Ferlia Febriyanti 🌸
      </h1>

      {/* Foto Profil & Biodata */}
      <section
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
          <li><b>Nama:</b> Ferlia Febriyanti</li>
          <li><b>Jurusan:</b> Rekayasa Perangkat Lunak (RPL)</li>
          <li><b>Hobby:</b> Membaca & Desain</li>
          <li><b>Alamat:</b> Malang, Jawa Timur</li>
          <li><b>Email:</b> ferliafebriyanti@email.com</li>
        </ul>
      </section>

      {/* Skills */}
      <section
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
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "pink",
            textShadow: "1px 1px 4px black",
          }}
        >
          💡 My Skills
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
                borderRadius: "15px",
                padding: "20px",
                fontWeight: "bold",
                fontSize: "16px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                color: "#222",
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
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "pink",
            textShadow: "1px 1px 4px black",
          }}
        >
          📂 Projects
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
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
              <h3
                style={{
                  margin: "10px 0",
                  color: "pink",
                  textShadow: "1px 1px 4px black",
                }}
              >
                {project.title}
              </h3>
              <p style={{ color: "#555" }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
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
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
            color: "pink",
            textShadow: "1px 1px 4px black",
          }}
        >
          📩 Contact Me
        </h2>
        <p>Email: <a href="mailto:ferliafebriyanti@email.com">ferliafebriyanti@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/ferliafebriyanti" target="_blank">instagram.com/ferliafebriyanti</a></p>
      </section>
    </main>
  );
}