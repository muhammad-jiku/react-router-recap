import { useEffect, useState } from 'react';
const useTshirts = () => {
  const [tshirts, setTshirts] = useState([]);
  useEffect(() => {
    fetch('tshirts.json')
      .then((res) => res.json())
      .then((data) => setTshirts(data))
      .catch((err) => console.log(err));
  }, []);

  return [tshirts, setTshirts];
};

export default useTshirts;
