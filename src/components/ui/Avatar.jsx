import { Avatar } from "radix-ui";

export const AvatarComponent = () => (
  <div className="size-48 rounded-full overflow-hidden">
    <Avatar.Root>
      <Avatar.Image
        className="size-full rounded-[inherit] object-cover"
        src="./profile.png"
      />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  </div>
);
