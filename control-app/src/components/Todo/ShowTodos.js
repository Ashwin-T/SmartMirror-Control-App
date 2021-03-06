import { useEffect, useState } from "react";
import firebase from "../firebase";
const db = firebase.firestore();

const ShowToDo = () => {
  
    const [item, setItem] = useState([]);

    const handleDelete = (id) =>{
      db.collection("Todo").doc(`${id}`).delete();
    }

    useEffect(() => {

    db.collection("Todo")
      .onSnapshot((querySnapshot) => {
        setItem(querySnapshot.docs);
      });
  }, []);


  return (
    <div>
      <ul>
        {item.map((ques) => (
          <li key = {ques.id} className = 'todoText'>
              {ques.data().message}
              <button className = 'cancel' onClick={() => handleDelete(ques.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowToDo;
