import Header from "../Header";
import IngredientsSection from "../IngredientsSection";
import InstructionsSection from "../InstructionsSection";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-12">
      <Header />

      <div>
        <IngredientsSection />
        <InstructionsSection />
      </div>
    </main>
  );
};

export default Main;
