import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import {FaPlus} from "react-icons/fa"

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <button className="btn btn-primary mb-8" onClick={addProduct}>
          <FaPlus/>Add
      </button>
      
      <ProductList products={products}/>
    </>
  );
}
