import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotification, setEmailNotification] = useState(true);
  const [pushNotification, setPushNotification] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your account preferences
        </p>
      </div>

      {/* Profile */}
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

        <h2 className="text-xl font-semibold mb-5">
          Profile Information
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 text-slate-400">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Akil Khan"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Email
            </label>

            <input
              type="email"
              defaultValue="akil@email.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              Phone
            </label>

            <input
              type="text"
              defaultValue="+91 638817****"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

        </div>

      </div>

      {/* Preferences */}

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

        <h2 className="text-xl font-semibold mb-5">
          Preferences
        </h2>

        <div className="space-y-5">

          <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 items-center">

            <span>Dark Mode</span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

          </div>

          <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 items-center">

            <span>Email Notifications</span>

            <input
              type="checkbox"
              checked={emailNotification}
              onChange={() =>
                setEmailNotification(!emailNotification)
              }
            />

          </div>

          <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 items-center">

            <span>Push Notifications</span>

            <input
              type="checkbox"
              checked={pushNotification}
              onChange={() =>
                setPushNotification(!pushNotification)
              }
            />

          </div>

        </div>

      </div>

      {/* Language */}

      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">

        <h2 className="text-xl font-semibold mb-5">
          Language
        </h2>

        <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3">

          <option>English</option>

          <option>Hindi</option>

          <option>Spanish</option>

        </select>

      </div>

      <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-xl font-semibold transition">
        Save Changes
      </button>

    </div>
  );
}