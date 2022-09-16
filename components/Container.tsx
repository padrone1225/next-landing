import { ContainerProps } from "../types/types";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={"mx-auto w-full p-4 md:p-6 max-w-[1200px] " + className}>
      {children}
    </div>
  );
};

export default Container;
