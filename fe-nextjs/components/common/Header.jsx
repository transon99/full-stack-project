import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import NavBar from './NavBar';

export function Header() {
  return (
    <>
      <header className="bg-red-600">
        <div className="h-[70px] p-3 flex justify-between items-center container">
          <Link href="/" passHref>
            <p className="text-2xl font-bold text-white">MYBOSS PC</p>
          </Link>
          <div className="w-[60%] h-full">
            <form action="" method="get" className="w-full h-full relative">
              <input
                type="text"
                name=""
                id="search"
                autocomplete="off"
                placeholder="Nhập vào sản phẩm cần tìm..."
                className="border-[#d9d9d9] border-solid rounded-[20px] border-[1px] w-full h-full pl-5"
              />
              <button className="absolute top-0 right-0 w-[15%] h-[46px] rounded-[20px] bg-[#ffe300] flex justify-center items-center">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <MdShoppingCart className="text-white w-8 h-8" />
            <p className="text-white text-base">Giỏ hàng</p>
          </div>
        </div>
      </header>
      <NavBar />
    </>
  );
}
