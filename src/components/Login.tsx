import React, { useState, useEffect } from 'react';

import api from '../services/api';

interface UsersProps {
    usrId: number;
    usrNome: string;
}

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [users, setUsers] = useState<Array<UsersProps>>([]);

    useEffect(() => {                       
        api.get("users")
            .then(res => {
            setUsers(res.data)   
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
         
    }, [])

    return (
        <div>
            {users.map((row) => (
                <ul key={row.usrId}>
                    <li>
                        {row.usrId} {row.usrNome}
                    </li>
                </ul>                
            ))}
        </div>
    );
}