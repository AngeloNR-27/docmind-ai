import { Brain, LoaderCircle } from "lucide-react";

function SummaryCard({ summary, isLoading }) {
  return (
    <section
      className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-red-500/10
          "
        >
          <Brain className="text-red-500" size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Résumé IA
          </h2>

          <p className="text-sm text-slate-400">
            Analyse générée par DocMind AI
          </p>
        </div>
      </div>

      <div className="mt-8">
        {isLoading ? (
          <div className="flex items-center gap-3 text-red-400">
            <LoaderCircle className="animate-spin" size={22} />

            <span>
              Analyse du document en cours...
            </span>
          </div>
        ) : summary ? (
          <div
            className="
              whitespace-pre-wrap
              leading-8
              text-slate-300
            "
          >
            {summary}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-white/10
              p-8
              text-center
              text-slate-500
            "
          >
            Importez un document pour générer un résumé intelligent.
          </div>
        )}
      </div>
    </section>
  );
}

export default SummaryCard;