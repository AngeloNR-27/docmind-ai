import { useEffect, useState } from "react";

import DocumentCard from "./DocumentCard";

import {
  getDocuments,
  deleteDocument
} from "../storage/documentStorage";


function DocumentList(){


  const [documents, setDocuments] = useState([]);



  function loadDocuments(){

    const data = getDocuments();

    setDocuments(data);

  }



  useEffect(() => {

    loadDocuments();

  }, []);





  function handleDelete(id){


    deleteDocument(id);


    loadDocuments();


  }





  return (

    <section className="
      mt-10
    ">


      <h2 className="
        mb-5
        text-2xl
        font-bold
        text-white
      ">
        Mes documents
      </h2>




      {
        documents.length === 0 ? (

          <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            text-center
            text-slate-400
          ">

            Aucun document analysé.

          </div>


        ) : (


          <div className="
            grid
            gap-4
            md:grid-cols-2
          ">

            {
              documents.map((document) => (

                <DocumentCard

                  key={document.id}

                  document={document}

                  onDelete={handleDelete}

                />

              ))
            }


          </div>


        )
      }



    </section>

  );

}


export default DocumentList;