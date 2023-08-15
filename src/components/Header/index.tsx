import dots from "../../assets/icons/dots.svg";
import cakeImage from "../../assets/images/photo1.png";

const index = () => {
  return (
    <header className="flex flex-col space-y-11">
      <div className="flex flex-col space-y-3">
        <h1 className="text-5xl font-bold font-playfair-display">
          Classic Cheesecake Recipe
        </h1>

        <div className="flex items-baseline space-x-3">
          <img src={dots} alt="rotated drag icon" />
          <p className="text-sm italic font-medium text-[#4F4F4F] basis-7/12">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </p>
        </div>
      </div>

      <img
        src={cakeImage}
        alt="photo of cheesecake"
        className="w-full max-h-[27.5rem]"
      />
    </header>
  );
};

export default index;
