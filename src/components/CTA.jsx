// function CTA() {
//   return (
//     <section className="relative bg-black py-20 md:py-32">
      
//       <div className="
//         mx-auto
//         max-w-5xl
//         px-6
//       ">

//         <div className="
//           relative
//           overflow-hidden
//           rounded-[2rem]
//           md:rounded-[2.5rem]
//           border
//           border-red-500/10
//           bg-gradient-to-br
//           from-zinc-950
//           via-zinc-900/80
//           to-red-950/30
//           p-8
//           sm:p-12
//           md:p-16
//           text-center
//           shadow-2xl
//           shadow-black
//         ">


//           <div className="
//             absolute
//             -bottom-20
//             left-1/2
//             -translate-x-1/2
//             h-48
//             w-48
//             md:h-64
//             md:w-64
//             rounded-full
//             bg-red-600/20
//             blur-[60px]
//             md:blur-[80px]
//             pointer-events-none
//           " />


//           <div className="relative z-10 flex flex-col items-center">


//             <h2 className="
//               text-3xl
//               sm:text-4xl
//               md:text-5xl
//               font-extrabold
//               tracking-tight
//               text-white
//               leading-[1.2]
//               md:leading-[1.15]
//             ">
//               Prêt à transformer{" "}
//               <span className="block sm:inline bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
//                 vos documents ?
//               </span>
//             </h2>


//             <p className="
//               mx-auto
//               mt-4
//               md:mt-6
//               max-w-xl
//               text-base
//               md:text-lg
//               leading-relaxed
//               text-slate-400
//             ">
//               Analysez vos fichiers en temps réel, extrayez les informations critiques et gagnez des heures de recherche grâce à la puissance de DocMind AI.
//             </p>



//             <button
//               className="
//                 group
//                 relative
//                 mt-8
//                 md:mt-10
//                 w-full
//                 sm:w-auto
//                 overflow-hidden
//                 rounded-full
//                 bg-gradient-to-r
//                 from-red-600
//                 to-red-500
//                 px-8
//                 md:px-10
//                 py-3.5
//                 md:py-4
//                 font-semibold
//                 text-white
//                 shadow-xl
//                 shadow-red-600/20
//                 transition
//                 duration-300
//                 hover:shadow-red-500/40
//                 hover:scale-[1.02]
//                 active:scale-[0.98]
//               "
//             >
//               <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
//               <span className="relative flex items-center justify-center gap-2">
//                 ✨ Commencer gratuitement
//               </span>
//             </button>


//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default CTA;

import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      
      <div className="
        mx-auto
        max-w-5xl
        px-6
      ">

        <div className="
          relative
          overflow-hidden
          rounded-[2rem]
          md:rounded-[2.5rem]
          border
          border-red-500/10
          bg-gradient-to-br
          from-zinc-950
          via-zinc-900/80
          to-red-950/30
          p-8
          sm:p-12
          md:p-16
          text-center
          shadow-2xl
          shadow-black
        ">


          <div className="
            absolute
            -bottom-20
            left-1/2
            -translate-x-1/2
            h-48
            w-48
            md:h-64
            md:w-64
            rounded-full
            bg-red-600/20
            blur-[60px]
            md.blur-[80px]
            pointer-events-none
          " />


          <div className="relative z-10 flex flex-col items-center">


            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              text-white
              leading-[1.2]
              md:leading-[1.15]
            ">
              Prêt à transformer{" "}
              <span className="block sm:inline bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                vos documents ?
              </span>
            </h2>


            <p className="
              mx-auto
              mt-4
              md:mt-6
              max-w-xl
              text-base
              md:text-lg
              leading-relaxed
              text-slate-400
            ">
              Analysez vos fichiers en temps réel, extrayez les informations critiques et gagnez des heures de recherche grâce à la puissance de DocMind AI.
            </p>



            <Link
              to="/app"
              className="
                group
                relative
                mt-8
                md:mt-10
                w-full
                sm:w-auto
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-red-600
                to-red-500
                px-8
                md:px-10
                py-3.5
                md:py-4
                font-semibold
                text-white
                shadow-xl
                shadow-red-600/20
                transition
                duration-300
                hover:shadow-red-500/40
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >

              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <span className="relative flex items-center justify-center gap-2">
                ✨ Commencer gratuitement
              </span>

            </Link>


          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;