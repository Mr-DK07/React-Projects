import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    user: "DK",
    age: 20
  }
  let newArr = [1,2,3]

  return (
    <>

    <h1 className='bg-slate-500 rounded-xl mb-5 p-4'>Tailwind</h1>

    <Card userName="Emma" btnText="Visit Profile →" imgSrc="https://images.pexels.com/photos/20229450/pexels-photo-20229450/free-photo-of-a-woman-standing-on-the-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    
    <Card userName="Dasy"  imgSrc="https://images.pexels.com/photos/20220627/pexels-photo-20220627/free-photo-of-a-woman-in-jeans-and-a-crop-top-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

    </>
  )
}

export default App
