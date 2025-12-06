import { CheckCircle, Lock, Smartphone, LogIn } from "lucide-react";
import Layout from "@/components/Layout";

const Profile = () => {
  const securityScore = 87;
  const targetScore = 100;
  const scorePercentage = (securityScore / targetScore) * 100;

  const securityFactors = [
    {
      id: 1,
      icon: Lock,
      title: "Two-Factor Authentication",
      description: "2FA is enabled for all devices",
      progress: 100,
      points: 25,
      color: "from-accent1 to-accent1",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Trusted Devices",
      description: "3 trusted devices configured",
      progress: 75,
      points: 20,
      color: "from-accent1 to-accent1",
    },
    {
      id: 3,
      icon: Lock,
      title: "Password Strength",
      description: "Strong password with special characters",
      progress: 100,
      points: 15,
      color: "from-accent1 to-accent1",
    },
    {
      id: 4,
      icon: LogIn,
      title: "Login Patterns",
      description: "Consistent login patterns detected",
      progress: 80,
      points: 12,
      color: "from-accent1 to-accent1",
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Security Profile Section */}
        <div className="bg-gradient-to-r from-accent1/20 to-accent1/10 border border-accent1/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Circular Score */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg
                  className="absolute inset-0 -rotate-90"
                  viewBox="0 0 200 200"
                  width={200}
                  height={200}
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
                    stroke="url(#scoreGradient)"
                    strokeWidth="12"
                    strokeDasharray={`${(scorePercentage / 100) * 597} 597`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="scoreGradient"
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
                <div className="flex flex-col items-center justify-center relative z-10">
                  <p className="text-5xl font-bold text-foreground">
                    {securityScore}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Security Score
                  </p>
                </div>
              </div>
              <p className="text-sm text-accent1 flex items-center gap-1 absolute bottom-8 left-8">
                <span>📈</span>
                +13 points this month
              </p>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Your Security Profile
                </h2>
                <p className="text-muted-foreground">
                  Your security score reflects how well your account is
                  protected. Keep improving to reach 100!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Score Level</span>
                  <span className="bg-success text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Excellent
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Rank</span>
                  <span className="text-foreground font-semibold">Top 15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">
                    Next Milestone
                  </span>
                  <span className="text-foreground font-semibold">95 points</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Factors */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Security Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div
                  key={factor.id}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent1/20 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-accent1" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">
                          {factor.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${factor.color}`}
                        style={{ width: `${factor.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <span className="text-sm font-semibold text-accent1">
                      +{factor.points}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-xs text-muted-foreground">
          Manage cookies or opt out
        </p>
      </div>
    </Layout>
  );
};

export default Profile;
