import React from 'react'
import {getAuth} from 'firebase/auth';


const FireBaseAuth = () => {
    const app = initializeApp(firebaseconfig);
    const auth = getAuth(app);
  return (
    <div></div>
  )
}

export default FireBaseAuth