/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { useContext } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, updateCart } = useContext(GlobalContext);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/api/items/all_items",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(products);

  const addToCartHandler = (event) => {
    event.preventDefault();
    let id = event.target.id;

    const name = document.getElementById("hiddenname" + id).value;
    const price = document.getElementById("hiddenprice" + id).value;
    const image = document.getElementById("hiddenimage" + id).value;

    const newItem = {
      id,
      name,
      price: +price,
      image,
      quantity: 1,
    };

    const findItem = cart.find((item) => item.id === id);

    if (findItem) {
      // console.log("exist");
      updateCart(id);
      // console.log(cart);
      return;
    }

    addToCart(newItem);
    //  console.log(cart);
  };

  return (
    <div className="w-full bg-gray-300">
      <div className="">
        <img src={img1} className="h-[350px] w-full" />
      </div>
      <div className="  flex justify-center align-baseline h-16 bg-black ">
        <h1 className="text-center text-3xl font-bold text-white hover:underline  hover:cursor-pointer">Products</h1>

      </div>

      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap  justify-center align-middle-m-4 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            {
              products.map((product) => {
                // console.log(product, 'products')

                return (

                  <Link to={`productdetails/${product._id}`} className=" relative m-10 flex w-60 max-w-xs flex-col overflow-hidden rounded-lg border
                                     border-gray-100 bg-pink-400  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-400  ">
                    <a className="relative mx-3 mt-3 flex  overflow-hidden rounded-sm justify-center" href="#">
                      <img className=" object-contain h-40 " src={product.image} alt="image" />
                      <input
                        type="hidden"
                        value={product.image}
                        id={`hiddenimage${product._id}`}
                      />
                    </a>
                    <div className="mt-4 px-5 pb-5">
                      <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                        <input
                          type="hidden"
                          value={product.name}
                          id={`hiddenname${product._id}`}
                        />
                      </a>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                          <input
                            type="hidden"
                            value={product.price}
                            id={`hiddenprice${product._id}`}
                          />
                          <span className="text-sm text-slate-900 line-through">$299</span>
                        </p>

                      </div>
                      <button id={product._id}
                        onClick={addToCartHandler} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 
                        text-center text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-4focus:ring-blue-300">
                        Add to cart</button>
                    </div>
                  </Link>
                )
              })
            }

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
