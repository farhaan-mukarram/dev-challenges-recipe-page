import Checkbox from "./CheckboxItem";
import PrepTimeCard from "../PrepTimeSection/PrepTimeCard";

const ingredients = [
  {
    item: "Graham Cracker Crust",
    ingredients: [
      `1 and 1/2 cups (150g) <em>graham cracker crumbs</em> (about 10 full sheet graham crackers)`,
      `5 Tablespoons (70g) <em>unsalted butter</em>, melted`,
      `1/4 cup (50g) <em>granulated sugar</em>`,
    ],
  },
  {
    item: "Cheesecake",
    ingredients: [
      `four 8-ounce blocks (904g) full-fat <em>cream cheese</em>, softened to room temperature`,
      `1 cup (200g) <em>granulated sugar</em>`,
      `1 cup (240g) full-fat <em>sour cream</em>, at room temperature`,
      `1 teaspoon <em>pure vanilla extract</em>`,
      `2 teaspoons <em>fresh lemon juice</em> (optional, but recommended)`,
      `3 large <em>eggs</em>, at room temperature`,
      `topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes) `,
    ],
  },
];

const IngredientsSection = () => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col space-y-3 lg:space-y-8 basis-full lg:basis-[55%]">
        <h2 className="text-lg font-bold lg:text-2xl font-playfair-display">
          Ingredients
        </h2>

        <div className="flex flex-col space-y-8">
          {ingredients.map(({ item, ingredients }) => (
            <section key={item} className="flex flex-col space-y-6">
              <h3 className="text-base italic lg:text-lg font-playfair-display">
                {item}
              </h3>
              <section className="flex flex-col space-y-2">
                {ingredients.map((ing, idx) => (
                  <Checkbox
                    key={idx}
                    id={`${item}-ingredient-${idx + 1}`}
                    label={ing}
                  />
                ))}
              </section>
            </section>
          ))}
        </div>
      </div>

      <PrepTimeCard />
    </section>
  );
};

export default IngredientsSection;
