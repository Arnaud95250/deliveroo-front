const Teaches = ({data}) => {
    return(
    <div className="title_food">
        <div>
          <h1>{data.name}</h1>
          <span>{data.description}</span>
        </div> 
        <div>
          <img src={data.picture} width="270px"/>
        </div>
      </div>
    )};

export default Teaches;