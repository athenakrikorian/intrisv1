// Uses dotless-i (ı, U+0131) to remove the original tittle, then overlays
// a small arrow SVG at the same em-relative position the dot would occupy.
const ArrowI = () => (
  <span className="relative inline-block">
    {/* dotless i — visually identical to i but without the dot */}
    ı
    <svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '0.13em',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0.15em',
        height: '0.15em',
        overflow: 'visible',
      }}
    >
      <line x1="1" y1="9" x2="9" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <polyline points="5,0 9,1 8,5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function IntrisWordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <ArrowI />ntr<ArrowI />s
    </span>
  )
}
