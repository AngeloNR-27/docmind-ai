

// import { useRef, useState } from "react";
// import { UploadCloud } from "lucide-react";
// import FileCard from "./FileCard";
// import { extractTextFromPDF } from "../../services/pdf";
// import DocumentAgent from "../../agents/DocumentAgent";

// function UploadZone({ setSummary, setIsLoading,isLoading, }) {
//   const inputRef = useRef(null);

//   const [file, setFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);

//   async function handleFile(selectedFile) {
//     if (
//       selectedFile &&
//       selectedFile.type === "application/pdf"
//     ) {
//       setFile(selectedFile);

//       setSummary("");
//       setIsLoading(true);

//       try {
//         const text = await extractTextFromPDF(selectedFile);

//         const summary = await DocumentAgent.summarize(text);

//         setSummary(summary);

//       } catch (error) {
//         console.error(
//           "Erreur lors de l'analyse :",
//           error
//         );

//         setSummary(
//           "Une erreur est survenue pendant l'analyse du document."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   }

//   function handleInputChange(event) {
//     const selectedFile = event.target.files[0];

//     handleFile(selectedFile);
//   }

//   function handleDragOver(event) {
//     event.preventDefault();

//     setIsDragging(true);
//   }

//   function handleDragLeave() {
//     setIsDragging(false);
//   }

//   function handleDrop(event) {
//     event.preventDefault();

//     setIsDragging(false);

//     const droppedFile = event.dataTransfer.files[0];

//     handleFile(droppedFile);
//   }

//   function removeFile() {
//     setFile(null);

//     setSummary("");
//   }

//   return (
//     <div>
//       <div
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         className={`
//           flex
//           min-h-[320px]
//           flex-col
//           items-center
//           justify-center
//           rounded-3xl
//           border
//           border-dashed
//           p-10
//           text-center
//           transition
//           duration-300

//           ${
//             isDragging
//               ? "border-red-500 bg-red-500/10 scale-[1.02]"
//               : "border-white/20 bg-white/5"
//           }
//         `}
//       >
//         <div
//           className="
//             flex
//             h-20
//             w-20
//             items-center
//             justify-center
//             rounded-2xl
//             bg-red-500/10
//           "
//         >
//           <UploadCloud
//             size={40}
//             className="text-red-500"
//           />
//         </div>

//         <h3
//           className="
//             mt-6
//             text-2xl
//             font-bold
//             text-white
//           "
//         >
//           Déposez votre document
//         </h3>

//         <p
//           className="
//             mt-3
//             text-slate-400
//           "
//         >
//           Glissez votre PDF ici ou sélectionnez un fichier.
//         </p>

//         <input
//           ref={inputRef}
//           type="file"
//           accept=".pdf"
//           hidden
//           onChange={handleInputChange}
//         />

//         <button
//           onClick={() => inputRef.current.click()}
//           className="
//             mt-8
//             rounded-full
//             bg-red-600
//             px-6
//             py-3
//             font-semibold
//             text-white
//             transition
//             hover:bg-red-500
//           "
//         >
//           Sélectionner un fichier
//         </button>

//         {isLoading && (
//           <p
//             className="
//               mt-5
//               text-sm
//               text-red-400
//             "
//           >
//             Analyse du document...
//           </p>
//         )}
//       </div>

//       {file && (
//         <FileCard
//           file={file}
//           onRemove={removeFile}
//         />
//       )}
//     </div>
//   );
// }

// export default UploadZone;

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import FileCard from "./FileCard";
import { extractTextFromPDF } from "../../services/pdf";
import DocumentAgent from "../../agents/DocumentAgent";

function UploadZone({ setSummary, setIsLoading, isLoading }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  async function handleFile(selectedFile) {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setSummary("");
      setIsLoading(true);

      try {
        const text = await extractTextFromPDF(selectedFile);
        const summary = await DocumentAgent.summarize(text);
        setSummary(summary);
      } catch (error) {
        console.error("Erreur lors de l'analyse :", error);
        setSummary("Une erreur est survenue pendant l'analyse du document.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  function handleInputChange(event) {
    const selectedFile = event.target.files[0];
    handleFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  }

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          flex min-h-[260px] sm:min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed p-6 sm:p-10 text-center transition duration-300
          ${isDragging ? "border-red-500 bg-red-500/10 scale-[1.02]" : "border-white/20 bg-white/5"}
        `}
      >
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-red-500/10">
          <UploadCloud size={32} className="text-red-500 sm:size-[40px]" />
        </div>

        <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-white">
          Déposez votre document
        </h3>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-400 max-w-xs sm:max-w-none">
          Glissez votre PDF ici ou sélectionnez un fichier.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleInputChange}
        />

        <button
          onClick={() => inputRef.current.click()}
          className="mt-6 sm:mt-8 rounded-full bg-red-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-semibold text-white transition hover:bg-red-500"
        >
          Sélectionner un fichier
        </button>

        {isLoading && (
          <p className="mt-5 text-sm text-red-400 animate-pulse">
            Analyse du document...
          </p>
        )}
      </div>

      {file && <FileCard file={file} onRemove={() => { setFile(null); setSummary(""); }} />}
    </div>
  );
}

export default UploadZone;