import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Button from "../Button";
import { DataContext } from "../../App";

function ProductSinglePage() {
  const { id } = useParams();
  const { isError, isLoading, fetchdata } = useFetch(`https://dummyjson.com/products/${id}`);

  const { basket, setBasket, addToBasket } = useContext(DataContext);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <div className="flex my-20 flex-col w-full h-full sm:flex-row">
      <div className="flex flex-1 justify-center items-center gap-8 flex-col">
        <img src={fetchdata?.images?.[0]} alt="" className="w-100 h-100" />
      </div>
      <div className="flex flex-1 justify-center items-center gap-8 flex-col">
        <h3 className="text-5xl text-red-700 font-extrabold">{fetchdata?.title}</h3>
        <p>
          <span className="text-red-400 font-extrabold">Barnd</span> : {fetchdata?.brand}
        </p>
        <p className="w-70   p-8 rounded-2xl">
          <span className="text-2xl text-red-400 font-extrabold">Description : </span>
          {fetchdata?.description}
        </p>
        <p className="text-green-600 text-2xl">
          <span className="text-red-400 font-extrabold">Price</span>:{fetchdata?.price}$
        </p>
        <Button onClick={() => addToBasket(fetchdata)}> Add to card</Button>
      </div>
    </div>
  );
}

export default ProductSinglePage;
