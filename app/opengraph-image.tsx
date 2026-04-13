import { ImageResponse } from "next/og";

export const alt = "Albert Castineira - Full Stack Developer";
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
          "linear-gradient(135deg, #0a0a0a 0%, #121212 45%, #1a1a1a 100%)",
        color: "#f5f5f5",
        fontFamily: "Inter, ui-sans-serif, system-ui",
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
            "radial-gradient(circle, rgba(249,181,172,0.35) 0%, rgba(249,181,172,0) 70%)",
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
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 72%)",
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
              border: "2px solid #f9b5ac",
              color: "#f9b5ac",
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
              color: "#bdbdbd",
              display: "flex",
            }}
          >
            Portfolio
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
              color: "#f9b5ac",
              fontWeight: 600,
              display: "flex",
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#cfcfcf",
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            React, Next.js, TypeScript and scalable web products from Barcelona.
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
              color: "#9b9b9b",
              display: "flex",
            }}
          >
            albertcastineira.dev
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9b9b9b",
              display: "flex",
            }}
          >
            ES / EN
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
