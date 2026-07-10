

import { FileText, X } from "lucide-react";

function FileCard({ file, onRemove }) {
  return (
    <div className="mt-6 sm:mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 gap-4">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-500/10">
          <FileText className="text-red-500 size-5 sm:size-6" />
        </div>

        <div className="min-w-0">
          <p className="font-medium text-white text-sm sm:text-base truncate">
            {file.name}
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white flex-shrink-0"
      >
        <X size={18} className="sm:size-[20px]" />
      </button>
    </div>
  );
}

export default FileCard;