import { useState, useEffect } from "react";

const images = [
  "./img/wide/download.jpeg",
  "./img/wide/download1.jpeg",
  "./img/wide/img1.jpeg",
  "./img/wide/img2.jpeg",
  "./img/wide/img3.jpeg",
  "./img/wide/images.jpeg"
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[index]} alt="Slideshow" />
    </div>
  );
};

export default Slideshow;
