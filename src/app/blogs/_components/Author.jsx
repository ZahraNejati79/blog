import Avatar from "@/ui/Avatar";

export default function Author({ avatarUrl, name }) {
  return (
    <div className="flex items-center text-sm text-secondary-500">
      <Avatar src={avatarUrl} />
      <div>{name}</div>
    </div>
  );
}
