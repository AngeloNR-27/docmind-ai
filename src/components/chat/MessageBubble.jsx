// function MessageBubble({ message }) {

//   const isUser = message.role === "user";


//   return (

//     <div
//       className={`
//         flex
//         ${isUser ? "justify-end" : "justify-start"}
//       `}
//     >

//       <div
//         className={`
//           max-w-[80%]
//           rounded-2xl
//           px-4
//           py-3
//           text-sm
//           leading-relaxed

//           ${
//             isUser
//               ?
//               "bg-red-600 text-white rounded-br-none"
//               :
//               "bg-white/5 border border-white/10 text-slate-300 rounded-bl-none"
//           }

//         `}
//       >

//         {message.content}

//       </div>


//     </div>

//   );

// }


// export default MessageBubble;

function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`
        flex
        w-full
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-[85%]
          md:max-w-[75%]
          rounded-2xl
          px-3
          md:px-4
          py-2
          md:py-3
          text-xs
          md:text-sm
          leading-relaxed
          break-words
          ${
            isUser
              ? "bg-red-600 text-white rounded-br-none"
              : "bg-white/5 border border-white/10 text-slate-300 rounded-bl-none"
          }
        `}
      >
        {message.content}
      </div>
    </div>
  );
}

export default MessageBubble;