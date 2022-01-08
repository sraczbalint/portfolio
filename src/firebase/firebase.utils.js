import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyCdI3KNZQ-tVI_yPZW8f1P2npDENF6jmfw",
  authDomain: "crwn-db-3d2f6.firebaseapp.com",
  projectId: "crwn-db-3d2f6",
  storageBucket: "crwn-db-3d2f6.appspot.com",
  messagingSenderId: "541287241978",
  appId: "1:541287241978:web:00ea08f1cae18d28565143"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);
   });

   return await batch.commit();
 };

export const convertCollectionsSnapshotToMap = collections  => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] =collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;