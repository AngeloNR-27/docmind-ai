import { useState } from "react";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import UploadZone from "../components/upload/UploadZone";
import SummaryCard from "../summary/SummaryCard";

function Dashboard() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DashboardLayout>
      <div>
        <h2
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          Bienvenue sur DocMind AI
        </h2>

        <p
          className="
            mt-3
            text-slate-400
          "
        >
          Commencez par importer votre document.
        </p>

        <div className="mt-10">
            <UploadZone
            setSummary={setSummary}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            />
        </div>

        <SummaryCard
          summary={summary}
          isLoading={isLoading}
        />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;