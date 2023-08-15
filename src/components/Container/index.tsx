import { type PropsWithChildren, type FunctionComponent } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col max-w-5xl mx-auto">{children}</div>;
};

export default Container;
