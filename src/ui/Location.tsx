import { GrLocation } from "react-icons/gr";

const Location = () => {
  return (
    <div className='flex text-lg'>
      <div className='flex items-center border-r border-[#ccc] w-36 justify-evenly text-gray'>
        <div className='rounded-full w-5 h-5 mb-1 border border-gray flex items-center justify-center'>
          <GrLocation className='w-3 h-3' />
        </div>
        <span>My Location</span>
      </div>
      <div className='ml-3'>
        <span className='text-gray'>New York, </span>
        <span className='text-[#29d299]'>Left Side Blue Door</span>
      </div>
    </div>
  );
};

export default Location;
