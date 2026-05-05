import { Component as ParticleHero } from "./particle-hero";

const DemoOne = () => {
  return (
    <div className="w-full min-h-screen bg-navy-950 p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl">
            <ParticleHero />
        </div>
    </div>
  );
};

export { DemoOne };
