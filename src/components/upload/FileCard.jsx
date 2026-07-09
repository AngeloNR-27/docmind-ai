import {
  FileText,
  X
} from "lucide-react";


function FileCard({file, onRemove}) {


  return (

    <div
      className="
        mt-8
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
      "
    >


      <div className="
        flex
        items-center
        gap-4
      ">


        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-red-500/10
          "
        >

          <FileText 
            className="text-red-500"
          />

        </div>



        <div>

          <p className="
            font-medium
            text-white
          ">
            {file.name}
          </p>


          <p className="
            text-sm
            text-slate-400
          ">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>


        </div>


      </div>



      <button
        onClick={onRemove}
        className="
          rounded-lg
          p-2
          text-slate-400
          transition
          hover:bg-white/10
          hover:text-white
        "
      >

        <X size={20}/>

      </button>


    </div>

  );

}


export default FileCard;