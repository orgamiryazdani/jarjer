import CategoryCard from "./CategoryCard";
import useCategories from "../../hooks/useCategories";
import { category } from "../../types/Category";
import { useSearchParams } from "react-router-dom";
import Loading from "../../ui/Loading";

type categoryData = {
  data: {
    menuItems: category[];
  };
  isLoading: boolean;
};

const CategoryCart = () => {
  const [searchParams] = useSearchParams();
  const currentFilter: string = searchParams.get("query") || "pizzaa";
  const { data, isLoading }: categoryData = useCategories(
    `query=${currentFilter}&number=6`,
  );

  if (isLoading)
    return (
      <div className='w-full h-48 flex items-center justify-center'>
        <Loading
          width='80'
          height='60'
        />
      </div>
    );

  if (data.menuItems.length === 0)
    return (
      <div className='w-full h-48 flex items-center justify-center text-gray'>
        محصولی پیدا نشد
      </div>
    );

  return (
    <div>
      <h1 className='text-[#a9a9a9] font-bold text-sm ml-5'>
        Popular Category
      </h1>
      <div className='flex items-center justify-between gap-x-4'>
        {data.menuItems.map((item: category) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCart;
