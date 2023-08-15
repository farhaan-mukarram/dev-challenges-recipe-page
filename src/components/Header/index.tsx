import cakeImage from "../../assets/images/photo1.png";

const index = () => {
  return (
    <header>
      <h1>Classic Cheesecake Recipe</h1>
      <p>
        Look no further for a creamy and ultra smooth classic cheesecake recipe!
        Paired with a buttery graham cracker crust, no one can deny its simple
        decadence. For the best results, bake in a water bath.
      </p>
      <img src={cakeImage} alt="photo of cheesecake" />
    </header>
  );
};

export default index;
