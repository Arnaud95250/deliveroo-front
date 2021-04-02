import { useState } from "react";
import Panier from "./Panier";

const Categorie = ({ data }) => {
  const [panier, setPanier] = useState([]);
  const [check, setCheck] = useState(false);

  return (
    <div id="categorie">
      <div>
        {data.map((categorie, index) => {
          const dataMeals = categorie.meals;
          return (
            categorie.meals.length > 0 && (
              <div key={index} className="index_meals">
                <h3>{categorie.name}</h3>
                <div id="meals">
                  <div className="content_mails">
                    {dataMeals.map((elem, index) => {
                      return (
                        elem.description.length > 0 &&
                        elem.picture && (
                          <div
                            key={index}
                            onClick={() => {
                              const tab = [...panier];
                              if (tab.length === 0) {
                                tab.push({
                                  id: elem.id,
                                  title: elem.title,
                                  price: elem.price,
                                  quantity: 1,
                                });
                                setPanier(tab);
                                setCheck(true);
                              } else {
                                let isPresent = false;
                                for (let i = 0; i < tab.length; i++) {
                                  if (tab[i].id === elem.id) {
                                    isPresent = true;
                                    tab[i].quantity = tab[i].quantity + 1;
                                  }
                                }
                                if (isPresent === false) {
                                  tab.push({
                                    id: elem.id,
                                    title: elem.title,
                                    price: elem.price,
                                    quantity: 1,
                                  });
                                }
                                setPanier(tab);
                              }
                            }}
                          >
                            <div>
                              <h4>{elem.title}</h4>
                              <p>{elem.description}</p>
                              <p>{elem.price}</p>
                            </div>
                            <div>
                              <img src={elem.picture} alt="produit" />
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Panier panier={panier} setPanier={setPanier} />
      {check ? (
        <div className="counter">
          <p>+1</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Categorie;
