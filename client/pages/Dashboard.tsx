import { AlertTriangle, ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const { toast } = useToast();

  const handleViewDetails = () => {
    toast({
      title: "Opening Details",
      description: "Loading security alert details...",
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Critical Security Alert */}
        <div className="bg-red-950/50 border border-red-900 rounded-lg p-6 flex gap-4">
          <AlertTriangle
            className="text-red-400 flex-shrink-0 mt-1"
            size={24}
          />
          <div className="flex-1">
            <h3 className="text-red-300 font-semibold mb-1">
              Critical Security Alert
            </h3>
            <p className="text-red-200/80 text-sm mb-4">
              Unauthorized login attempt detected from Moscow, Russia. Session
              has been automatically blocked.
            </p>
            <button
              onClick={handleViewDetails}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Logins Today */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Total Logins Today
              </h3>
              <div className="w-10 h-10 bg-accent1/20 rounded-lg flex items-center justify-center">
                <span className="text-accent1 font-bold">↓</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-foreground">47</p>
              <p className="flex items-center gap-1 text-xs text-green-400">
                <ArrowUpRight size={14} />
                +3% from yesterday
              </p>
            </div>
          </div>

          {/* Suspicious Attempts */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Suspicious Attempts
              </h3>
              <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                <span className="text-warning font-bold">⚠</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-foreground">3</p>
              <p className="flex items-center gap-1 text-xs text-red-400">
                <ArrowDownRight size={14} />
                -3% from yesterday
              </p>
            </div>
          </div>

          {/* Blocked Sessions */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Blocked Sessions
              </h3>
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <span className="text-success font-bold">✓</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-foreground">2</p>
              <p className="flex items-center gap-1 text-xs text-red-400">
                <ArrowDownRight size={14} />
                0% from yesterday
              </p>
            </div>
          </div>

          {/* Avg Response Time */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground text-sm font-medium">
                Avg Response Time
              </h3>
              <div className="w-10 h-10 bg-accent2/20 rounded-lg flex items-center justify-center">
                <span className="text-accent2 font-bold">⏱</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-foreground">1.2s</p>
              <p className="flex items-center gap-1 text-xs text-green-400">
                <ArrowUpRight size={14} />
                8% faster
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Risk Level */}
          <div className="lg:col-span-1 bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center">
            <h3 className="text-foreground font-semibold mb-8 text-center">
              Current Risk Level
            </h3>
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg
                className="absolute inset-0 -rotate-90"
                viewBox="0 0 200 200"
                width={160}
                height={160}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="hsl(var(--card))"
                  strokeWidth="12"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  fill="none"
                  stroke="url(#riskGradient)"
                  strokeWidth="12"
                  strokeDasharray={`${(39 / 100) * 597} 597`}
                />
                <defs>
                  <linearGradient
                    id="riskGradient"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="200"
                  >
                    <stop offset="0%" stopColor="hsl(281 91% 60%)" />
                    <stop offset="100%" stopColor="hsl(281 91% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col items-center justify-center">
                <p className="text-5xl font-bold text-accent1">39</p>
                <p className="text-muted-foreground text-xs mt-1">Risk Score</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              Manage cookies or opt out
            </p>
          </div>

          {/* Live Activity Feed */}
          <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-foreground font-semibold">
                Live Activity Feed
              </h3>
              <button className="text-accent1 text-xs font-medium hover:text-accent1/80">
                → Live
              </button>
            </div>

            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="bg-background border border-red-900/40 bg-red-950/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle size={16} className="text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">
                      Suspicious login attempt blocked
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                      <span>🌍 Moscow, Russia</span>
                      <span>💻 Windows PC</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      2 min ago
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="bg-background border border-warning/20 bg-warning/5 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-warning/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye size={16} className="text-warning" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">
                      New device login pending verification
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                      <span>🌍 New York, USA</span>
                      <span>📱 iPhone 15 Pro</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      15 min ago
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Item 3 */}
              <div className="bg-background border border-success/20 bg-success/5 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-success text-xs">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">
                      Login verified successfully
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                      <span>🌍 San Francisco, USA</span>
                      <span>💻 MacBook Pro</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
