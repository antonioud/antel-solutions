import { ImageResponse } from "next/og";

export const alt = "Antel Solutions | Global Connections. Real Opportunities.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "white",
          background: "radial-gradient(ellipse at 85% 30%, #1e3a8a 0%, #081f38 45%, #04111f 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end", fontSize: 54, fontWeight: 600, letterSpacing: 8 }}>
            <svg width="44" height="40" viewBox="0 0 40 36" style={{ marginRight: 4, marginBottom: 8 }}>
              <path d="M20 0 L40 36 H31.5 L20 14.8 L8.5 36 H0 Z" fill="#8cb8f7" />
            </svg>
            NTEL
          </div>
          <div style={{ fontSize: 16, letterSpacing: 18, marginTop: 6 }}>SOLUTIONS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 5, color: "#8cb8f7" }}>30+ YEARS OF TRUSTED INTERNATIONAL RELATIONSHIPS</div>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, marginTop: 20, letterSpacing: -2 }}>Global Connections.</div>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, color: "#8cb8f7", letterSpacing: -2 }}>Real Opportunities.</div>
        </div>
      </div>
    ),
    size,
  );
}
