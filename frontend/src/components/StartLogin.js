import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';


const EditUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();
const [gender, setGender] = useState("Male");
const {id} = useParams();
useEffect(()=>{
    getUserById();
},[]);
const updateUser = async(e)=>{
    e.preventDefault();
    try{
        await axios.patch(`http://localhost:5000/users/${id}`,{
            name,
            email,
            gender,
        });
        navigate("/")
    }catch (error){
        console.log(error);
    }
}
const getUserById = async()=>{
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
}

  return (
    <div className="columns mt-5 is centered">
        <div className="column is-half">
        <h1 className="title is-pulled-left">USER PROFILE</h1>            
            <form onSubmit={updateUser} >
                <div className="field">
                    <div className="control">
                    <label className="label">Email</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder='Email'/>
                    </div>
                    <div className="control">
                    <label className="label">Password</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder='Password'/>
                    </div>
                </div>
                <div className="field">
                    <button type='Submit' className='button is-success'>
                        Login
                    </button>
                    <p>Dont have an account?<a href="/register">Register</a></p>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default EditUser;