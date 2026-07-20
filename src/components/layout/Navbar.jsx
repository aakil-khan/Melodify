import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";
import NotificationBell from "../common/NotificationBell";
import ProfileMenu from "../common/ProfileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-4">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Left Section */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Welcome back 
          </p>
        </div>

        {/* Search */}
        <div className="w-full lg:max-w-md">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-4">
          <ThemeToggle />
          <NotificationBell />
          <ProfileMenu />
        </div>

      </div>

    </header>
  );
}