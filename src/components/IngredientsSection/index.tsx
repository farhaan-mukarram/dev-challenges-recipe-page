import Checkbox from "../Checkbox";

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
    <section>
      {ingredients.map(({ item, ingredients }) => (
        <section key={item}>
          <h3>{item}</h3>
          <section>
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
      {/* <h2>Ingredients</h2>
      <section>
        <h3>Graham Cracker Crust</h3>
      </section>

      <section>
        <h3>Cheesecake</h3>
      </section> */}
    </section>
  );
};

export default IngredientsSection;
