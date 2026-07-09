import { askGroq } from "../services/groq";



class DocumentAgent {


  async summarize(documentText){


    const prompt = `

Analyse ce document :

${documentText}


Donne un résumé clair avec :

- Sujet principal
- Points importants
- Informations clés

    `;


    const response = await askGroq(prompt);


    return response;

  }


}



export default new DocumentAgent();