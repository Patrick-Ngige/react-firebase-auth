import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen();
        }
    }, []);

    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log('Signed out successfully')
        }).catch(error => console.log(error))
    }
    
  return (
    <div>
      {authUser ? <><h5>{`Signed In as ${authUser.email}`}</h5><button onClick={UserSignOut}>Sign Out</button></> : <h5>Signed Out</h5>}
    </div>
  )
}

export default AuthDetails
