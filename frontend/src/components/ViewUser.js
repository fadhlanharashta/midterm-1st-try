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
            gender
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
                    <label className="label">Name</label>
                        <p>{name}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                        <p>{email}</p>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                        <p>{gender}</p>
                </div>
                <div className="field">
                    <button type='return' className='button is-success'>
                        Return
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default EditUser;