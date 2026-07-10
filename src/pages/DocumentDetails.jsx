// import { useNavigate, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   FileText,
//   Sparkles,
//   Calendar
// } from "lucide-react";

// import { getDocuments } from "../storage/documentStorage";


// function DocumentDetails(){


//   const navigate = useNavigate();

//   const { id } = useParams();



//   const documents = getDocuments();



//   const document = documents.find(
//     (doc)=> doc.id === Number(id)
//   );



//   if(!document){

//     return (

//       <div className="
//         flex
//         min-h-screen
//         items-center
//         justify-center
//         bg-black
//         text-white
        
//       ">

//         Document introuvable.

//       </div>

//     );

//   }




//   return (

//     <div
//       className="
//         min-h-full
//         bg-black
//         p-10
//         text-white
//       "
//     >


//       <div
//         className="
//           mx-auto
//           max-w-6xl
//         "
//       >





//         <button

//           onClick={() => navigate("/app")}

//           className="
//             group
//             mb-8
//             flex
//             items-center
//             gap-2
//             rounded-full
//             border
//             border-white/10
//             bg-white/5
//             px-5
//             py-2.5
//             text-sm
//             text-slate-300
//             transition
//             hover:border-red-500/30
//             hover:bg-red-500/10
//             hover:text-white
//           "

//         >

//           <ArrowLeft
//             size={18}
//             className="
//               transition
//               group-hover:-translate-x-1
//             "
//           />

//           Retour aux documents

//         </button>








//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-3xl
//             border
//             border-white/10
//             bg-gradient-to-br
//             from-zinc-950
//             via-black
//             to-red-950/20
//             p-6
//             md:p-8
//           "
//         >



//           <div
//             className="
//               absolute
//               -right-20
//               -top-20
//               h-64
//               w-64
//               rounded-full
//               bg-red-600/20
//               blur-[100px]
//             "
//           />



//           <div
//             className="
//               relative
//               flex
//               flex-col
//               gap-5
//               md:flex-row
//               md:items-center
//             "
//           >


//             <div
//               className="
//                 flex
//                 h-16
//                 w-16
//                 items-center
//                 justify-center
//                 rounded-2xl
//                 border
//                 border-red-500/20
//                 bg-red-500/10
//               "
//             >

//               <FileText
//                 size={32}
//                 className="text-red-400"
//               />

//             </div>




//             <div>

//               <h1
//                 className="
//                   text-2xl
//                   font-extrabold
//                   tracking-tight
//                   md:text-3xl
//                 "
//               >

//                 {document.name}

//               </h1>



//               <div
//                 className="
//                   mt-3
//                   flex
//                   items-center
//                   gap-2
//                   text-sm
//                   text-slate-400
//                 "
//               >

//                 <Calendar size={15}/>

//                 Analysé le {document.createdAt}

//               </div>


//             </div>



//           </div>


//         </div>









//         {/* Résumé IA */}


//         <section
//           className="
//             mt-6
//             rounded-3xl
//             border
//             border-red-500/20
//             bg-gradient-to-br
//             from-red-500/10
//             via-black
//             to-black
//             p-6
//             md:p-8
//           "
//         >


//           <div
//             className="
//               flex
//               items-center
//               gap-3
//             "
//           >

//             <div
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-red-500/10
//               "
//             >

//               <Sparkles
//                 size={20}
//                 className="text-red-400"
//               />

//             </div>



//             <h2
//               className="
//                 text-xl
//                 font-bold
//               "
//             >

//               Résumé généré par l'IA

//             </h2>


//           </div>





//           <p
//             className="
//               mt-6
//               leading-8
//               text-slate-300
//             "
//           >

//             {document.summary}

//           </p>



//         </section>











//         <section
//           className="
//             mt-6
//             rounded-3xl
//             border
//             border-white/10
//             bg-zinc-950
//             p-6
//             md:p-8
//           "
//         >



//           <h2
//             className="
//               text-xl
//               font-bold
//             "
//           >

//             Texte extrait du document

//           </h2>




//           <div
//             className="
//               mt-6
//               max-h-[550px]
//               overflow-y-auto
//               rounded-2xl
//               border
//               border-white/5
//               bg-black
//               p-6
//             "
//           >


//             <p
//               className="
//                 whitespace-pre-line
//                 text-sm
//                 leading-8
//                 text-slate-400
//               "
//             >

//               {document.content}

//             </p>


//           </div>



//         </section>





//       </div>


//     </div>

//   );

// }


// export default DocumentDetails;

import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Sparkles,
  Calendar
} from "lucide-react";

import { getDocuments } from "../storage/documentStorage";

import ChatPanel from "../components/chat/ChatPanel";


function DocumentDetails(){


  const navigate = useNavigate();

  const { id } = useParams();



  const documents = getDocuments();



  const document = documents.find(
    (doc)=> doc.id === Number(id)
  );



  if(!document){

    return (

      <div className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-black
        text-white
      ">

        Document introuvable.

      </div>

    );

  }




  return (

    <div
      className="
        min-h-full
        bg-black
        p-10
        text-white
      "
    >


      <div
        className="
          mx-auto
          max-w-6xl
        "
      >



        <button

          onClick={() => navigate("/app")}

          className="
            group
            mb-8
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2.5
            text-sm
            text-slate-300
            transition
            hover:border-red-500/30
            hover:bg-red-500/10
            hover:text-white
          "

        >

          <ArrowLeft
            size={18}
            className="
              transition
              group-hover:-translate-x-1
            "
          />

          Retour aux documents

        </button>







        {/* Informations document */}


        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-br
            from-zinc-950
            via-black
            to-red-950/20
            p-6
            md:p-8
          "
        >



          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-red-600/20
              blur-[100px]
            "
          />



          <div
            className="
              relative
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
            "
          >


            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
              "
            >

              <FileText
                size={32}
                className="text-red-400"
              />

            </div>




            <div>

              <h1
                className="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  md:text-3xl
                "
              >

                {document.name}

              </h1>



              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-400
                "
              >

                <Calendar size={15}/>

                Analysé le {document.createdAt}

              </div>


            </div>



          </div>


        </div>









        {/* Résumé IA */}


        <section
          className="
            mt-6
            rounded-3xl
            border
            border-red-500/20
            bg-gradient-to-br
            from-red-500/10
            via-black
            to-black
            p-6
            md:p-8
          "
        >


          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-red-500/10
              "
            >

              <Sparkles
                size={20}
                className="text-red-400"
              />

            </div>



            <h2
              className="
                text-xl
                font-bold
              "
            >

              Résumé généré par l'IA

            </h2>


          </div>





          <p
            className="
              mt-6
              leading-8
              text-slate-300
            "
          >

            {document.summary}

          </p>



        </section>











        {/* Texte extrait */}


        <section
          className="
            mt-6
            rounded-3xl
            border
            border-white/10
            bg-zinc-950
            p-6
            md:p-8
          "
        >



          <h2
            className="
              text-xl
              font-bold
            "
          >

            Texte extrait du document

          </h2>




          <div
            className="
              mt-6
              max-h-[550px]
              overflow-y-auto
              rounded-2xl
              border
              border-white/5
              bg-black
              p-6
            "
          >


            <p
              className="
                whitespace-pre-line
                text-sm
                leading-8
                text-slate-400
              "
            >

              {document.content}

            </p>


          </div>



        </section>








        {/* Chat IA */}


        <section
          className="
            mt-6
          "
        >

          <ChatPanel
            document={document}
          />


        </section>





      </div>


    </div>

  );

}


export default DocumentDetails;