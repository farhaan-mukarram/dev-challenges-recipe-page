import { type FunctionComponent } from "react";

interface Props {
  id: string;
  label: string;
}

const Checkbox: FunctionComponent<Props> = ({ id, label }) => {
  return (
    <div className="flex space-x-2 lg:space-x-4">
      <input
        type="checkbox"
        className="min-w-[1.25rem] min-h-[1.25rem] max-h-[1.25rem] rounded-[0.25rem] checked:accent-primary"
      />
      <label
        htmlFor={id}
        dangerouslySetInnerHTML={{ __html: label }}
        className="[&>em]:font-bold [&>em]:not-italic [&>i]:font-medium [&>i]:italic lg:text-base text-sm"
      ></label>
    </div>
  );
};

export default Checkbox;
