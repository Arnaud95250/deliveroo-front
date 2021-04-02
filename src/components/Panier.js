import plus from "../assets/img/plus.svg";
import moins from "../assets/img/moins.svg";
import shopping from "../assets/img/shopping-cart.svg";
import { useState } from "react";

const Panier = ({ panier, setPanier, counter }) => {
  const [shop, setShop] = useState(false);

  const tab = [...panier];
  let price = 0;
  for (let i = 0; i < tab.length; i++) {
    price = price + tab[i].quantity * Number(tab[i].price);
  }
  let finalPrice = price + 2.5;

  price = price.toFixed(2);
  finalPrice = finalPrice.toFixed(2);

  price = price.toString().replace(".", ",");
  finalPrice = finalPrice.toString().replace(".", ",");

  const clickShop = () => {
    if (!shop) {
      setShop(true);
    } else {
      setShop(false);
    }
  };

  return (
    <div id="panier">
      <div
        className="shopping"
        onClick={() => {
          clickShop();
        }}
      >
        <img src={shopping} alt="shopping" />
      </div>

      <div className="hidden">
        {panier.map((elem, index) => {
          return (
            <div key={index} className="content_panier">
              <div>
                <img
                  src={moins}
                  alt="moins"
                  onClick={() => {
                    const tab = [...panier];
                    for (let i = 0; i < tab.length; i++) {
                      if (tab[i].id === elem.id) {
                        if (tab[i].quantity > 1) {
                          tab[i].quantity = tab[i].quantity - 1;
                        } else {
                          tab.splice(i, 1);
                        }
                      }
                    }

                    setPanier(tab);
                  }}
                />

                <span>{elem.quantity}</span>
                <img
                  src={plus}
                  alt="plus"
                  onClick={() => {
                    const tab = [...panier];
                    for (let i = 0; i < tab.length; i++) {
                      if (tab[i].id === elem.id) {
                        if (tab[i].quantity >= 1) {
                          tab[i].quantity = tab[i].quantity += 1;
                        } else {
                          tab[i].quantity = 1;
                        }
                      }
                    }

                    setPanier(tab);
                  }}
                />
              </div>
              <p>{elem.title}</p>
              <p>{elem.price.replace(".", ",") + "€"} </p>
            </div>
          );
        })}
        <hr />
        <div className="info_price">
          <span>Sous-Total</span>
          <span>{price + "€"}</span>
        </div>
        <div className="info_price">
          <span>Frais de livraison</span>
          <span>2,50 € </span>
        </div>
        <div className="info_price">
          <span>Total</span>
          <span>{finalPrice + "€"}</span>
        </div>
        <button onClick={() => window.location.reload()}>
          Valider mon panier
        </button>
      </div>

      {shop ? (
        <div className="hidden_responsive">
          <div className="scroll">
            {panier.map((elem, index) => {
              return (
                <div key={index} className="content_panier">
                  <div>
                    <img
                      src={moins}
                      alt="moins"
                      onClick={() => {
                        const tab = [...panier];
                        for (let i = 0; i < tab.length; i++) {
                          if (tab[i].id === elem.id) {
                            if (tab[i].quantity > 1) {
                              tab[i].quantity = tab[i].quantity - 1;
                            } else {
                              tab.splice(i, 1);
                            }
                          }
                        }

                        setPanier(tab);
                      }}
                    />

                    <span>{elem.quantity}</span>
                    <img
                      src={plus}
                      alt="plus"
                      onClick={() => {
                        const tab = [...panier];
                        for (let i = 0; i < tab.length; i++) {
                          if (tab[i].id === elem.id) {
                            if (tab[i].quantity >= 1) {
                              tab[i].quantity = tab[i].quantity += 1;
                            } else {
                              tab[i].quantity = 1;
                            }
                          }
                        }

                        setPanier(tab);
                      }}
                    />
                  </div>
                  <p>{elem.title}</p>
                  <p>{elem.price.replace(".", ",") + "€"} </p>
                </div>
              );
            })}
          </div>
          <div>
            <hr />
            <div className="info_price">
              <span>Sous-Total</span>
              <span>{price + "€"}</span>
            </div>
            <div className="info_price">
              <span>Frais de livraison</span>
              <span>2,50 € </span>
            </div>
            <div className="info_price">
              <span>Total</span>
              <span>{finalPrice + "€"}</span>
            </div>
            <button onClick={() => window.location.reload()}>
              Valider mon panier
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Panier;
