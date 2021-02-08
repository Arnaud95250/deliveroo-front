
const Categorie = ({data, isLoading}) => {
    return(
        
        <div className="container_categorie">
            
            <div>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <p>{data.price}</p>
                {/* <p>{data.popular}</p> */}
            </div>
            <div>
                <img src={data.picture}/>
            </div> 
            
        </div>
    )
}

export default Categorie;