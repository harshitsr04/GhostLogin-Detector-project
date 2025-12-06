import { Plus, CheckCircle, AlertCircle, XCircle, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";

const Devices = () => {
  const devices = [
    {
      id: 1,
      name: "MacBook Pro",
      os: "macOS 14.1",
      browser: "Chrome 119",
      lastActive: "2 minutes ago",
      location: "San Francisco, USA",
      fingerprint: "e3f6d5c242",
      status: "trusted",
      icon: "💻",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      os: "iOS 17.2",
      browser: "Safari 17",
      lastActive: "15 minutes ago",
      location: "New York, USA",
      fingerprint: "8fbc441fa67-7",
      status: "trusted",
      icon: "📱",
    },
    {
      id: 3,
      name: "iPad Air",
      os: "iPadOS 17.1",
      browser: "Safari 17",
      lastActive: "1 hour ago",
      location: "San Francisco, USA",
      fingerprint: "a3f6d5c242",
      status: "trusted",
      icon: "📱",
    },
    {
      id: 4,
      name: "Windows PC",
      os: "Windows 11",
      browser: "Chrome 121",
      lastActive: "3 hours ago",
      location: "Unknown",
      fingerprint: "9c8e7a5b2d1",
      status: "suspicious",
      icon: "💻",
    },
  ];

  const trustedCount = devices.filter((d) => d.status === "trusted").length;
  const newCount = 1;
  const suspiciousCount = devices.filter((d) => d.status === "suspicious")
    .length;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "trusted":
        return <CheckCircle size={20} className="text-success" />;
      case "suspicious":
        return <XCircle size={20} className="text-red-400" />;
      default:
        return <AlertCircle size={20} className="text-warning" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "trusted":
        return "bg-success/20 border-success/30";
      case "suspicious":
        return "bg-red-950/20 border-red-900/30";
      default:
        return "bg-warning/20 border-warning/30";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Device Management
            </h1>
            <p className="text-muted-foreground">
              Manage and monitor all devices that have accessed your account
            </p>
          </div>
          <button className="bg-accent1 hover:bg-accent1/90 text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium transition-colors">
            <Plus size={20} />
            Add Device
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">
                Trusted Devices
              </h3>
              <CheckCircle size={24} className="text-success" />
            </div>
            <p className="text-4xl font-bold text-foreground">{trustedCount}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">New Devices</h3>
              <AlertCircle size={24} className="text-warning" />
            </div>
            <p className="text-4xl font-bold text-foreground">{newCount}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-muted-foreground font-medium">Suspicious</h3>
              <XCircle size={24} className="text-red-400" />
            </div>
            <p className="text-4xl font-bold text-foreground">
              {suspiciousCount}
            </p>
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className={`border rounded-lg p-6 ${getStatusColor(device.status)}`}
            >
              {/* Header with Icon and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent1/20 rounded-lg flex items-center justify-center text-lg">
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {device.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{device.os}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {getStatusIcon(device.status)}
                  {device.status === "trusted" && (
                    <span className="text-xs bg-success text-white px-2 py-1 rounded font-medium">
                      Trusted
                    </span>
                  )}
                  {device.status === "suspicious" && (
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded font-medium">
                      Suspicious
                    </span>
                  )}
                  {device.status === "new" && (
                    <span className="text-xs bg-warning text-white px-2 py-1 rounded font-medium">
                      new
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Browser:</span>
                  <span className="text-sm text-foreground">{device.browser}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">
                    Last Active:
                  </span>
                  <span className="text-sm text-foreground">
                    {device.lastActive}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">Location:</span>
                  <span className="text-sm text-foreground">
                    {device.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-muted-foreground">
                    Fingerprint:
                  </span>
                  <span className="text-sm text-foreground font-mono">
                    {device.fingerprint}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-background/50 hover:bg-background text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors border border-border">
                  View Details
                </button>
                {device.status === "suspicious" ? (
                  <>
                    <button className="flex-1 bg-success hover:bg-success/90 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Trust Device
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex-1 bg-success hover:bg-success/90 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Trust Device
                    </button>
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      Block Device
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Devices;
