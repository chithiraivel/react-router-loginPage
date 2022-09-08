import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {


    const [todo,setTodo] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodo(json))
    },[])
    
    const GoToAbout =(e) => {
       console.log(e);
    }
  return (

    <div>
           {todo.map( (data,index) => {
            return <p key={index}><li>{data.title}</li>
            <button onClick={GoToAbout}>About</button>
            </p>
           })}

    </div>
  )
}

export default Profile