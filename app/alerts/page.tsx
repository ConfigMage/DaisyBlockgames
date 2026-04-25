import { AlertCard, type AlertType } from "@/components/alerts/AlertCard";
import { DemoCycle } from "@/components/alerts/DemoCycle";

export const metadata = {
  title: "DaisyBlockGames — Alerts",
};

const VALID: AlertType[] = ["follow", "sub", "donation"];

type AlertsPageProps = {
  searchParams: Promise<{
    type?: string;
    username?: string;
    message?: string;
    amount?: string;
    demo?: string;
  }>;
};

export default async function AlertsPage({ searchParams }: AlertsPageProps) {
  const params = await searchParams;
  const isDemo = params.demo === "true" || !params.type;
  const rawType = params.type as AlertType | undefined;
  const type: AlertType = rawType && VALID.includes(rawType) ? rawType : "follow";

  return (
    <main className="relative w-screen h-screen overflow-hidden flex items-center justify-center p-12">
      {isDemo ? (
        <DemoCycle />
      ) : (
        <AlertCard
          type={type}
          username={params.username ?? "TestViewer"}
          message={params.message}
          amount={params.amount}
        />
      )}
    </main>
  );
}
