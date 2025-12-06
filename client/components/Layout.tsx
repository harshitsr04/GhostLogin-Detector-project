import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  MonitorSquare,
  Bell,
  BarChart3,
  User,
  Menu,
  X,
} from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Login History", icon: History, path: "/login-history" },
    { label: "Devices", icon: MonitorSquare, path: "/devices" },
    { label: "Alerts", icon: Bell, path: "/alerts" },
    { label: "Analytics", icon: BarChart3, path: "/analytics" },
    { label: "Profile", icon: User, path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent1 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">
                  GhostLogin Detector
                </h1>
                <p className="text-xs text-muted-foreground">
                  Real-time Unauthorized Access Prevention
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-accent1 bg-accent1/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  Sarah Johnson
                </p>
                <p className="text-xs text-muted-foreground">
                  sarah@company.com
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-accent1 to-accent2 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-accent1/10 rounded-md text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border px-4 py-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-accent1 bg-accent1/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
};

export default Layout;
