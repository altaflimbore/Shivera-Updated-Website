const BackgroundGraphics = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Top-left security shield */}
      <img
        src="/images/bg-security-shield.png"
        alt=""
        className="hidden md:block absolute -left-24 top-10 w-72 opacity-20"
      />

      {/* Top-right training / certification */}
      <img
        src="/images/bg-training.png"
        alt=""
        className="hidden lg:block absolute -right-20 top-24 w-[520px] opacity-15"
      />

      {/* Center-left DPDP shield */}
      <img
        src="/images/bg-dpdp.png"
        alt=""
        className="hidden xl:block absolute -left-32 top-1/2 w-[520px] -translate-y-1/2 opacity-15"
      />

      {/* Faint circular rings */}
      <img
        src="/images/bg-rings.png"
        alt=""
        className="absolute left-1/2 top-1/2 w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      {/* Bottom-left location marker */}
      <img
        src="/images/bg-location.png"
        alt=""
        className="hidden lg:block absolute left-10 bottom-10 w-64 opacity-15"
      />

      {/* Bottom-right cloud security */}
      <img
        src="/images/bg-cloud.png"
        alt=""
        className="hidden md:block absolute -right-16 bottom-0 w-80 opacity-20"
      />
    </div>
  )
}

export default BackgroundGraphics


