import { Sparkles, FileText, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Hero() {

  const navigate = useNavigate();


  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-24 md:pt-44 md:pb-32">

      <div className="
        absolute
        left-1/2
        top-12
        -translate-x-1/2
        h-[300px]
        w-[300px]
        md:h-[500px]
        md:w-[500px]
        rounded-full
        bg-red-600/10
        blur-[80px]
        md:blur-[120px]
        pointer-events-none
      "/>


      <div className="
        relative
        mx-auto
        grid
        max-w-7xl
        gap-12
        lg:gap-16
        px-6
        lg:grid-cols-2
        lg:items-center
      ">


        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">


          <div className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-red-500/30
            bg-red-500/10
            px-4
            py-1.5
            text-xs
            font-medium
            tracking-wide
            uppercase
            text-red-400
          ">
            <Sparkles className="h-3.5 w-3.5" />
            Agent IA documentaire
          </div>



          <h1 className="
            text-4xl
            sm:text-5xl
            font-extrabold
            leading-[1.2]
            md:leading-[1.15]
            tracking-tight
            text-white    
            md:text-6xl
          ">
            Transformez vos documents
            <span className="block bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
              en informations intelligentes.
            </span>
          </h1>



          <p className="
            mt-6
            max-w-lg
            text-base
            md:text-lg
            leading-relaxed
            text-slate-400
          ">
            Importez vos fichiers, laissez notre agent IA analyser leur contenu et obtenez des réponses structurées en quelques secondes.
          </p>



          <button
            onClick={() => navigate("/app")}
            className="
              mt-8
              md:mt-10
              w-full
              sm:w-auto
              rounded-full
              bg-gradient-to-r
              from-red-600
              to-red-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              shadow-red-600/20
              transition
              duration-300
              hover:shadow-red-500/40
              hover:scale-[1.02]
            "
          >
            ✨ Commencer gratuitement
          </button>


        </div>




        <div className="
          relative
          flex
          justify-center
          lg:justify-end
          w-full
          mt-6
          lg:mt-0
        ">



          <div className="
            relative
            h-auto
            w-full
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-zinc-900/40
            p-6
            md:p-8
            backdrop-blur-xl
            shadow-2xl
            shadow-black/50
          ">



            <div className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/5
              bg-white/5
              p-4
            ">



              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 min-w-[40px]">
                <FileText className="text-red-400 h-5 w-5"/>
              </div>



              <div className="flex-1 min-w-0">

                <p className="text-sm font-medium text-white truncate">
                  Document_Strategique.pdf
                </p>


                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">

                  <div className="
                    h-full
                    w-2/3
                    rounded-full
                    bg-gradient-to-r
                    from-red-500
                    to-rose-400
                    animate-pulse
                  " />

                </div>

              </div>


            </div>





            <div className="
              my-8
              md:my-10
              flex
              justify-center
            ">


              <div className="
                relative
                flex
                h-20
                w-20
                md:h-24
                md:w-24
                items-center
                justify-center
                rounded-full
                bg-red-500/10
                border
                border-red-500/20
              ">

                <Brain className="
                  h-10
                  w-10
                  md:h-12
                  md:w-12
                  text-red-400
                  animate-pulse
                "/>


                <div className="
                  absolute
                  inset-0
                  rounded-full
                  bg-red-500/20
                  blur-md
                  -z-10
                "/>

              </div>


            </div>





            <div className="
              rounded-2xl
              border
              border-red-500/20
              bg-gradient-to-b
              from-red-500/10
              to-transparent
              p-5
            ">


              <p className="
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-red-400
              ">
                Résumé généré par l'IA
              </p>


              <p className="
                mt-2
                text-sm
                leading-relaxed
                text-slate-300
              ">
                "Ce document met en lumière une croissance de <span className="text-white font-medium">+24%</span> sur le dernier trimestre, portée par l'automatisation des processus internes."
              </p>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}


export default Hero;