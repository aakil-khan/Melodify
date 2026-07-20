
export default function ProfileCard() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <div className="flex flex-col items-center">
        <img
          src="./akilpp.jpg"
          alt=""
          className="w-40 h-40 rounded-full object-cover object-top border-4 border-green-400 "/>
        <h2 className="text-xl font-bold mt-4">
          Akil Khan
        </h2>

        <p className="text-slate-400">
          Music Platform Admin
        </p>

      </div>

      <div className="mt-6 space-y-3">
        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span>Total Songs</span>
          <span>18K</span>
        </div>

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span>Artists</span>
          <span>240</span>
        </div>

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span>Premium Users</span>
          <span>52K</span>
        </div>

      </div>

    </div>
  );
}