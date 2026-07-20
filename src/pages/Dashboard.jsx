import DashboardCard from "../components/dashboard/DashboardCard";
import { stats } from "../data/dashboardData";
import LineChartComponent from "../components/charts/LineChartComponent";
import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import RecentSongs from "../components/dashboard/RecentSongs";
import Notifications from "../components/dashboard/Notifications";
import ProfileCard from "../components/dashboard/ProfileCard";
import AreaChartComponent from "../components/charts/AreaChartComponent";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>
       {/* StatsCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid grid-cols-1 sm:grid-cols-2xl:grid-cols-4 gap-6">
        {stats.map((item)=>(
          <DashboardCard key={item.id} {...item} />
        ))}
      </div>
         {/* Monthly Streams */}
  <LineChartComponent />

  {/* Charts Row */}
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
    <BarChartComponent />
    <PieChartComponent />
  </div>
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
  <RecentSongs />
  <Notifications />
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
  <ProfileCard />
  <AreaChartComponent />
</div>

</div>
  );
}