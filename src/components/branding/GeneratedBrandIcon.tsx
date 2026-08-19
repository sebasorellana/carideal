type GeneratedBrandIconProps = {
  dimension: number;
};

export function GeneratedBrandIcon({ dimension }: GeneratedBrandIconProps) {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#ffffff",
        border: `${Math.max(4, Math.round(dimension * 0.025))}px solid #d0043b`,
        borderRadius: "22%",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <span
        style={{
          color: "#080808",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: dimension * 0.42,
          fontWeight: 700,
          letterSpacing: "-0.09em",
        }}
      >
        C<span style={{ color: "#d0043b" }}>i</span>
      </span>
    </div>
  );
}
