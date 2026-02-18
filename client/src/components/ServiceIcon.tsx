import { Smile, Crown, Sparkles, CircleDot, Grid2X2, Sun, AlignCenter, Layers } from "lucide-react";

const iconMap: Record<string, typeof Smile> = {
  implant: CircleDot,
  smile: Smile,
  crown: Crown,
  allon4: Grid2X2,
  allon6: Layers,
  whitening: Sun,
  ortho: AlignCenter,
  veneer: Sparkles,
};

interface ServiceIconProps {
  type: string;
  className?: string;
}

export function ServiceIcon({ type, className }: ServiceIconProps) {
  const Icon = iconMap[type] || Sparkles;
  return <Icon className={className} />;
}
