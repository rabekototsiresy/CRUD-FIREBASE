import React,{useContext,useEffect,useState} from 'react'
import {FirebaseContext} from './../Firebase'

const Main = () => {
  const [collection, setCollection] = useState(null)
  const [donne,setDonne] = useState('')
  const firebase = useContext(FirebaseContext)
  useEffect( ()=>{
  //  firebase.getCollection('users')
  //  .get()
  //  .then( collection =>{
  //    if( collection ) {
  //     collection =  collection.docs.map( doc => doc.data())
  //     setCollection(collection)
  //     console.log(collection)
  //    }
  //  })

    firebase.getDoc('eiryglnwVvCl61BX6JS5').get()
    .then( (docUser) =>{
      if(docUser.exists){
        console.log(docUser.data())
      }
    })


  },[])
if( collection){
  collection.map( u =>console.log(u))
}




  return (
    <div>
      <ul>

      </ul>
    </div>
  )
}

export default Main
