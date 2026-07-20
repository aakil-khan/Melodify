import { ChevronDown } from "lucide-react";


export default function ProfileMenu() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">

      <img
        src="./akilpp.jpg"
        className="rounded-full w-10 h-10"
      />
      <div>

        <h3 className="font-semibold">
          Akil Khan
        </h3>

        <p className="text-xs text-gray-400">
          Administrator
        </p>

      </div>

      <ChevronDown size={18}/>

    </div>
  );
}