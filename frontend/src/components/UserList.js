import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';



const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUser();
        document.title = "User List"; // set the document title
    }, []);

    const getUser = async ()=>{
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    };
    const deleteUser = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUser();
        }catch (error){
            console.log(error);

        }
    }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
        <h1 className="title is-1 has-text-centered is-bold mb-5">STUDENT LIST</h1>            
            <Link to={`add`} className="button is-success">Add New User</Link>
            <Link to={``} className="button is-danger is-pulled-right ml-5">Logout</Link>
            <Link to={`login`} className="button is-success is-pulled-right ml-5">Login</Link>
            <Link to={`register`} className="button is-success is-pulled-right">Register</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>(
                        <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>
                            <button>
                                <Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <Link onClick={()=> deleteUser(user.id)}className="button is-small is-danger ml-2">Delete</Link>
                                <Link to={`view/${user.id}`} className="button is-small is-info">View</Link>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
    </div>
  )
}

export default UserList