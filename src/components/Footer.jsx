function Footer() {
  return (
    <footer className="
      relative
      bg-black
      border-t
      border-white/5
      py-10
      md:py-12
    ">

      <div className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        md:flex-row-reverse
        items-center
        justify-between
        gap-6
        px-6
      ">


        <p className="
          text-xs
          font-medium
          tracking-wide
          text-slate-500
          text-center
          md:text-right
        ">
          &copy; 2026 DocMind AI. Tous droits réservés.
        </p>


        <div className="text-center md:text-left">

          <h3 className="
            text-xl
            font-bold
            tracking-tight
            text-white
          ">
            DocMind <span className="text-red-500">AI</span>
          </h3>


          <p className="
            mt-2
            text-sm
            font-medium
            text-slate-400
          ">
            Votre assistant intelligent pour vos documents.
          </p>

        </div>


      </div>

    </footer>
  );
}

export default Footer;