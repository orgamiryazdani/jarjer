import { products } from "../../types/Products";
import ProductCard from "./ProductCard";

const productsData: products[] = [
  {
    id: 1,
    title: "King Burger",
    image:
      "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg",
    categoryImage:
      "https://qph.cf2.quoracdn.net/main-qimg-6b1bcc88cab4d2d312b83fe02f36adb2-lq",
    rate: 8,
  },
  {
    id: 2,
    title: "McDonald's",
    image:
      "https://d22ngpx8edtvxq.cloudfront.net/webuploads/_flexibleHeader/18261/Uit-eten-Novi-Enschede-2021-Liggend-LR_2023-05-16-125658_voon.webp",
    categoryImage:
      "https://qph.cf2.quoracdn.net/main-qimg-6b1bcc88cab4d2d312b83fe02f36adb2-lq",
    rate: 9,
  },
];

const ProductCart = () => {
  return (
    <div>
      <h1 className='text-[#a9a9a9] ml-5'>Recently Pre Orders</h1>
      <div className='flex items-center gap-x-6 mt-2'>
        {productsData.map((item: products) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
