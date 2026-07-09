import { Upload, Sparkles, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Importez votre document",
    description:
      "Déposez votre fichier PDF en un clic. Notre système sécurisé prend en charge vos données instantanément."
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Analyse par l'agent IA",
    description:
      "L'agent cartographie la structure, comprend le contexte global et extrait les données clés cachées."
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Obtenez vos réponses",
    description:
      "Posez vos questions en langage naturel et obtenez des réponses sourcées, précises et structurées."
  }
];

function HowItWorks() {
  return (
    <section 
      id="how"
      className="relative bg-black py-20 md:py-32 overflow-hidden"
    >
      
      <div className="
        absolute
        right-1/4
        bottom-0
        h-[300px]
        w-[300px]
        md:h-[400px]
        md:w-[400px]
        rounded-full
        bg-red-600/[0.03]
        blur-[100px]
        md:blur-[120px]
        pointer-events-none
      "/>

      <div className="
        relative
        mx-auto
        max-w-7xl
        px-6
      ">

        <div className="
          mx-auto
          max-w-3xl
          text-center
        ">
          <h2 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
            tracking-tight
            text-white
            leading-[1.2]
          ">
            Comment fonctionne{" "}
            <span className="block sm:inline bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              DocMind AI ?
            </span>
          </h2>

          <p className="
            mt-4
            md:mt-6
            text-base
            md:text-lg
            leading-relaxed
            text-slate-400
            max-w-xl
            mx-auto
          ">
            Un processus fluide et instantané pour donner une voix et un esprit à vos fichiers statiques.
          </p>
        </div>


        <div className="
          mt-16
          md:mt-24
          grid
          gap-6
          md:gap-8
          grid-cols-1
          md:grid-cols-3
        ">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/5
                  bg-zinc-900/20
                  p-6
                  md:p-8
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-red-500/25
                  hover:bg-zinc-900/40
                  shadow-xl
                  shadow-black/30
                "
              >
                
                <span className="
                  absolute
                  -right-4
                  -top-6
                  select-none
                  text-7xl
                  md:text-8xl
                  font-black
                  tracking-tighter
                  text-red-500/[0.03]
                  transition-colors
                  duration-300
                  group-hover:text-red-500/[0.06]
                ">
                  {step.number}
                </span>

                <span className="
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-widest
                  text-red-500/80
                ">
                  ÉTAPE {step.number}
                </span>

                <div className="
                  mt-4
                  md:mt-6
                  flex
                  h-12
                  w-12
                  md:h-14
                  md:w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-500/10
                  border
                  border-red-500/20
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-red-500/20
                  group-hover:border-red-500/40
                  group-hover:shadow-lg
                  group-hover:shadow-red-500/10
                ">
                  <Icon 
                    className="
                      h-5
                      w-5
                      md:h-6
                      md:w-6
                      text-red-400
                      transition-colors
                      group-hover:text-red-300
                    "
                  />
                </div>

                <h3 className="
                  mt-6
                  md:mt-8
                  text-lg
                  md:text-xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-2
                  md:mt-3
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-slate-400
                  transition-colors
                  group-hover:text-slate-300
                ">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;