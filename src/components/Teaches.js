const Teaches = ({ data }) => {
  return (
    <div id="teaches">
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <div>
        <img src={data.picture} alt="home" />
      </div>
    </div>
  );
};

export default Teaches;
