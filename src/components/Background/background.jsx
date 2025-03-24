import { Boxes } from "../ui/background-boxes";

// eslint-disable-next-line react/prop-types
export function BackgroundBoxesDemo({ children }) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      {/* Background overlay with lower z-index */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      {/* Foreground content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
