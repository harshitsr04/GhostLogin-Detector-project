import { Search, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/Layout";

const LoginHistory = () => {
  const loginData = [
    {
      id: 1,
      timestamp: "2025-11-30\n14:23:15",
      location: "San Francisco\nUSA",
      device: "MacBook Pro\nmacOS 14.1",
      source: "Instagram",
      ip: "192.168.1.100",
      status: "Success",
      risk: "12",
      access: ["Allow", "Accept", "Block"],
      statusColor: "bg-green-600",
    },
    {
      id: 2,
      timestamp: "2025-11-30\n13:45:22",
      location: "Moscow\nRussia",
      device: "Windows PC\nWindows 10",
      source: "Facebook",
      ip: "185.229.181.45",
      status: "Blocked",
      risk: "34",
      access: ["Allow", "Accept", "Block"],
      statusColor: "bg-red-600",
    },
    {
      id: 3,
      timestamp: "2025-11-30\n11:12:08",
      location: "New York\nUSA",
      device: "iPhone 15 Pro\niOS 17 - iOS",
      source: "Twitter",
      ip: "198.51.100.23",
      status: "Suspicious",
      risk: "67",
      access: ["Allow", "Accept", "Block"],
      statusColor: "bg-warning",
    },
    {
      id: 4,
      timestamp: "2025-11-30\n09:30:45",
      location: "San Francisco\nUSA",
      device: "MacBook Air\nMacOS 13.x",
      source: "LinkedIn",
      ip: "192.168.1.100",
      status: "Success",
      risk: "8",
      access: ["Allow", "Accept", "Block"],
      statusColor: "bg-green-600",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Search and Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by location, device, source, or IP..."
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md text-foreground hover:bg-card/80 transition-colors">
              All Status
              <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-md hover:bg-success/90 transition-colors">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-sm font-medium">Total Logins</p>
            <p className="text-3xl font-bold text-foreground mt-2">8</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-sm font-medium">Successful</p>
            <p className="text-3xl font-bold text-success mt-2">4</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-sm font-medium">Blocked</p>
            <p className="text-3xl font-bold text-red-400 mt-2">2</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-muted-foreground text-sm font-medium">Suspicious</p>
            <p className="text-3xl font-bold text-warning mt-2">2</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Device & Browser
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Login Source
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    IP Address
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Risk
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Grant Access
                  </th>
                </tr>
              </thead>
              <tbody>
                {loginData.map((row) => (
                  <tr key={row.id} className="border-b border-border hover:bg-background/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground whitespace-pre-line">
                      {row.timestamp}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="whitespace-pre-line">{row.location}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground whitespace-pre-line">
                      {row.device}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-info/20 rounded flex items-center justify-center text-xs">
                          ⚪
                        </span>
                        {row.source}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground font-mono">
                      {row.ip}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`${row.statusColor} px-3 py-1 rounded-full text-white text-xs font-medium`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-red-400 font-semibold">
                      {row.risk}
                    </td>
                    <td className="px-6 py-4 text-sm space-y-2">
                      <div className="flex gap-2 flex-wrap">
                        <button
                          onClick={() => handleAllow(row.id, row.location)}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium transition-colors"
                        >
                          ✓ Allow
                        </button>
                        <button
                          onClick={() => handleAccept(row.id, row.location)}
                          className="px-3 py-1 bg-accent1 hover:bg-accent1/90 text-white rounded text-xs font-medium transition-colors"
                        >
                          ✓ Accept
                        </button>
                        <button
                          onClick={() => handleBlock(row.id, row.location)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium transition-colors"
                        >
                          ⨯ Block
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginHistory;
