import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Music,
  Users,
  Disc3,
  Crown,
  MessageSquare,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Songs", path: "/songs", icon: Music },
  { name: "Artists", path: "/artists", icon: Users },
  { name: "Albums", path: "/albums", icon: Disc3 },
  { name: "Premium", path: "/premium", icon: Crown },
  { name: "Reviews", path: "/reviews", icon: MessageSquare },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function MobileSidebar({ open, setOpen }) {
  return (
    <>
      {/* Background */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition
        ${open ? "block" : "hidden"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:hidden`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-800">

          <h1 className="text-2xl font-bold text-green-500">
            🎵 Melodify
          </h1>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>

        </div>

        <nav className="p-4 space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-green-500 text-black"
                      : "text-white hover:bg-slate-800"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>
      </aside>
    </>
  );
}