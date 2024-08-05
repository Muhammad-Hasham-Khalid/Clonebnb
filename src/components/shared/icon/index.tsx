import { icons, LucideProps } from "lucide-react";
import { FC } from "react";
import { customIcons } from "./icons";

export type IconName = keyof typeof icons | keyof typeof customIcons;
type IconProps = { name: IconName } & LucideProps;

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  if (name in icons) {
    const LucideIcon = icons[name as keyof typeof icons];
    return <LucideIcon {...props} />;
  }

  const CustomIcon = customIcons[name as keyof typeof customIcons];
  return <CustomIcon {...props} />;
};
