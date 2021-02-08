import Meals from'./Meals';

const Categorie = ({data, isLoading}) => {
    return(
        <div className="choice_categorie">
            <h2>{data.name}</h2>
            <div className="container_loop">
            {isLoading ? ( <span>En cours de chargement... </span> ) : ( data.meals.map((elem, index) => {
              return (
                <Meals
                data={elem}
                />
              );
            })
          )}
         </div>
        </div>
    )
}

export default Categorie;