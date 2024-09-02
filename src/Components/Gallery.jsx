import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";

function Gallery() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //   console.log(apiData);

  return (
    <div className="flex flex-wrap gap-5 justify-between w-11/12 sm:w-full m-auto">
      {apiData.map(({ image, title, price, id } = data) => (
        <Card
          key={id}
          image={image}
          title={title}
          price={price}
          className="card border-2 rounded-xl p-4 hover:shadow-xl"
        //   style={{}}
        />
      ))}
    </div>
  );
}

export default Gallery;
