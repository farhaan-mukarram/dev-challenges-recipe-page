import { type FunctionComponent } from "react";

interface Props {
  instruction: string;
  number: number;
}

const InstructionsListItem: FunctionComponent<Props> = ({
  instruction,
  number,
}) => {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col align-center justify-center text-2xl font-bold min-w-[2.25rem] h-[2.25rem] bg-primary font-playfair-display text-center text-white rounded-[0.375rem]">
        <span>{number}</span>
      </div>

      <p
        dangerouslySetInnerHTML={{ __html: instruction }}
        className="[&>em]:font-bold [&>em]:not-italic lg:text-base text-sm"
      />
    </div>
  );
};

export default InstructionsListItem;
