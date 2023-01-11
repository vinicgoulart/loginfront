import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../style/dashboard.css';

function Dashboard(){
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(document.cookie === '') {
            navigate('/');
            return; 
        };

        axios.get('http://localhost:9000/user').then((res) => {
            setUsers(res.data.user);

        }).catch((error) => {
            console.log(error);
        })
    }, [users]);

    function handleDelete(id){
        axios.delete('http://localhost:9000/user/' + id, {headers: {"Authorization": document.cookie}}).then((res) => {
            alert('User successfully deleted!');
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div className="app">
            <div className="dashmainDiv">
                <p className="greetingsText">Tabela de usuários presentes no sistema!</p>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.map(user => <tr key={ user._id }>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td><button className="deleteButton" onClick={ () => handleDelete(user._id) }>Delete</button></td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
