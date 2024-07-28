import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { creatorsData } from '../../dummydata/creatorsData';

const collectionName = "creators"

export const getCreatorFromAPI = async () => {
    const creators = [...creatorsData]
    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
        let creator = doc.data()
        creator.id = doc.id
        creators.push(creator)
    });

    return creators
}

export const addCreatorToAPI = async (creator) => {
    const docRef = await addDoc(collection(db, collectionName), creator);
    console.log("Document written with ID: ", docRef.id);
}

export const updateCreatorToAPI = async (creator, id) => {
    const creatorRef = doc(db, collectionName, id);
    await updateDoc(creatorRef, creator)
}

export const deleteCreatorFromAPI = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
}