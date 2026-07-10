import GroqService from "../services/GroqService";

class ChatAgent {

  static async ask(question, documentText) {

    const prompt = `
Tu es DocMind AI, un assistant spécialisé dans l'analyse documentaire.

Réponds uniquement à partir du document fourni.

Si l'information n'existe pas dans le document, réponds :

"Je ne trouve pas cette information dans le document."

------------------------
DOCUMENT
------------------------

${documentText}

------------------------
QUESTION
------------------------

${question}
`;

    return await GroqService.chat(prompt);

  }

}

export default ChatAgent;