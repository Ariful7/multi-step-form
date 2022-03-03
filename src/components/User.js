import React, {useEffect, useState} from 'react';
import UserRow from './UserRow';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const User =()=>{
    // const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
            const {data: response} = await axios.get(`${BASE_API_URL}/users`);
            setUsers(response);
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false);
        }
    
        fetchData();
    }, []);
    let usesrList;

    if(!users) {
        usesrList = "there is no user record!";
    } else {
        usesrList = users.map((user, k) =>
        <UserRow user={user} key={k} />
      );
    }
    return(
        <div className="list">
                <table className='table'>
                    <tbody>
                        {usesrList}
                    </tbody>
                </table>
          </div>
    )
}


export default User;