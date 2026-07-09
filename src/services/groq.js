import Groq from "groq-sdk";


const groq = new Groq({

  apiKey: import.meta.env.VITE_GROQ_API_KEY,

  dangerouslyAllowBrowser: true

});



export async function askGroq(prompt){


  const completion = await groq.chat.completions.create({

    messages: [

      {
        role: "system",
        content:
        "Tu es un assistant expert en analyse documentaire."
      },


      {
        role: "user",
        content: prompt
      }

    ],


    model: "llama-3.1-8b-instant"

  });



  return completion.choices[0].message.content;


}