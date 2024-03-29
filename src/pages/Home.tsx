import CategoryCart from "../features/categories/Categories";
import ProductCart from "../features/products/Products";
import AppLayout from "../ui/AppLayout";
import Location from "../ui/Location";
import Search from "../ui/Search";
import burgers from "../../public/images/burgers.png";
import like from "../../public/images/like.png";

const Home = () => {
  return (
    <AppLayout>
      <div className='w-full h-full flex'>
        <div className='w-4/6 h-full flex flex-col items-start justify-between px-10 py-3'>
          <Location />
          <Search />
          <CategoryCart />
          <ProductCart />
        </div>
        <div className='w-2/6 h-full z-10 flex items-center justify-center'>
          <img
            src={burgers}
            alt='burger'
            className='w-[500px] absolute right-24'
          />
          <img
            src={like}
            className='absolute -right-7 bottom-48 w-80 rotate-12'
            alt='like'
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
