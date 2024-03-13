import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div className='grid h-screen w-screen grid-cols-2 grid-rows-7'>
      <div className='col-span-2 row-span-1'>
        <Header />
      </div>
      <div className='col-span-2 row-span-6'>{children}</div>
    </div>
  );
}

export default AppLayout;
