import React, { useState, useEffect } from "react";
import '../App.css';
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); /*tarnale esksav */

  useEffect(() => {
    const fetchUsers = async () => {
      try{
      const response = await fetch("http://localhost:8000/api/products");
      const users = await response.json();
      console.log(users);
      
      setData(users);
      setIsLoading(false); /* tarnale verchantsav  */
    }catch(error){
      console.log(error);
      
    }
    };
    fetchUsers();

    
  }, []);

  const renderUser = () => {
    if (isLoading) return <div><img src='https://cdn.dribbble.com/users/80078/screenshots/995621/loading.gif'></img></div>

    
    
    ;

    return (
      <div>
        <div>
          {data.map(user => (
            <div key={user._id}> 
            <img src={user.userImg}/>
              <h2> {user.Name} {user.UserName}</h2>
            
              <br/>
              <h1>{user._id}</h1>
              <img src={user.img1}/>
              <img src={user.img2}/>
              <img src={user.img3}/>
              <img src={user.img4}/>
              <img src={user.img5}/>
           <hr/>
           
           <br/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return <div>{renderUser()}</div>;
}

