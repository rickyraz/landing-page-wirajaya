import { Component, createSignal, Show } from "solid-js";

import "./index.css";
import logo from "./logo.svg";
import logoWide from "./logo-wide.svg";
import bar from "./assets/bar.svg";

const App: Component = () => {
  return (
    <>
      <Header />
    </>
  );
};

const Header: Component = () => {
  return (
    <header class=" flex-wrap bg-light-cream py-2 pl-5 md:px-10 md:py-5 font-haoura">
      <div class="flex items-center justify-between md:max-w-[1015px] md:mx-auto  ">
        <div class="flex items-center flex-shrink-0">
          <picture class="flex items-center mr-10">
            <source media="(min-width: 768px)" srcset={logoWide} />
            <source media="(max-width: 767px)" srcset={logo} />
            <img src={logoWide} alt="logo" class="fill-current h-7 " />
          </picture>
          <ul class="flex space-x-5 font-medium text-green-dark max-md:hidden">
            <li>Produk</li>
            <li>Tentang Kami</li>
            <li>Alamat</li>
          </ul>
        </div>
        <div class="flex items-center flex-shrink-0">
          <button class="bg-red-btn hover:bg-red-btn-hover text-white font-semibold py-2 px-4 rounded-full">
            cek toko
          </button>
          <button class="p-5 md:hidden">
            <img src={bar} alt="bar menu" class="fill-current h-8" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default App;
