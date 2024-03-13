import { products } from "../../types/Products";

type props = {
  data: products;
};

const ProductCard = ({ data }: props) => {
  return (
    <>
      <div className='w-80 h-44 btnCartStyle relative flex items-end justify-start overflow-hidden'>
        <img
          src={data.image}
          alt={data.title}
          className='object-cover w-full h-full'
        />
        <div className='w-full h-full bg-black opacity-30 absolute'></div>
        <div className='absolute pb-5 pl-5 flex items-end w-full h-full'>
          <div className='w-14 h-14 btnCartStyle bg-category flex items-center justify-center overflow-hidden'>
            <img
              src={data.categoryImage}
              alt={data.title}
              className='w-12'
            />
          </div>
          <div className='text-white ml-4'>
            <p className='font-bold text-lg'>{data.title}</p>
            <span>Rate {data.rate}/10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
