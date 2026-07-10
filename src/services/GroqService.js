import Groq from "groq-sdk";

class GroqService {

  constructor() {

    this.client = new Groq({

      apiKey: import.meta.env.VITE_GROQ_API_KEY,

      dangerouslyAllowBrowser: true,

    });

  }


  async chat(prompt) {

    const completion = await this.client.chat.completions.create({

      model: "llama-3.1-8b-instant",

      messages: [

        {
          role: "system",
          content: "Tu es un assistant expert en analyse documentaire."
        },

        {
          role: "user",
          content: prompt
        }

      ],

    });

    return completion.choices[0].message.content;

  }

}

export default new GroqService();