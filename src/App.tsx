import { Component, createSignal, Show } from "solid-js";

import "./index.css";
import logo from "./logo.svg";
import logoWide from "./logo-wide.svg";
import bar from "./assets/bar.svg";

const App: Component = () => {
  return (
    <div class="min-w-[420px]">
      <Header />
      <Hero />
      <WhyHere/>
    </div>
  );
};

const Header: Component = () => {
  return (
    <header class="flex-wrap bg-light-cream bg-opacity-80 backdrop-blur-lg pl-5 md:px-10 py-2 md:py-5 font-haoura fixed w-full z-[120] border-b border-b-transparent">
      <div class="flex items-center justify-between md:max-w-[1015px] md:mx-auto relative ">
        <div class="flex items-center flex-shrink-0">
          <picture class="flex items-center mr-10">
            <source media="(min-width: 768px)" srcset={logoWide} />
            <source media="(max-width: 767px)" srcset={logo} />
            <img src={logoWide} alt="logo" class="fill-current h-7" />
          </picture>
          <ul class="flex space-x-5 lg:space-x-10 text-sm font-semibold text-green-dark max-md:hidden">
            <li>Produk</li>
            <li>Tentang Kami</li>
            <li>Alamat</li>
          </ul>
        </div>
        <div class="flex items-center flex-shrink-0">
          <button class="bg-red-btn hover:bg-red-btn-hover text-sm text-white font-semibold py-2 px-4 rounded-full">
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

const Hero: Component = () => {
  return (
    <div class="flex flex-col items-center justify-start px-5 md:pt-24 bg-light-cream relative pb-40 md:pb-0">
      <h1 class="text-2xl leading-loose mt-28 md:mt-36 md:text-[32px] lg:text-5xl font-golden text-green-dark">
        100% Handmade Qur'an Cover
      </h1>
      <p class="font-haoura text-left text-base font-medium text-green-light mt-5 md:mt-10 lg:mt-20  md:max-w-2xl md:text-center lg:max-w-3xl">
        Enhance your reading experience with a luxurious handcrafted Quran
        cover. Made with utmost care and high quality material, unique and
        beautiful quran cover for the sacred text.
      </p>
      <Quran/>
    </div>
  );
};

const Quran: Component = () => {
  return (
    <div class="relative mt-10 md:mt-28 md:-mb-28 ">
        <div class="flex md:space-x-3 xl:-space-x-5 relative ">
          <div class="w-[211px] md:w-[252px] h-[281px] md:h-[345px] bg-[#90bdfc] border-2 rounded-lg border-white max-md:z-0 max-md:absolute md:flex-1 max-md:top-8 max-md:-right-4 xl:rotate-[10deg]"></div>
          <div class="w-[211px] md:w-[252px] h-[281px] md:h-[345px] bg-[#ff9f9f] border-2 rounded-lg border-white max-md:z-10 max-md:absolute md:flex-1 max-md:top-0 max-md:-left-4 xl:rotate-[10deg]"></div>
          <div class="w-[211px] md:w-[252px] h-[281px] md:h-[345px] bg-[#dd6969] border-2 rounded-lg border-white md:flex-1 max-md:hidden xl:rotate-[10deg]"></div>
          <div class="w-[211px] md:w-[252px] h-[281px] md:h-[345px] bg-[#971010] border-2 rounded-lg border-white md:flex-1 max-lg:hidden xl:rotate-[10deg]"></div>
        </div>
    </div>
  )
}

const WhyHere : Component = () => {
  return (
    <div class="bg-green-light flex-col lg:rounded-xl">
      <div class="h-52">
        1
      </div>
      <div class="h-52">
        2
      </div>
      <div class="h-52">
        3
      </div>
      <div class="h-52">
        4
      </div>
    </div>
  )
}
export default App;

const BoxBetween: Component = () => {
  return (
    <div class="relative">
        <div class="absolute inset-0 grid" aria-hidden="true">
          <div class="bg-light-cream"></div>
          <div class="bg-green-dark"></div>
        </div>
        <div class="isolate max-w-lg mx-auto bg-white p-8 rounded-lg border-2 shadow-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, porro. Accusamus, quidem!
        </div>
      </div>
  )
}