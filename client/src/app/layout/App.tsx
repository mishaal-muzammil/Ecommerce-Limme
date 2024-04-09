import { useEffect, useState } from 'react'
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

function App() {
  
  // const [products, setProducts] = useState([
  //   {name: "Hoodie", price: 90},
  //   {name: "Jacket", price: 720},
  //   {name: "Shorts", price: 410},
  //   {name: "Shoes", price: 500},
  //   {name: "Shirts", price: 80},
  //   {name: "Suits", price: 900},
  //   {name: "Hats", price: 50},
  // ]);

const [isDark, setIsDark] = useState<boolean>(
    JSON.parse(localStorage.getItem("isDark") || 'false')
  );

const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  isDark === null ? localStorage.setItem("isDark",JSON.stringify(false)) :  localStorage.setItem("isDark",JSON.stringify(isDark))
  const theme = isDark ? "night" : "winter";
  document.documentElement!.setAttribute("data-theme", theme);
  isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark")
  console.log("Got from Store: "+localStorage.getItem("isDark"));

  fetch('http://localhost:5000/api/products')
  .then(response => response.json())
  .then(data => {setProducts(data)})

},[isDark]);

  function AddProduct() {
    setProducts(prevState => [...prevState,
      {
       id: prevState.length + 11,
       name: 'Ruby - Carat-'+ (prevState.length + 1), 
       price: (prevState.length * 200) + 100,
       brand: 'ZamGems',
       description: 'Desire for ruby is just as great today as it always has been. As a symbol of passion, ruby makes an ideal romantic gift.',
       type: 'Gem',
       pictureUrl: 'https://picsum.photos/id/50/300/200'
      }
    ])
  }

  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <main id="content">
        <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <Catalog products={products} addProduct={AddProduct}/>
        </div>
      </main>

    </>
  )
}

export default App
