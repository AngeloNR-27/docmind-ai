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
      className="relative bg-black py-32 overflow-hidden"
    >
      
      <div className="
        absolute
        right-1/4
        bottom-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-red-600/[0.03]
        blur-[120px]
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
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            md:text-5xl
            leading-[1.2]
          ">
            Comment fonctionne{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              DocMind AI ?
            </span>
          </h2>

          <p className="
            mt-6
            text-lg
            leading-relaxed
            text-slate-400
            max-w-xl
            mx-auto
          ">
            Un processus fluide et instantané pour donner une voix et un esprit à vos fichiers statiques.
          </p>
        </div>


        <div className="
          mt-24
          grid
          gap-8
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
                  p-8
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
                  text-8xl
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
                  text-sm
                  font-bold
                  tracking-widest
                  text-red-500/80
                ">
                  ÉTAPE {step.number}
                </span>

                <div className="
                  mt-6
                  flex
                  h-14
                  w-14
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
                      h-6
                      w-6
                      text-red-400
                      transition-colors
                      group-hover:text-red-300
                    "
                  />
                </div>

                <h3 className="
                  mt-8
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                  {step.title}
                </h3>

                <p className="
                  mt-3
                  text-base
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