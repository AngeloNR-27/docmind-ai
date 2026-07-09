function Topbar(){

  return (

    <header
      className="
      flex
      h-20
      items-center
      justify-between
      border-b
      border-white/10
      bg-black
      px-8
      "
    >

      <h1 className="
        text-xl
        font-semibold
        text-white
      ">
        Analyse documentaire
      </h1>



      <div className="
        flex
        items-center
        gap-3
      ">

        <div className="
          h-10
          w-10
          rounded-full
          bg-red-500
        " />

      </div>


    </header>

  );

}


export default Topbar;