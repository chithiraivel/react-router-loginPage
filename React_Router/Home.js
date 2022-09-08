
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {

const [UserName,setUserName]=useState('')
const [password,setPassword]=useState('')
const [array,setArray]=useState([])
const [update,sethandleUpdate] =useState([])
const [details]=useState([{UserName:'vel',password:'123'},{UserName:'chithirai',password:'123'},
{UserName:'thor',password:'123'},{UserName:'react',password:'123'}])

const navig = useNavigate()

const userInput = (e) => {

    if(e.target.name === 'username'){
        setUserName(e.target.value);
    }
    if(e.target.name === 'password'){
        setPassword(e.target.value);
    }
}


const userSubmit = (event) => {
   
   
    setArray([...array,{UserName,password}])
    sethandleUpdate({UserName,password})

    var isExist = array.some( (prod) => prod.UserName === update.UserName)

    if(isExist){
        let check = details.map ( (data) => {
            if(update.UserName === data.UserName && update.password === data.password){
                navig('profile')
            }
        })
        }  
}

 
  return (
    <div >


        <p>
            USERNAME :
            <input name='username' onChange={userInput} placeholder='Enter UserName'/>
        </p>
        <p>
            PASSWORD :
            <input name='password' onChange={userInput} placeholder='Enter Password'/>
        </p>
        <button onClick={userSubmit}>Submit</button>
        {/* <Link to='profile'>profile</Link> */}
        <button onClick={() => navig('profile')}>GO TO PROFILE</button>
    </div>
  )
}

export default Home