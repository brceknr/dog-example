import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// array dönüyorsam boş asrray objesct dönüyorsam null atıyırum

const App = () => {
  const [images, setImages] = useState([]);

  //uffs
  useEffect(() => {
    const API_URL = "https://dog.ceo/api/breed/chihuahua/images";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setImages(veri.message));
  }, []);

  return (
    <div>
      {images.map((imageUrl) => (
        <img src={imageUrl} width={100} height={100} />
      ))}
    </div>
  );
};

export default App;
