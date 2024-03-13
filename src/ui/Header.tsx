import { BsMinecartLoaded } from "react-icons/bs";
import { PiForkKnife } from "react-icons/pi";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className='w-full h-full flex text-gray'>
      <div className='h-full w-4/6 flex items-center justify-around'>
        {/* logo */}
        <div className='flex items-center justify-between'>
          <PiForkKnife className='text-7xl mb-3' />
          <div>
            <p className='font-bold text-3xl'>JarJer</p>
            <p className='ml-4'>Food Delivery</p>
          </div>
        </div>
        {/* header menu */}
        <HeaderMenu />
      </div>
      {/* user account */}
      <div className='h-full w-2/6 flex items-center justify-center z-10 relative text-gray'>
        <BsMinecartLoaded />
        <button className='bg-gray ml-12 w-40 h-16 text-white btnCartStyle'>
          Account
        </button>
        <div className='bg-yellow w-[493px] h-[598px] absolute -top-10 -right-14 rounded-bl-[70px] rounded-br-[365px] rotate-12 -z-10'></div>
        <div className='w-[484px] h-40 rounded-l-[200px] bg-yellow absolute right-0 top-96 text-sm -z-10 flex items-end justify-end p-5'>
          <div className='w-56 flex items-center justify-between'>
            <a href='#'>Applications</a>
            <a href='#'>Privacy</a>
            <a href='#'>Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
