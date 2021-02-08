import '../assets/css/App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import Categorie from './Categorie';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="title_food">
        <div>
          <h1>{data.restaurant.name}</h1>
          <span>{data.restaurant.description}</span>
        </div> 
        
        <div>
          <img src={data.restaurant.picture} width="270px"/>
        </div>
      </div>
      <div className="container">
      {isLoading ? ( <span>En cours de chargement... </span> ) : ( data.categories.map((elem, index) => {
              return (
                <>
                
                <Categorie
                data={elem}
                // key={index}
                // isLoading={isLoading}
                // setIsLoading={setIsLoading}
                />
                </>
              );
            })
          )} 
      </div>
      
      <Footer/>

       {/* {isLoading ? (
            <span>En cours de chargement... </span>
          ) : (
            data.categories.map((elem, index) => {
              return (
                <p key={index}>{elem.name}</p>
              );
            })
          )} */}



    </div>
  );
}

export default App;
