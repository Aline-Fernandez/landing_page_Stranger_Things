import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

//para salvar um objeto no banco de dados do firestore
export async function subscribeToHellfireClub(subscription) {
  const db = getFirestore(app)
  const hellfireClubCollection = collection(db, 'hellfire-clube')
  const docRef = await addDoc(hellfireClubCollection, subscription)
  return docRef.id
}

export async function getHellfireCllubSubscriptions (){
  const db = getFirestore(app)
  const hellfireClubCollection = collection (db, 'hellfire-clube')
  const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
  const subsccriptions = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
  return subsccriptions;

}
