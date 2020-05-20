import firebase from '../config/firebase';

export async function getUsers(setDados){
    var usersList = []
    var snapshot = await firebase
    .firestore()
    .collection('users')
    .get()

  snapshot.forEach((doc) => {
    const userItem = doc.data();
    userItem.id = doc.id;
    usersList.push(userItem);
  });

  setDados(usersList);
}

export function newUser(name){
  food.createdAt = new Date();
  firebase
    .firestore()
    .collection("Foods")
    .add(food)
    .then((snapshot) => snapshot.get())
    .then((foodData) => addComplete(foodData.data()))
    .catch((error) => console.log(error));
}