import {useEffect, useState} from 'react';


const Meals = ({data}) => {
    const [panier, setPanier] = useState([])
    return(
        <div className="container_meals" >
            {data.map((elem, index) => {
                return(
                    elem.description.length > 0 &&  elem.picture  && (
                    <div className="info_meals" 
                         key={index} 
                         onClick={() => {
                            //  console.log(elem.id)
                            const newPanier =[...panier];
                            newPanier.push(1); // je pousse un index dans mon tableau
                            setPanier(newPanier)
                            }}>
                        <div >
                            <h4>{elem.title}</h4>
                            <p>{elem.description}</p>
                            <p>{elem.price}</p>
                        </div>
                        <div>
                            <img src={elem.picture}/>
                        </div> 
                    </div>
                    )
                )
            })}
        </div>   
    )
}

export default Meals;