// import { useState } from "react";

// import MessageBubble from "./MessageBubble";

// import ChatAgent from "../../agents/ChatAgent";


// function ChatPanel({ document }) {


//   const [messages, setMessages] = useState([

//     {
//       role:"assistant",
//       content:
//       "Bonjour, je suis DocMind AI. Posez-moi une question sur ce document."
//     }

//   ]);


//   const [question, setQuestion] = useState("");

//   const [loading, setLoading] = useState(false);




//   async function handleSend(){


//     if(!question.trim()) return;



//     const userMessage = {

//       role:"user",

//       content:question

//     };



//     setMessages(prev => [

//       ...prev,

//       userMessage

//     ]);



//     setQuestion("");

//     setLoading(true);



//     try {


//       const response = await ChatAgent.ask(

//         question,

//         document.content

//       );



//       setMessages(prev => [

//         ...prev,

//         {

//           role:"assistant",

//           content:response

//         }

//       ]);



//     }

//     catch(error){


//       console.error(error);



//       setMessages(prev => [

//         ...prev,

//         {

//           role:"assistant",

//           content:
//           "Une erreur est survenue lors de l'analyse."

//         }

//       ]);


//     }

//     finally{


//       setLoading(false);


//     }


//   }




//   return (

//     <div
//       className="
//         rounded-3xl
//         border
//         border-white/10
//         bg-zinc-950
//         p-6
//       "
//     >


//       <h2
//         className="
//           mb-6
//           text-xl
//           font-bold
//           text-white
//         "
//       >

//         Chat avec le document

//       </h2>



//       <div
//         className="
//           space-y-4
//           max-h-[400px]
//           overflow-y-auto
//         "
//       >


//         {
//           messages.map((message,index)=>(

//             <MessageBubble

//               key={index}

//               message={message}

//             />

//           ))
//         }



//         {
//           loading && (

//             <MessageBubble

//               message={{

//                 role:"assistant",

//                 content:"Analyse en cours..."

//               }}

//             />

//           )
//         }


//       </div>





//       <div
//         className="
//           mt-6
//           flex
//           gap-3
//         "
//       >

//         <input

//           value={question}

//           onChange={
//             e=>setQuestion(e.target.value)
//           }

//           onKeyDown={
//             e=>{
//               if(e.key==="Enter")
//                 handleSend()
//             }
//           }


//           placeholder="Posez une question sur ce document..."

//           className="
//             flex-1
//             rounded-xl
//             border
//             border-white/10
//             bg-black
//             px-4
//             py-3
//             text-white
//             outline-none
//           "

//         />



//         <button

//           onClick={handleSend}

//           className="
//             rounded-xl
//             bg-red-600
//             px-5
//             text-white
//             hover:bg-red-500
//           "

//         >

//           Envoyer

//         </button>


//       </div>


//     </div>

//   );

// }


// export default ChatPanel;

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatAgent from "../../agents/ChatAgent";

function ChatPanel({ document }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Bonjour, je suis DocMind AI. Posez-moi une question sur ce document.",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await ChatAgent.ask(question, document.content);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Une erreur est survenue lors de l'analyse.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        flex
        flex-col
        w-full
        max-w-4xl
        mx-auto
        rounded-2xl
        md:rounded-3xl
        border
        border-white/10
        bg-zinc-950
        p-4
        md:p-6
        h-[500px]
        md:h-[600px]
      "
    >
      {/* En-tête */}
      <h2
        className="
          mb-4
          text-lg
          md:text-xl
          font-bold
          text-white
        "
      >
        Chat avec le document
      </h2>

      {/* Zone de messages avec scroll automatique */}
      <div
        className="
          flex-1
          space-y-4
          overflow-y-auto
          pr-1
          scroll-smooth
        "
      >
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}

        {loading && (
          <MessageBubble
            message={{
              role: "assistant",
              content: "Analyse en cours...",
            }}
          />
        )}
      </div>

      {/* Zone de saisie responsive */}
      <div
        className="
          mt-4
          flex
          gap-2
          md:gap-3
        "
      >
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Posez une question..."
          className="
            flex-1
            rounded-xl
            border
            border-white/10
            bg-black
            px-3
            md:px-4
            py-2.5
            md:py-3
            text-sm
            md:text-base
            text-white
            outline-none
            focus:border-red-600
            transition-colors
            placeholder-slate-500
          "
        />

        <button
          onClick={handleSend}
          className="
            rounded-xl
            bg-red-600
            px-4
            md:px-5
            text-sm
            md:text-base
            font-medium
            text-white
            hover:bg-red-500
            active:scale-95
            transition-all
          "
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default ChatPanel;