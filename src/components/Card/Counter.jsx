import React from "react";
import "./Counter.css";
import AddButton from "../Button/AddButton";


const Counter = () => {
  const productsArr = [
    {
    	id:1,
      name: "Album 1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
    	id:2,
      name: "Album 2",
      title: "Black and White Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
    	id:3,
      name: "Album 3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
    	id:4,
      name: "Album 4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="container px-1 mx-8">
      <h1>MUSIC</h1>
      <div className="row">
        {productsArr.map((product) => (
          <div key={product.name} className="col-sm-6 my-3 mx-7">
            <div
              className="card container-fluid d-flex justify-content-center shadow"
              style={{ width: "15rem" }}
            >
              <div className="album-title">{product.name}</div>
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-price">${product.price}</h5>
                <AddButton item={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;


