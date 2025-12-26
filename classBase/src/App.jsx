import { useState } from 'react'
// import { Student } from './components/Students'
import { CounterApp } from './components/CounterApp'
import { Empolyee } from './components/Empolyee'
import { SingleProductCard } from './components/SingleProductCard'


function App() {

  return (
    <>
      {/* <Student name='Anil' age={23}/>  */}
      {/* <Empolyee/>
      <CounterApp/>  */}
      <div>

        <SingleProductCard
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s'
          title='HeadPhone'
          desc='Best Sound Quality Headphones'
          price='399'

        />
      </div>

    </>
  )
}

export default App
