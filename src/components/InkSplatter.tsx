export function InkSplatterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="ink-core-a">
          <circle cx="0" cy="0" r="34" />
          <circle cx="4" cy="4" r="26" />
          <circle cx="30" cy="-10" r="22" />
          <circle cx="-26" cy="14" r="20" />
          <circle cx="10" cy="30" r="17" />
          <circle cx="-16" cy="-28" r="15" />
        </g>
        <g id="ink-core-b">
          <circle cx="0" cy="0" r="30" />
          <circle cx="34" cy="6" r="24" />
          <circle cx="-30" cy="-4" r="22" />
          <circle cx="12" cy="-24" r="14" />
          <circle cx="-10" cy="22" r="13" />
        </g>
        <g id="ink-core-c">
          <circle cx="0" cy="0" r="32" />
          <circle cx="8" cy="28" r="22" />
          <circle cx="-10" cy="-26" r="20" />
          <circle cx="-22" cy="10" r="14" />
          <circle cx="20" cy="-8" r="13" />
        </g>
        <g id="ink-core-d">
          <circle cx="0" cy="0" r="28" />
          <circle cx="24" cy="-20" r="20" />
          <circle cx="46" cy="-38" r="14" />
          <circle cx="-22" cy="18" r="18" />
          <circle cx="-40" cy="34" r="12" />
          <circle cx="10" cy="-8" r="16" />
        </g>
        <g id="ink-core-e">
          <circle cx="0" cy="0" r="36" />
          <circle cx="14" cy="10" r="26" />
          <circle cx="-12" cy="-14" r="24" />
          <circle cx="8" cy="-20" r="16" />
          <circle cx="-16" cy="12" r="14" />
        </g>
        <g id="ink-core-f">
          <circle cx="0" cy="0" r="24" />
          <circle cx="38" cy="14" r="16" />
          <circle cx="-34" cy="-18" r="14" />
          <circle cx="18" cy="-36" r="11" />
          <circle cx="-24" cy="30" r="10" />
          <circle cx="42" cy="-22" r="8" />
          <circle cx="-44" cy="6" r="9" />
        </g>
        <g id="ink-core-g">
          <circle cx="0" cy="0" r="26" />
          <circle cx="-18" cy="-22" r="18" />
          <circle cx="16" cy="-16" r="16" />
          <circle cx="6" cy="24" r="14" />
          <circle cx="30" cy="20" r="10" />
          <circle cx="42" cy="34" r="7" />
          <circle cx="52" cy="48" r="5" />
        </g>
        <g id="ink-core-h">
          <circle cx="0" cy="0" r="22" />
          <circle cx="26" cy="4" r="10" />
          <circle cx="-24" cy="-8" r="9" />
          <circle cx="8" cy="-30" r="8" />
          <circle cx="-10" cy="28" r="8" />
          <circle cx="32" cy="-20" r="7" />
          <circle cx="-32" cy="16" r="7" />
          <circle cx="14" cy="34" r="6" />
          <circle cx="-6" cy="-36" r="6" />
        </g>
        <g id="ink-core-i">
          <circle cx="0" cy="0" r="20" />
          <circle cx="20" cy="10" r="18" />
          <circle cx="36" cy="26" r="15" />
          <circle cx="46" cy="46" r="11" />
          <circle cx="-14" cy="-12" r="16" />
          <circle cx="-26" cy="-28" r="12" />
        </g>
        <g id="ink-core-j">
          <circle cx="0" cy="0" r="18" />
          <circle cx="10" cy="6" r="14" />
          <circle cx="-8" cy="-6" r="13" />
          <circle cx="6" cy="-14" r="10" />
          <circle cx="-12" cy="10" r="9" />
          <circle cx="14" cy="12" r="8" />
          <circle cx="-4" cy="18" r="7" />
        </g>
        <circle id="ink-satellite" cx="46" cy="0" r="15" />
        <g id="ink-fling">
          <circle cx="70" cy="0" r="6" />
          <circle cx="92" cy="-8" r="4.2" />
          <circle cx="112" cy="-20" r="3" />
          <circle cx="128" cy="-36" r="1.8" />
        </g>
        <g id="ink-dots">
          <circle cx="0" cy="0" r="3.8" />
          <circle cx="19" cy="11" r="2.5" />
          <circle cx="-13" cy="23" r="1.9" />
          <circle cx="32" cy="-16" r="3.1" />
          <circle cx="-29" cy="-8" r="2.3" />
          <circle cx="11" cy="-27" r="1.6" />
          <circle cx="46" cy="7" r="1.9" />
          <circle cx="-7" cy="36" r="1.7" />
          <circle cx="-38" cy="14" r="1.4" />
          <circle cx="24" cy="30" r="1.5" />
        </g>
        {/* Splits every ink shape into 3 horizontal bands (shared -145..145 viewBox
            coordinate space) so the erase can wipe each band independently: top, then
            middle, then bottom, alternating direction as it works down the shape.
            The splits are at y=-20/+20 rather than at even thirds of the viewBox,
            because the ink blob only spans roughly the middle ±70 of that box — even
            thirds would leave the top and bottom bands nearly empty and let the middle
            band wipe the whole shape at once. These cuts give each band a real share of
            the ink; the outer two still reach the viewBox edge so stray dots and
            satellites are erased too. */}
        <clipPath id="ink-band-clip-0" clipPathUnits="userSpaceOnUse">
          <rect x="-145" y="-145" width="290" height="125" />
        </clipPath>
        <clipPath id="ink-band-clip-1" clipPathUnits="userSpaceOnUse">
          <rect x="-145" y="-20" width="290" height="40" />
        </clipPath>
        <clipPath id="ink-band-clip-2" clipPathUnits="userSpaceOnUse">
          <rect x="-145" y="20" width="290" height="125" />
        </clipPath>
      </defs>
    </svg>
  )
}

type InkVariant = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j'

const SATELLITE_CONFIG: Record<InkVariant, { angle: number; scale: number }[]> = {
  a: [
    { angle: 20, scale: 1.0 },
    { angle: 75, scale: 0.6 },
    { angle: 140, scale: 0.85 },
    { angle: 195, scale: 0.5 },
    { angle: 250, scale: 1.1 },
    { angle: 310, scale: 0.7 },
  ],
  b: [
    { angle: -15, scale: 1.15 },
    { angle: 45, scale: 0.55 },
    { angle: 100, scale: 0.9 },
    { angle: 165, scale: 0.65 },
    { angle: 230, scale: 1.0 },
  ],
  c: [
    { angle: 10, scale: 0.8 },
    { angle: 65, scale: 1.1 },
    { angle: 120, scale: 0.5 },
    { angle: 175, scale: 0.95 },
    { angle: 230, scale: 0.6 },
    { angle: 285, scale: 0.85 },
    { angle: 335, scale: 0.65 },
  ],
  d: [
    { angle: 5, scale: 0.7 },
    { angle: 60, scale: 1.0 },
    { angle: 130, scale: 0.5 },
    { angle: 200, scale: 0.9 },
    { angle: 275, scale: 0.6 },
  ],
  e: [
    { angle: 30, scale: 0.6 },
    { angle: 90, scale: 0.5 },
    { angle: 160, scale: 0.75 },
    { angle: 220, scale: 0.55 },
    { angle: 300, scale: 0.65 },
  ],
  f: [
    { angle: 0, scale: 1.2 },
    { angle: 50, scale: 0.7 },
    { angle: 110, scale: 1.0 },
    { angle: 170, scale: 0.6 },
    { angle: 225, scale: 1.1 },
    { angle: 280, scale: 0.5 },
    { angle: 330, scale: 0.8 },
  ],
  g: [
    { angle: 15, scale: 0.5 },
    { angle: 80, scale: 0.9 },
    { angle: 150, scale: 0.4 },
    { angle: 210, scale: 0.7 },
    { angle: 290, scale: 0.55 },
  ],
  h: [
    { angle: 40, scale: 0.5 },
    { angle: 95, scale: 0.65 },
    { angle: 160, scale: 0.4 },
    { angle: 205, scale: 0.6 },
    { angle: 260, scale: 0.45 },
    { angle: 320, scale: 0.7 },
  ],
  i: [
    { angle: 60, scale: 0.6 },
    { angle: 120, scale: 0.9 },
    { angle: 190, scale: 0.5 },
    { angle: 250, scale: 0.75 },
  ],
  j: [
    { angle: 25, scale: 0.4 },
    { angle: 75, scale: 0.55 },
    { angle: 135, scale: 0.35 },
    { angle: 195, scale: 0.5 },
    { angle: 245, scale: 0.4 },
    { angle: 305, scale: 0.6 },
  ],
}

const FLING_ANGLE: Record<InkVariant, number> = {
  a: 100,
  b: -60,
  c: 200,
  d: 150,
  e: -100,
  f: 60,
  g: 170,
  h: -40,
  i: 210,
  j: -150,
}

type SplashProps = {
  className?: string
  x: number
  y: number
  scale?: number
  rotate?: number
  variant?: InkVariant
  color: 'blue' | 'orange'
  withDrip?: boolean
  withDots?: boolean
}

export function InkSplash({
  className,
  x,
  y,
  scale = 1,
  rotate = 0,
  variant = 'a',
  color,
  withDrip = true,
  withDots = true,
}: SplashProps) {
  const transform = `translate(${x} ${y}) rotate(${rotate}) scale(${scale})`
  return (
    <g className={`ink-splash ink-splash--${color}${className ? ` ${className}` : ''}`} transform={transform}>
      <use href={`#ink-core-${variant}`} />
      {SATELLITE_CONFIG[variant].map((satellite, i) => (
        <use key={i} href="#ink-satellite" transform={`rotate(${satellite.angle}) scale(${satellite.scale})`} />
      ))}
      {withDrip && <use href="#ink-fling" transform={`rotate(${FLING_ANGLE[variant]})`} />}
      {withDots && <use href="#ink-dots" x="-88" y="52" />}
      {withDots && <use href="#ink-dots" x="86" y="-68" transform="rotate(140)" />}
    </g>
  )
}

const VARIANT_ORDER: InkVariant[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// Offsets (distinct mod 10) used to pick 4 well-spread variants for a given starting
// letter, so each splash cycles through a small set of noticeably different shapes
// instead of redrawing the same one every time it reappears.
const CYCLE_OFFSETS = [0, 3, 5, 8]

function cycleVariants(base: InkVariant): InkVariant[] {
  const startIndex = VARIANT_ORDER.indexOf(base)
  return CYCLE_OFFSETS.map((offset) => VARIANT_ORDER[(startIndex + offset) % VARIANT_ORDER.length])
}

type CornerSplashProps = {
  position: string
  color: 'blue' | 'orange'
  size?: number
  variant?: InkVariant
  rotate?: number
}

export function CornerSplash({ position, color, size = 220, variant = 'a', rotate = 0 }: CornerSplashProps) {
  const cycle = cycleVariants(variant)
  return (
    <svg
      className={`corner-splash corner-splash--${position}`}
      width={size}
      height={size}
      viewBox="-145 -145 290 290"
      aria-hidden="true"
    >
      {/* Each ink shape is drawn 3 times, once per horizontal band, each clipped to its
          own third and wiped independently (see .ink-wipe-band in index.css) so a single
          erase reads as 3 passes moving left-right-left while working down the shape. */}
      {[0, 1, 2].map((band) => (
        <g key={band} className={`ink-wipe-band ink-wipe-band--${band}`} clipPath={`url(#ink-band-clip-${band})`}>
          {cycle.map((v, i) => (
            <g className={`ink-splash-slot ink-splash-slot--${i}`} key={v}>
              <InkSplash x={0} y={0} color={color} variant={v} rotate={rotate} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}
