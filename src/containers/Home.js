import axios from "axios";
import { useEffect, useState } from "react";

import Teaches from "../components/Teaches";
import Categorie from "../components/Categorie";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get("http://localhost:3001/");
        // console.log(reponse.data);
        setData(reponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="home">
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div>
          <Teaches data={data.restaurant} />
          <Categorie data={data.categories} />
        </div>
      )}
    </div>
  );
}

export default Home;
