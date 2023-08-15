import Header from "../Header";
import IngredientsSection from "../IngredientsSection";
import InstructionsSection from "../InstructionsSection";

const Main = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <IngredientsSection />
      <InstructionsSection />
    </main>
  );
};

export default Main;
