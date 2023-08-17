import { type FunctionComponent } from "react";

import InstructionsListItem from "./InstructionsListItem";

interface Props {
  instructions: string[];
}

const InstructionsList: FunctionComponent<Props> = ({ instructions }) => {
  return (
    <div className="flex flex-col space-y-9 styled-instructions-list">
      {instructions.map((instruction, idx) => (
        <InstructionsListItem
          instruction={instruction}
          key={instruction}
          number={idx + 1}
        />
      ))}
    </div>
  );
};

export default InstructionsList;
