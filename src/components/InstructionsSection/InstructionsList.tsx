import { type FunctionComponent } from "react";

import InstructionsListItem from "./InstructionsListItem";

interface Props {
  instructions: string[];
}

const InstructionsList: FunctionComponent<Props> = ({ instructions }) => {
  return (
    <ol className="flex flex-col space-y-9 styled-instructions-list">
      {instructions.map((instruction) => (
        <InstructionsListItem instruction={instruction} key={instruction} />
      ))}
    </ol>
  );
};

export default InstructionsList;
