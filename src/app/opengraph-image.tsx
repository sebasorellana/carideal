import { ImageResponse } from "next/og";

export const alt = "Carideal — El camino es tuyo, el respaldo es nuestro";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#ffffff",
        color: "#080808",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#d0043b",
          borderRadius: "50%",
          display: "flex",
          height: 480,
          left: -260,
          position: "absolute",
          top: -250,
          width: 480,
        }}
      />
      <div
        style={{
          background: "#d0043b",
          borderRadius: "50%",
          bottom: -300,
          display: "flex",
          height: 580,
          position: "absolute",
          right: -220,
          width: 580,
        }}
      />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          maxWidth: 900,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
        >
          CAR<span style={{ color: "#d0043b" }}>i</span>DEAL
        </div>
        <div
          style={{
            background: "#d0043b",
            display: "flex",
            height: 8,
            marginTop: 32,
            width: 155,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 42,
            lineHeight: 1.3,
            marginTop: 34,
          }}
        >
          El camino es tuyo, el respaldo es nuestro.
        </div>
      </div>
    </div>,
    size,
  );
}
