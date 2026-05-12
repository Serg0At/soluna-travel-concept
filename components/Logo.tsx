/**
 * Soluna Travel inline logo.
 *
 * Faithful to the source mark: SOLUNA in heavy sans, where the "O" is replaced
 * by a sun-disc (orange) hugged by a moon-crescent (in the active tone color).
 * "TRAVEL" sits below in spaced caps. Inlined as SVG so it scales crisply,
 * recolors via the `tone` prop, and avoids an extra image request.
 */
type Tone = "white" | "ink" | "brand";

const toneToColor: Record<Tone, string> = {
  white: "#FFFFFF",
  ink: "#0E2729",
  brand: "#1B9FA6",
};

export function Logo({
  tone = "white",
  className = "h-9 w-auto",
}: {
  tone?: Tone;
  className?: string;
}) {
  const color = toneToColor[tone];
  return (
    <svg
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Soluna Travel"
    >
      <defs>
        {/* Mask that carves the moon-crescent out of the sun disc by subtracting
            the offset moon shape — yields the asymmetric eclipse glyph. */}
        <mask id="solunaCrescent">
          <rect width="100%" height="100%" fill="white" />
          <circle cx="42" cy="22" r="11" fill="black" />
        </mask>
      </defs>

      {/* Sun-disc (the body of the orange semicircle) */}
      <circle cx="36" cy="22" r="11" fill="#F2901A" mask="url(#solunaCrescent)" />
      {/* Moon-crescent stroke — a thin ring offset slightly right of the sun */}
      <circle
        cx="42"
        cy="22"
        r="10.5"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />

      {/* S — left of the glyph */}
      <text
        x="0"
        y="32"
        fontFamily="var(--font-manrope), Manrope, ui-sans-serif, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="0.5"
        fill={color}
      >
        S
      </text>

      {/* LUNA — right of the glyph */}
      <text
        x="54"
        y="32"
        fontFamily="var(--font-manrope), Manrope, ui-sans-serif, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="0.5"
        fill={color}
      >
        LUNA
      </text>

      {/* TRAVEL — small, spaced caps below */}
      <text
        x="38"
        y="50"
        fontFamily="var(--font-manrope), Manrope, ui-sans-serif, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="4"
        fill={color}
      >
        TRAVEL
      </text>
    </svg>
  );
}
