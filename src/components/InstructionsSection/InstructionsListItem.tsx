import { type FunctionComponent } from "react";

interface Props {
  instruction: string;
}

const InstructionsListItem: FunctionComponent<Props> = ({ instruction }) => {
  return (
    <li
      dangerouslySetInnerHTML={{ __html: instruction }}
      className="[&>em]:font-bold [&>em]:not-italic text-base "
    ></li>
  );
};

export default InstructionsListItem;
