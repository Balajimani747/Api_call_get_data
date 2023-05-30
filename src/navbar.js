import { useState} from "react";

const URl='https://reqres.in/api/users?page=1';

const getdata= async()=>
{
    const reponse=await fetch(URl);
    const body=await reponse.json();
    console.log(body.data);
    return body.data;
};

export const Navbar=()=>
{
    const [data, setData]=useState([]); 
    const onClick=async()=>
    {
        const data= await getdata();
        await getdata();
        setData(data);
    }
    return(
        <>
        <nav className="nav_box">
          <h1>AI-Solutions</h1>
          <button onClick={onClick}>Get Users</button>
        </nav>
        <div>
            <h2><i>User Deatils</i></h2>
                <table >
                    <tbody>
                        <tr>                   
                            <th>User Id</th>
                            <th>Email Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Profile</th>
                        </tr>
                        { 
                            data.map((user,index)=>
                            {
                                return(
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td><img width={50} src={user.avatar} alt="profile_image"/></td>
                                    </tr>
                                    )
                           })
                        }
                    </tbody>
                </table>
        </div>
       </>
    );
}