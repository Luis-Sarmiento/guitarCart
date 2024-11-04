import { useState } from 'react'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])
  
  function addToCart(item) {

    const itemExists = cart.findIndex(guitar => item.id == guitar.id)
    if(itemExists >= 0){
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    }else{
      item.quantity = 1
      return(
        setCart([...cart, item])
      )
    }
  }

  return (
    <>
      
      <Header/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {db.map((guitar) => ( 
              <Guitar
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
              />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App
