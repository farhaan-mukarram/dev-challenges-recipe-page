import { prepTimeItems } from "./prepTimeItems";

const PrepTimeCard = () => {
  return (
    <div className="lg:flex flex-col px-11 py-14 space-y-11 basis-[55%] max-w-[13.5rem] rounded-xl shadow-[0_0_20px_0_rgba(0,0,0,0.1)] h-max hidden">
      {prepTimeItems.map(
        ({
          imgSrc,
          heading,
          description,
          descriptionTextColor = "text-[#333333]",
        }) => (
          <div className="flex space-x-3" key={heading}>
            <img src={imgSrc} alt="" className="w-8 h-8" />

            <div className="flex flex-col">
              <h4 className="uppercase text-[#BDBDBD] font-bold text-[0.625rem]">
                {heading}
              </h4>
              <p className={`font-medium text-sm ${descriptionTextColor}`}>
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PrepTimeCard;
