
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import{collection, doc, getDocs} from "firebase/firestore"
import './App.css';

function App() {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")//pegando a coleção

  useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef);
      //Setando os dados dos usuarios
      setUsers(data.docs.map((doc)=> ({...doc=data(), id: doc.id})))
    }

    getUsers()
  },[])
  return (
    <div className="App">
      {users.map((user) =>{
        //Adicionando na tela
        return( 
        <div>
          {" "}
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
        );
      })}
    </div>
  );
  
}

export default App;
