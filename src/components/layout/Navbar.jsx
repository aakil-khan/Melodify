import { useState } from "react";
import { Menu } from "lucide-react";

import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";
import NotificationBell from "../common/NotificationBell";
import ProfileMenu from "../common/ProfileMenu";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <MobileSidebar open={open} setOpen={setOpen} />

      <header className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={28} />
            </button>

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                Dashboard
              </h1>

              <p className="text-slate-400 text-sm">
                Welcome back 👋
              </p>
            </div>

          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block w-[420px]">
            <SearchBar />
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NotificationBell />
            <ProfileMenu />
          </div>

        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden">
          <SearchBar />
        </div>

      </header>
    </>
  );
}