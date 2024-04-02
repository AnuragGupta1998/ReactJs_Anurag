import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    //getting user from UserContext
    const {user} = useContext(UserContext)
  
    if(!user){
        return <div>plaese login</div>
    }

    return <div>welcome {user.username}{user.password}</div>
}

export default Profile