import Meals from'./Meals';

const Categorie = ({data}) => {
    return(
      <div className="container">
        <div className="loop_categorie">
            {data.map((elem, index) => {
              return (
                elem.meals.length > 0 && (
                  <div key={index} className="index_meals">
                    <h3>{elem.name}</h3>
                    <Meals data={elem.meals} />
                  </div>
                )
              );
            })}
        </div>
      </div>
    )
}

export default Categorie;