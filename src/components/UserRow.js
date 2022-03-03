import React from 'react';

const UserRow = (props)=>{
    const user = props.user;

    return(
        <tr>
            <td>
                { user.first_name }
            </td>
            <td>
                { user.last_name }
            </td>
            <td>
                { user.user_email }
            </td>
        </tr>
    )
}

export default UserRow;