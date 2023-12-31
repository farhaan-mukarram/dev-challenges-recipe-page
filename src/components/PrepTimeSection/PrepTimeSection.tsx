import { prepTimeItems } from "./prepTimeItems";

const PrepTimeSection = () => {
  return (
    <div className="flex flex-wrap lg:hidden [&:first-child]:basis-full justify-between gap-y-5">
      {prepTimeItems.map(
        ({
          imgSrc,
          heading,
          description,
          descriptionTextColor = "text-[#333333]",
          alt,
        }) => (
          <div
            className="flex space-x-1 [&:first-of-type]:basis-full items-center"
            key={heading}
          >
            <img src={imgSrc} alt={alt} className="w-4 h-4 md:h-6 md:w-6" />

            <div className="flex flex-col">
              <h4 className="uppercase text-[#BDBDBD] font-bold text-[0.5rem] md:text-[0.625rem]">
                {heading}
              </h4>
              <p
                className={`font-medium text-[0.625rem] md:text-sm ${descriptionTextColor}`}
              >
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PrepTimeSection;
