function CTA() {
  return (
    <section className="relative bg-black py-32">
      
      <div className="
        mx-auto
        max-w-5xl
        px-6
      ">

        <div className="
          relative
          overflow-hidden
          rounded-[2.5rem]
          border
          border-red-500/10
          bg-gradient-to-br
          from-zinc-950
          via-zinc-900/80
          to-red-950/30
          p-12
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
            h-64
            w-64
            rounded-full
            bg-red-600/20
            blur-[80px]
            pointer-events-none
          " />


          <div className="relative z-10 flex flex-col items-center">


            <h2 className="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              md:text-5xl
              leading-[1.15]
            ">
              Prêt à transformer{" "}
              <span className="block sm:inline bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                vos documents ?
              </span>
            </h2>


            <p className="
              mx-auto
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-400
            ">
              Analysez vos fichiers en temps réel, extrayez les informations critiques et gagnez des heures de recherche grâce à la puissance de DocMind AI.
            </p>



            <button
              className="
                group
                relative
                mt-10
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-red-600
                to-red-500
                px-10
                py-4
                font-semibold
                text-white
                shadow-xl
                shadow-red-600/20
                transition
                duration-300
                hover:shadow-red-500/40
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <span className="relative flex items-center gap-2">
                ✨ Commencer gratuitement
              </span>
            </button>


          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;