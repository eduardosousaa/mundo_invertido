import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'

export async function subscribeToToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}