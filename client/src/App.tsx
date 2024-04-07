import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {name: "Hoodie", price: 90},
    {name: "Jacket", price: 720},
    {name: "Shorts", price: 410},
    {name: "Shoes", price: 500},
    {name: "Shirts", price: 80},
    {name: "Suits", price: 900},
    {name: "Hats", price: 50},
  ])

  function AddProduct() {
    setProducts((prevState => [...prevState, {name: 'Ruby - Carat-'+ (prevState.length + 1), price: (prevState.length * 200) + 100}]))
  }

  return (
    <>
      <h1>Products</h1>
      <button onClick={AddProduct}>
          Add
        </button>
      <div className="card" style={{borderRadius: '20px 0px 0px 20px',border: '1px solid gray',maxHeight: '300px',margin: 15, overflowY: 'scroll',overflowX:'hidden'}}>
        <ol>
          {products.map((item, index) => (
            <li style={{minWidth: 200,padding:5, border: '2px solid gray', margin:10, cursor: 'pointer'}} key={index}>{item.name} -- ${item.price}</li>
          ))}
        </ol>
      </div>

    </>
  )
}

export default App
