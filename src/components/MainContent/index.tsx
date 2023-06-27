import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainContent: FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <main className="main flex flex-col md:ml-0 transition-all duration-150 ease-in p-4 w-full flex-1">
      {children}
    </main>
  );
};

export default MainContent;
