import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [size, setSize] = useState();
  const getSize = () => {};
  return (
    <section className="bg-svg bg-no-repeat bg-cover">
      {/* header */}
      <header class="flex sticky top-0 justify-between items-center">
        <div class="ml-10 sm:ml-28 cursor-pointer">
          <Image src="/marvel.png" width={200} height={140} />
        </div>
        <nav>
          <ul className="sm:hidden block">
            <li>
              {" "}
              <HiMenu size={68} className="mr-8 cursor-pointer" />
            </li>
          </ul>
          <ul class="hidden sm:flex justify-between items-center last:mr-4">
            <li className="m-2 cursor-pointer hover:border-b-2 border-white">
              Home
            </li>
            <li className="m-2 cursor-pointer hover:border-b-2 border-white">
              Contact
            </li>
            <li className="m-2 cursor-pointer hover:border-b-2 border-white">
              Find Us
            </li>
          </ul>
        </nav>
      </header>
      {/* main */}
      <main className="relative md:py-20 px-10">
        <div className="mb-20 md:flex justify-between items-center">
          <h3 className="break-all selection:bg-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            officia harum veritatis ipsa? Tenetur, minus. Unde minus adipisci id
            ipsum nostrum ad ullam eligendi magni consectetur expedita
            blanditiis veniam incidunt totam distinctio, odit et nisi doloremque
            recusandae enim cupiditate. Enim rem sunt minus quos laudantium modi
            quibusdam cum vel quae asperiores eaque eum dolores odit ducimus
            harum quia officia distinctio molestiae minima, commodi excepturi
            culpa. Nemo est maiores hic beatae nulla labore nisi ullam? Nisi
            atque alias ex saepe nobis, optio, rem, libero doloribus corporis
            ullam ducimus fugit aut. Cum fuga maiores, nemo excepturi modi
            nesciunt id aspernatur eveniet assumenda.
          </h3>
          <img src="/marvel.png" alt="" className="md:w-1/3 ml-4" />
        </div>

        {/* ssvg */}
        <svg
          class="absolute bottom-0 left-0 block w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            class="shape-fill"
          ></path>
        </svg>
      </main>
    </section>
  );
};
export default Header;
