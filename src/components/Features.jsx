import { FileSearch, Brain, MessageCircle } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Analyse intelligente",
    description:
      "Notre IA comprend vos documents en profondeur et extrait automatiquement les métadonnées et informations essentielles."
  },
  {
    icon: Brain,
    title: "Agent IA autonome",
    description:
      "Un agent capable de connecter les faits entre plusieurs fichiers pour construire des réponses adaptées à votre contexte."
  },
  {
    icon: MessageCircle,
    title: "Questions & Réponses",
    description:
      "Discutez directement avec vos documents comme s'il s'agissait d'un expert dédié à vos côtés."
  }
];

function Features() {
  return (
    <section 
      id="features"
      className="relative bg-black py-32"
    >
      
      <div className="
        absolute
        left-1/4
        top-1/2
        -translate-y-1/2
        h-80
        w-80
        rounded-full
        bg-red-600/5
        blur-[100px]
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
            Une nouvelle façon de travailler{" "}
            <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
              avec vos documents.
            </span>
          </h2>

          <p className="
            mt-6
            text-lg
            leading-relaxed
            text-slate-400
            max-w-2xl
            mx-auto
          ">
            DocMind AI brise les barrières de la lecture traditionnelle et transforme vos fichiers bruts en connaissances exploitables instantanément.
          </p>
        </div>


        <div className="
          mt-20
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  rounded-3xl
                  border
                  border-white/5
                  bg-zinc-900/30
                  p-8
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-500/20
                  hover:bg-zinc-900/50
                  shadow-xl
                  shadow-black/20
                "
              >
                
                <div className="absolute inset-0 rounded-3xl bg-red-500/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                <div className="
                  flex
                  h-12
                  w-12
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
                ">
                  <Icon 
                    className="
                      h-5
                      w-5
                      text-red-400
                      transition-colors
                      group-hover:text-red-300
                    "
                  />
                </div>

                <h3 className="
                  mt-6
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                ">
                  {feature.title}
                </h3>

                <p className="
                  mt-3
                  text-base
                  leading-relaxed
                  text-slate-400
                  transition-colors
                  group-hover:text-slate-300
                ">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

export default Features;