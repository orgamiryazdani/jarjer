import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoCallOutline, IoLogoTwitter } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";

const HeaderMenu = () => {
  return (
    <>
      <div className='flex items-center justify-center text-xl font-bold'>
        <BiMenuAltLeft className='text-4xl mr-3' />
        <span>Categories</span>
      </div>
      <div className='flex items-center justify-center text-xl font-bold'>
        <IoCallOutline className='text-2xl mr-3 mb-1' />
        <span>Contact Us</span>
      </div>
      <div className='flex items-center justify-between w-56 text-2xl'>
        <FaFacebook />
        <FaYoutube />
        <IoLogoTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </>
  );
};

export default HeaderMenu;
