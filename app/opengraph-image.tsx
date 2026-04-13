import { ImageResponse } from "next/og";

export const alt =
  "Portfolio profesional de Albert Castineira con proyectos, experiencia y stack Full Stack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #131313 0%, #0e0e0e 45%, #1b1b1b 100%)",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', Inter, ui-sans-serif, system-ui",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(255,84,75,0.36) 0%, rgba(255,84,75,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          left: -120,
          width: 500,
          height: 500,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(255,84,75,0.2) 0%, rgba(255,84,75,0) 72%)",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              border: "2px solid #ff544b",
              color: "#ff544b",
              fontSize: 28,
              letterSpacing: 3,
              padding: "10px 16px",
              display: "flex",
            }}
          >
            ALBERT_DEV
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a3a3a3",
              display: "flex",
            }}
          >
            Portfolio profesional
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 940,
          }}
        >
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              display: "flex",
            }}
          >
            Albert Castineira
          </div>
          <div
            style={{
              fontSize: 40,
              color: "#ff544b",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Proyectos, experiencia y stack técnico
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#d4d4d4",
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            Sitio bilingue con trayectoria profesional, proyectos reales y
            perfil Full Stack enfocado en React, Next.js, TypeScript y
            desarrollo web escalable.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: "#a3a3a3",
              display: "flex",
            }}
          >
            albertcastineira.dev
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a3a3a3",
              display: "flex",
            }}
          >
            ES / EN · Contacto disponible
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
