// import { FileText, Brain, Settings, X } from "lucide-react";

// function Sidebar({ isOpen, setIsOpen }) {
//   return (
//     <>
//       {isOpen && (
//         <div 
//           className="fixed inset-0 z-40 bg-black/60 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <aside
//         className={`
//           fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-black p-6 transition-transform duration-300
//           md:static md:translate-x-0
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         `}
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
//               🧠
//             </div>
//             <span className="text-xl font-bold text-white">
//               DocMind <span className="text-red-500">AI</span>
//             </span>
//           </div>

//           <button 
//             onClick={() => setIsOpen(false)}
//             className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white md:hidden"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <nav className="mt-12 flex flex-col gap-3">
//           <a className="flex items-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-red-400 cursor-pointer">
//             <FileText size={20} />
//             Documents
//           </a>

//           <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-white/5 hover:text-white cursor-pointer">
//             <Brain size={20} />
//             Agent IA
//           </a>

//           <a className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-white/5 hover:text-white cursor-pointer">
//             <Settings size={20} />
//             Paramètres
//           </a>
//         </nav>
//       </aside>
//     </>
//   );
// }

// export default Sidebar;

import { FileText, Brain, Settings, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Sidebar({ isOpen, setIsOpen }) {

  const navigate = useNavigate();


  function goToLanding(){

    navigate("/");

    // fermer le menu mobile après navigation
    if(setIsOpen){
      setIsOpen(false);
    }

  }


  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}


      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-black p-6 transition-transform duration-300
          md:static md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >


        <div className="flex items-center justify-between">


          {/* Logo clickable */}

          <button
            onClick={goToLanding}
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-red-500/10
              border
              border-red-500/20
            ">
              🧠
            </div>


            <span className="
              text-xl
              font-bold
              text-white
            ">
              DocMind <span className="text-red-500">
                AI
              </span>
            </span>


          </button>



          <button 
            onClick={() => setIsOpen(false)}
            className="
              rounded-lg
              p-2
              text-slate-400
              hover:bg-white/5
              hover:text-white
              md:hidden
            "
          >
            <X size={20} />
          </button>


        </div>




        <nav className="
          mt-12
          flex
          flex-col
          gap-3
        ">


          <a
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-red-500/10
              px-4
              py-3
              text-red-400
              cursor-pointer
            "
          >

            <FileText size={20} />

            Documents

          </a>




          <a
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-400
              transition
              hover:bg-white/5
              hover:text-white
              cursor-pointer
            "
          >

            <Brain size={20} />

            Agent IA

          </a>




          <a
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-slate-400
              transition
              hover:bg-white/5
              hover:text-white
              cursor-pointer
            "
          >

            <Settings size={20} />

            Paramètres

          </a>


        </nav>


      </aside>

    </>
  );
}


export default Sidebar;