import { FC } from "react";

interface AvatarProps {
  name?: string;
}

const Avatar: FC<AvatarProps> = ({ name }) => {
  return (
    <div className="flex flex-row items-center justify-center h-10 w-10 p-4 rounded-full bg-[var(--primary-color)] text-xl font-semibold text-white">
      <span>{name?.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default Avatar;
