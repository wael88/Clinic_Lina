import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, MessageSquare, Globe, Clock, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WhatsappClick {
  id: number;
  page: string;
  lang: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  referrer: string | null;
  clickedAt: string;
}

export default function AdminClicks() {
  const { data: clicks, isLoading } = useQuery<WhatsappClick[]>({
    queryKey: ["/api/whatsapp-clicks"],
  });

  const totalClicks = clicks?.length || 0;
  const todayClicks = clicks?.filter((c) => {
    const d = new Date(c.clickedAt);
    const now = new Date();
    return d.toDateString() === now.toDateString();
  }).length || 0;

  const enClicks = clicks?.filter((c) => c.lang === "en").length || 0;
  const bgClicks = clicks?.filter((c) => c.lang === "bg").length || 0;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8" data-testid="section-admin-clicks">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild data-testid="button-admin-back">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Site
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-slate-900" data-testid="text-admin-title">WhatsApp Click Analytics</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-5 text-center" data-testid="card-stat-total">
            <MessageSquare className="w-8 h-8 text-[#25D366] mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">{totalClicks}</p>
            <p className="text-sm text-slate-500">Total Clicks</p>
          </Card>
          <Card className="p-5 text-center" data-testid="card-stat-today">
            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">{todayClicks}</p>
            <p className="text-sm text-slate-500">Today</p>
          </Card>
          <Card className="p-5 text-center" data-testid="card-stat-en">
            <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">{enClicks}</p>
            <p className="text-sm text-slate-500">English</p>
          </Card>
          <Card className="p-5 text-center" data-testid="card-stat-bg">
            <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">{bgClicks}</p>
            <p className="text-sm text-slate-500">Bulgarian</p>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="p-4 border-b bg-white">
            <h2 className="font-semibold text-slate-900">Click History</h2>
          </div>

          {isLoading ? (
            <div className="p-8 text-center text-slate-400">Loading...</div>
          ) : !clicks?.length ? (
            <div className="p-8 text-center text-slate-400">No WhatsApp clicks recorded yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm" data-testid="table-clicks">
                <thead className="bg-slate-50 text-left text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">#</th>
                    <th className="px-4 py-3 font-medium">Time</th>
                    <th className="px-4 py-3 font-medium">Page</th>
                    <th className="px-4 py-3 font-medium">Lang</th>
                    <th className="px-4 py-3 font-medium">Source</th>
                    <th className="px-4 py-3 font-medium">Medium</th>
                    <th className="px-4 py-3 font-medium">Campaign</th>
                    <th className="px-4 py-3 font-medium">Term</th>
                    <th className="px-4 py-3 font-medium">Referrer</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {clicks.map((click, idx) => (
                    <tr key={click.id} className="hover:bg-slate-50" data-testid={`row-click-${click.id}`}>
                      <td className="px-4 py-3 text-slate-400">{totalClicks - idx}</td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {new Date(click.clickedAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-slate-700 font-mono text-xs">{click.page}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${click.lang === "en" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                          {click.lang.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-600">{click.utmSource || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{click.utmMedium || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{click.utmCampaign || "—"}</td>
                      <td className="px-4 py-3 text-slate-600">{click.utmTerm || "—"}</td>
                      <td className="px-4 py-3 text-slate-600 max-w-[200px] truncate">
                        {click.referrer ? (
                          <span className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            {click.referrer}
                          </span>
                        ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
