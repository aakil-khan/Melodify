import { Bell } from "lucide-react";

export default function NotificationBell() {
  return (
    <div className="relative cursor-pointer">

      <Bell size={22} />

      <span className="absolute -top-2 -right-2 bg-green-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
        3
      </span>

    </div>
  );
}