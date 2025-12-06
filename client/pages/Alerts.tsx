import {
  Bell,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Info,
  X,
  Mail,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

const Alerts = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState("all");
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "critical",
      title: "Unauthorized Login Attempt Blocked",
      description:
        "A login attempt from an unrecognized device in Moscow, Russia was automatically blocked due to high risk score (74/100).",
      timestamp: "2 minutes ago",
      location: "🌍 Moscow, Russia",
      device: "💻 Windows PC",
      actions: ["Review Details", "Mark as Read", "Dismiss"],
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "New Device Login Detected",
      description:
        "A new iPhone 15 Pro attempted to login from New York, USA. Please verify if this was you.",
      timestamp: "15 minutes ago",
      location: "🌍 New York, USA",
      device: "📱 iPhone 15 Pro",
      actions: ["Review Details", "Mark as Read", "Dismiss"],
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Login from New Location",
      description:
        "You logged in from San Francisco, USA on your MacBook Pro. This is a new location.",
      timestamp: "1 hour ago",
      location: "🌍 San Francisco, USA",
      device: "💻 MacBook Pro",
      actions: ["Review Details", "Mark as Read", "Dismiss"],
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Successful Login Verification",
      description:
        "Your two-factor authentication was successfully completed for the login attempt.",
      timestamp: "2 hours ago",
      location: "🌍 San Francisco, USA",
      device: "💻 MacBook Pro",
      actions: ["Review Details", "Mark as Read", "Dismiss"],
      read: true,
    },
  ]);

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle size={20} className="text-red-400" />;
      case "warning":
        return <AlertCircle size={20} className="text-warning" />;
      case "info":
        return <Info size={20} className="text-info" />;
      case "success":
        return <CheckCircle size={20} className="text-success" />;
      default:
        return <Bell size={20} className="text-accent1" />;
    }
  };

  const getAlertBorder = (type: string) => {
    switch (type) {
      case "critical":
        return "border-red-900/40 bg-red-950/20";
      case "warning":
        return "border-warning/30 bg-warning/10";
      case "info":
        return "border-info/30 bg-info/10";
      case "success":
        return "border-success/30 bg-success/10";
      default:
        return "border-border";
    }
  };

  const handleMarkAsRead = (alertId: number, alertTitle: string) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === alertId ? { ...alert, read: true } : alert,
      ),
    );
    toast({
      title: "Marked as Read",
      description: `"${alertTitle}" marked as read.`,
    });
  };

  const handleDismiss = (alertId: number, alertTitle: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== alertId));
    toast({
      title: "Alert Dismissed",
      description: `"${alertTitle}" has been dismissed.`,
    });
  };

  const handleReviewDetails = (alertTitle: string) => {
    toast({
      title: "Opening Details",
      description: `Reviewing details for "${alertTitle}"...`,
    });
  };

  const handleToggleNotification = (type: string) => {
    if (type === "email") {
      setEmailEnabled(!emailEnabled);
      toast({
        title: emailEnabled ? "Email Alerts Disabled" : "Email Alerts Enabled",
        description: `Email notifications have been ${emailEnabled ? "disabled" : "enabled"}.`,
      });
    } else if (type === "sms") {
      setSmsEnabled(!smsEnabled);
      toast({
        title: smsEnabled ? "SMS Alerts Disabled" : "SMS Alerts Enabled",
        description: `SMS notifications have been ${smsEnabled ? "disabled" : "enabled"}.`,
      });
    } else if (type === "push") {
      setPushEnabled(!pushEnabled);
      toast({
        title: pushEnabled
          ? "Push Notifications Disabled"
          : "Push Notifications Enabled",
        description: `Push notifications have been ${pushEnabled ? "disabled" : "enabled"}.`,
      });
    }
  };

  const handleMarkAllAsRead = () => {
    setAlerts(alerts.map((alert) => ({ ...alert, read: true })));
    toast({
      title: "All Marked as Read",
      description: "All alerts have been marked as read.",
    });
  };

  const filteredAlerts =
    filter === "all"
      ? alerts
      : alerts.filter((alert) => {
          if (filter === "unread") return !alert.read;
          return alert.type === filter;
        });

  const unreadCount = alerts.filter((a) => !a.read).length;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-foreground">
                Alert Center
              </h1>
              {unreadCount > 0 && (
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {unreadCount}
                </span>
              )}
            </div>
            <p className="text-muted-foreground">
              Stay informed about security events and login activities
            </p>
          </div>
          <button
            onClick={handleMarkAllAsRead}
            className="bg-accent1 hover:bg-accent1/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Mark All as Read
          </button>
        </div>

        {/* Alert Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Alerts */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-info/20 rounded-lg flex items-center justify-center">
                <Mail size={20} className="text-info" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email Alerts</h3>
                <p className="text-xs text-muted-foreground">
                  {emailEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggleNotification("email")}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                emailEnabled
                  ? "bg-success hover:bg-success/90 text-white"
                  : "bg-destructive hover:bg-destructive/90 text-white"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  emailEnabled ? "bg-white" : "bg-white/50"
                }`}
              ></div>
              {emailEnabled ? "Turn Off" : "Turn On"}
            </button>
          </div>

          {/* SMS Alerts */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                <Smartphone size={20} className="text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">SMS Alerts</h3>
                <p className="text-xs text-muted-foreground">
                  {smsEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggleNotification("sms")}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                smsEnabled
                  ? "bg-success hover:bg-success/90 text-white"
                  : "bg-destructive hover:bg-destructive/90 text-white"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  smsEnabled ? "bg-white" : "bg-white/50"
                }`}
              ></div>
              {smsEnabled ? "Turn Off" : "Turn On"}
            </button>
          </div>

          {/* Push Notifications */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent1/20 rounded-lg flex items-center justify-center">
                <Bell size={20} className="text-accent1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Push Notifications
                </h3>
                <p className="text-xs text-muted-foreground">
                  {pushEnabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggleNotification("push")}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                pushEnabled
                  ? "bg-success hover:bg-success/90 text-white"
                  : "bg-destructive hover:bg-destructive/90 text-white"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full ${
                  pushEnabled ? "bg-white" : "bg-white/50"
                }`}
              ></div>
              {pushEnabled ? "Turn Off" : "Turn On"}
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {["all", "unread", "critical", "warning", "info", "success"].map(
            (f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                  filter === f
                    ? "bg-accent1 text-white"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ),
          )}
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`border rounded-lg p-6 ${getAlertBorder(alert.type)}`}
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {getAlertIcon(alert.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-foreground font-semibold">
                          {alert.title}
                        </h3>
                        {!alert.read && (
                          <span className="inline-block w-2 h-2 bg-accent1 rounded-full ml-2"></span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {alert.timestamp}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {alert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                      <span>{alert.location}</span>
                      <span>•</span>
                      <span>{alert.device}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleReviewDetails(alert.title)}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium transition-colors"
                      >
                        Review Details
                      </button>
                      <button
                        onClick={() => handleMarkAsRead(alert.id, alert.title)}
                        disabled={alert.read}
                        className="px-3 py-1 bg-background/50 hover:bg-background border border-border text-foreground rounded text-xs font-medium transition-colors disabled:opacity-50"
                      >
                        Mark as Read
                      </button>
                      <button
                        onClick={() => handleDismiss(alert.id, alert.title)}
                        className="px-3 py-1 bg-background/50 hover:bg-background border border-border text-foreground rounded text-xs font-medium transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No alerts to display for the selected filter
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Alerts;
