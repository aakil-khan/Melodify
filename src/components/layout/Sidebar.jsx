import { NavLink } from "react-router-dom";
import logo from "../../assets/melodify-logo.png";
import {
  LayoutDashboard,
  Music,
  Users,
  Disc3,
  Crown,
  MessageSquare,
  Settings,
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
export default function Sidebar() {
  return (
  <aside
  className="
  fixed
  left-0
  top-0
  z-50
  h-screen
  w-64
  bg-slate-950
  border-r
  border-slate-800
  p-5
  hidden
  md:flex
  flex-col
  "
>
      <div className="flex items-center gap-3 mb-10">
  <img
    src={logo}
    alt="Melodify Logo"
    className="w-12 h-12 object-contain"
  />

  <div>
    <h1 className="text-2xl font-bold text-green-500">
      Melodify
    </h1>

    <p className="text-xs text-slate-400">
      Feel the Music
    </p>
  </div>
</div>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive ? "bg-green-500 text-black font-semibold" : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto pt-6 border-t border-slate-800">
    <p className="text-center text-xs text-slate-500">
      Melodify v1.0
    </p>
  </div>
    </aside>
  );
}

