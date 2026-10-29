type LogoStageProps = {
  src: string;
};

export function LogoStage({ src }: LogoStageProps) {
  return (
    <div className="logo-stage">
      <div className="logo-glow" aria-hidden="true" />
      <div className="logo-ticks" aria-hidden="true" />
      <div className="logo-ring logo-ring-a" aria-hidden="true" />
      <div className="logo-ring logo-ring-b" aria-hidden="true" />
      <div className="logo-plate">
        <img
          src={src}
          alt="Pharma Genie mark: a figure rising through a DNA helix wrapped around a capsule"
          className="logo-img"
        />
      </div>
    </div>
  );
}
