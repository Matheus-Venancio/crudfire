
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import{collection, addDoc, getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore"
import './App.css';


function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")//pegando a coleção

  //Adicionando dados 
  const createUser = async () => {
    //Adicionando outro
    //Adicionando o inputy de dom e idade no banco de dados
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser= async(id,age)=>{
    const userDoc=doc(db,"users",id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc,newFields)
  }

  const deletUser= async(id)=>{
    const userDoc=doc(db,"users",id)
    await deleteDoc(userDoc)
  }


  useEffect(()=>{
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef);
      //Setando os dados dos usuarios    //Doc.data estou puxando os dados
      setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    };

    getUsers();
  },[]);

  return (
    <div className="App">
      <input placeholder='name' onChange={(event) =>{setNewName(event.target.value)}}></input>
      <input placeholder='age' onChange={(event) =>{setNewAge(event.target.value)}}></input>

      <button onClick={createUser}> Create User</button>
      {users.map((user) =>{
        //Adicionando na tela
        return( 
        <div>
          {" "}
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <button onClick={() =>{updateUser(user.id, user.age)}}>Update</button>
          <button onClick={() =>{deletUser(user.id)}}>delete</button>
        </div>
        );
      })}
    </div>
  );
  
}

export default App;
