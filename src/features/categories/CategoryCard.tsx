import truncateText from "../../utils/truncateText";

type props = {
  title: string;
  image: string;
};

const CategoryCard = ({ title, image }: props) => {
  return (
    <>
      <div className='bg-category w-[104px] h-40 font-bold text-sm mt-3 py-3 text-gray rounded-[200px] flex flex-col items-center justify-evenly'>
        <img
          src={image}
          alt={title}
          className='w-16 h-16 object-cover rounded-full'
        />
        <p>{truncateText(title, 10)}</p>
      </div>
    </>
  );
};

export default CategoryCard;
