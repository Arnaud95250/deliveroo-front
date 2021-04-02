import { useState } from "react";

const Meals = ({ data }) => {
  const [panier, setPanier] = useState([]);

  return (
    <div id="meals">
      <div className="content_mails">
        {data.map((elem, index) => {
          return (
            elem.description.length > 0 &&
            elem.picture && (
              <div
                key={index}
                onClick={() => {
                  let newPanierMeals = {
                    id: elem.id,
                    title: elem.title,
                    price: elem.price,
                  };
                  const newPanier = [...panier];
                  newPanier.push(newPanierMeals); // je pousse un index dans mon tableau
                  console.log(panier);
                  return setPanier(newPanier);
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
  );
};

export default Meals;
