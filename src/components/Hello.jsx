import React, {useState} from "react"; 


const HelloDash = () => 
{ 

    // create a needed variables 
    
    const [user, setUser] = useState(false); 
    const [userName, setUserName] = useState("");  
    const [isActive, setActive] = useState(false); 


    // create a userNameDisplay function 
    const userNameDisplay = () => 
    {
        if(userName && isActive)
        {
            setUserName(userName); 
            setActive(true);
        }else 
        {
            return false
        }
    }



    return(
     <div>Hello, ${userName}!</div>
    )
}; export default HelloDash;