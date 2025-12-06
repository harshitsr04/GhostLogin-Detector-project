import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, Shield, Clock, Globe } from "lucide-react";
import Layout from "@/components/Layout";

const Analytics = () => {
  const loginActivityData = [
    { date: "Nov 24", successful: 45, suspicious: 12, total: 8 },
    { date: "Nov 25", successful: 52, suspicious: 8, total: 15 },
    { date: "Nov 26", successful: 38, suspicious: 14, total: 5 },
    { date: "Nov 27", successful: 61, suspicious: 9, total: 18 },
    { date: "Nov 28", successful: 55, suspicious: 11, total: 12 },
    { date: "Nov 29", successful: 48, suspicious: 13, total: 7 },
    { date: "Nov 30", successful: 67, suspicious: 10, total: 20 },
  ];

  const riskScoreData = [
    { time: "00:00", risk: 35 },
    { time: "04:00", risk: 45 },
    { time: "08:00", risk: 28 },
    { time: "12:00", risk: 38 },
    { time: "16:00", risk: 25 },
    { time: "20:00", risk: 32 },
    { time: "21:00", risk: 42 },
  ];

  const deviceDistributionData = [
    { name: "Desktop", value: 45, color: "#8b5cf6" },
    { name: "Mobile", value: 35, color: "#06b6d4" },
    { name: "Tablet", value: 20, color: "#ec4899" },
  ];

  const geographicData = [
    { country: "USA", users: 245 },
    { country: "UK", users: 120 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Avg Risk Score */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Avg Risk Score
              </h3>
              <Shield size={20} className="text-accent1/60" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-foreground">24.3</p>
              <p className="text-xs text-red-400 flex items-center gap-1">
                <ArrowUpRight size={12} />
                +1.2% this week
              </p>
            </div>
          </div>

          {/* Threat Detection Rate */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Threat Detection Rate
              </h3>
              <ArrowUpRight size={20} className="text-accent1/60" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-foreground">98.7%</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <ArrowUpRight size={12} />
                +1.2% this week
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Response Time
              </h3>
              <Clock size={20} className="text-success/60" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-foreground">1.2s</p>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <ArrowUpRight size={12} />
                +.05s faster
              </p>
            </div>
          </div>

          {/* Unique Locations */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Unique Locations
              </h3>
              <Globe size={20} className="text-red-400/60" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-foreground">12</p>
              <p className="text-xs text-red-400 flex items-center gap-1">
                <ArrowUpRight size={12} />
                5 countries
              </p>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Login Activity Trends */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Login Activity Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loginActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                  cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
                />
                <Legend />
                <Bar dataKey="successful" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="total" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Risk Score Timeline */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Risk Score Timeline (24h)
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskScoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                  cursor={{ stroke: "hsl(var(--border))" }}
                />
                <Line
                  type="monotone"
                  dataKey="risk"
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Device Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Device Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) =>
                    `${name}: ${value}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Manage cookies or opt out
            </p>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Geographic Distribution
            </h3>
            <div className="space-y-4">
              {geographicData.map((item, idx) => {
                const maxValue = 245;
                const percentage = (item.users / maxValue) * 100;
                return (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground">{item.country}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {item.users}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          idx === 0
                            ? "bg-gradient-to-r from-info to-info"
                            : "bg-gradient-to-r from-info/60 to-info/60"
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              Manage cookies or opt out
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
