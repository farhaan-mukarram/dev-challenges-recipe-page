import Header from "../Header";
import IngredientsSection from "../IngredientsSection";
import InstructionsSection from "../InstructionsSection";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen space-y-12">
      <Header />

      <div className="flex flex-col space-y-7">
        <IngredientsSection />
        <InstructionsSection />
      </div>
    </main>
  );
};

export default Main;
