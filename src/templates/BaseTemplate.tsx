
import { NavBar } from '@/components/NavBar';
const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-black antialiased top-0 bg-indigo-900  font-sans  leading-normal box-border ">
      <div className="mx-auto ">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900"></h1>
          </div>
          <div className="">
            <NavBar />
          </div>
          <div className="flex justify-between ">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm"></footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
