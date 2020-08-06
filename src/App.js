import React from 'react'
import Firebase, { FirebaseContext } from './Components/Firebase'
import Main from './Components/Main';


const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <div>
        <Main />
    </div>
    </FirebaseContext.Provider>
  )
}

export default App
