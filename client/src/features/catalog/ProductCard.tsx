import { Product } from "../../app/models/product";
import { FaShoppingBasket } from "react-icons/fa" ;

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <>
      <div className="card bg-base-100 border dark:border-gray-700 shadow-lg dark:shadow-md dark:shadow-slate-800">
        <figure>
          <img
          className="w-full hover:scale-105 transition-all ease duration-300"
            src={"https://picsum.photos/id/"+Math.floor(Math.random() * 50)+"/300/200"}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title">
            {product.name}
            <div className="badge bg-base-300 ml-3">NEW</div>
          </h2>
          <p>{product.description.length > 50 ? product.description.substring(0,50)+"..." : product.description}</p>
          <div className="card-actions justify-start">
            <div className="badge bg-base-300 badge-outline border-gray-400 p-3">{product.brand}</div>
            <div className="badge badge-outline border-gray-400 p-3">{product.type}</div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-2xl font-bold">${product.price}</span>
            <a href="#" className="text-white text-xl badge badge-primary p-4 rounded-lg"><FaShoppingBasket/></a>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
