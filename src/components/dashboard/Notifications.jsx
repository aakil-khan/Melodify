export default function Notifications() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">

      <h2 className="text-xl font-semibold mb-5">
        🔔 Notifications
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-700 rounded-xl p-4">
          🎵 New album uploaded
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          💎 120 Premium subscriptions today
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          🔥 The Weeknd reached 5M streams
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          🎤 Taylor Swift released a new single
        </div>

      </div>

    </div>
  );
}