
import { useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import UploadZone from "../components/upload/UploadZone";
import SummaryCard from "../summary/SummaryCard";

function Dashboard() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DashboardLayout>
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Bienvenue sur DocMind AI
        </h2>

        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Commencez par importer votre document.
        </p>

        <div className="mt-8 sm:mt-10">
          <UploadZone
            setSummary={setSummary}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </div>

        <SummaryCard summary={summary} isLoading={isLoading} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;