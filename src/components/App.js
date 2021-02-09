import '../assets/css/App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import Categorie from './Categorie';
import Header from './Header';
import Footer from './Footer';
import Teaches from './Teaches';
// import Panier from './Panier';


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([])

  useEffect(() => {
      // Requete Axios
      const getData = async() => {
        try {
            const reponse = await axios.get("http://localhost:3001/");
            // Stocker response.data dans un state
            console.log(reponse.data);
            setData(reponse.data);
            setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
        
      };
      getData();
    
  }, []);


    return (
      <div className="App">
        <Header/>

         {isLoading ? (
              <span>En cours de chargement... </span>
            ) : (
              <div>
                <Teaches data={data.restaurant}/>
                <div className="container_panier">
                    <div>
                        <button type="#">Valider mon panier</button>
                    </div>
                    <div>
                        {/* {data.map((panier, index) => {
                            return (
                                <p></p>
                            )
                        })} */}
                    </div>
                </div>
                {/* <Panier data={data.restaurant} /> */}
                <Categorie data={data.categories} />



                  
              </div>
            )}        
        <Footer/>
      </div>
    );
}

export default App;