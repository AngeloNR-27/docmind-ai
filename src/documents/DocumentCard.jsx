import { useNavigate } from "react-router-dom";


function DocumentCard({ document, onDelete }) {

  const navigate = useNavigate();



  return (

    <div

      onClick={() =>
        navigate(`/app/document/${document.id}`)
      }

      className="
        cursor-pointer
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        transition
        hover:border-red-500/30
        hover:bg-white/10
      "

    >


      <div className="
        flex
        items-start
        justify-between
        gap-4
      ">


        <div>


          <h3 className="
            font-semibold
            text-white
          ">

            📄 {document.name}

          </h3>



          <p className="
            mt-2
            text-sm
            text-slate-400
          ">

            {document.createdAt}

          </p>


        </div>



        <button

          onClick={(event) => {

            event.stopPropagation();

            onDelete(document.id);

          }}

          className="
            rounded-lg
            px-3
            py-1.5
            text-sm
            text-red-400
            transition
            hover:bg-red-500/10
          "

        >

          Supprimer

        </button>


      </div>





      <p className="
        mt-4
        line-clamp-3
        text-sm
        leading-relaxed
        text-slate-300
      ">

        {document.summary}

      </p>


    </div>

  );

}


export default DocumentCard;