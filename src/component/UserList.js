import { Link } from "react-router-dom"
const UserList = ({users}) => {
    return ( 
        <div className="user-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Post-Link</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user,index) => {
                        return (<tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.company.name}</td>
                            <td><Link to={`/users/${user.id}`}>User-Post</Link></td>
                        </tr>);
                    })
                }
                </tbody>
            </table>
        </div>
     );
}
 
export default UserList;