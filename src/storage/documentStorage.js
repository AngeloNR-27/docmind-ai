const STORAGE_KEY = "docmind_documents";


export function saveDocument(document){

  const documents = getDocuments();

  documents.push(document);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(documents)
  );

}



export function getDocuments(){

  const documents =
    localStorage.getItem(STORAGE_KEY);


  return documents
    ? JSON.parse(documents)
    : [];

}



export function deleteDocument(id){

  const documents = getDocuments();


  const updated =
    documents.filter(
      doc => doc.id !== id
    );


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

}