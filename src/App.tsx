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
      <WhyHere />
    </div>
  );
};

const Header: Component = () => {
  return (
    <header class="fixed z-[120] w-full flex-wrap border-b border-b-transparent bg-light-cream bg-opacity-80 py-2 pl-5 font-haoura backdrop-blur-lg md:px-10 md:py-5">
      <div class="relative flex items-center justify-between md:mx-auto md:max-w-[1015px] ">
        <div class="flex flex-shrink-0 items-center">
          <picture class="mr-10 flex items-center">
            <source media="(min-width: 768px)" srcset={logoWide} />
            <source media="(max-width: 767px)" srcset={logo} />
            <img src={logoWide} alt="logo" class="h-7 fill-current" />
          </picture>
          <ul class="flex space-x-5 text-sm font-semibold text-green-dark lg:space-x-10 max-md:hidden">
            <li>Produk</li>
            <li>Tentang Kami</li>
            <li>Alamat</li>
          </ul>
        </div>
        <div class="flex flex-shrink-0 items-center">
          <button class="rounded-full bg-red-btn py-2 px-4 text-sm font-semibold text-white hover:bg-red-btn-hover">
            cek toko
          </button>
          <button class="p-5 md:hidden">
            <img src={bar} alt="bar menu" class="h-8 fill-current" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero: Component = () => {
  return (
    <div class="relative flex flex-col items-center justify-start bg-light-cream px-5 pb-40 md:pt-24 md:pb-0">
      <h1 class="mt-28 font-golden text-2xl leading-loose text-green-dark md:mt-36 md:text-[32px] lg:text-5xl">
        100% Handmade Qur'an Cover
      </h1>
      <p class="mt-5 text-left font-haoura text-base font-medium text-green-light md:mt-10 md:max-w-2xl  md:text-center lg:mt-20 lg:max-w-3xl">
        Enhance your reading experience with a luxurious handcrafted Quran
        cover. Made with utmost care and high quality material, unique and
        beautiful quran cover for the sacred text.
      </p>
      <Quran />
    </div>
  );
};

const Quran: Component = () => {
  return (
    <div class="relative mt-10 md:mt-28 md:-mb-28 ">
      <div class="relative flex md:space-x-3 xl:-space-x-5 ">
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#90bdfc] md:h-[345px]  md:w-[252px] xl:rotate-[10deg] max-md:absolute max-md:top-8 max-md:-right-4 max-md:z-0"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#ff9f9f] md:h-[345px] md:w-[252px] md:flex-1 xl:rotate-[10deg] max-md:absolute max-md:top-0 max-md:-left-4 max-md:z-10"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#dd6969] md:h-[345px] md:w-[252px] xl:rotate-[10deg] max-md:hidden"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#971010] md:h-[345px] md:w-[252px] xl:rotate-[10deg] max-lg:hidden"></div>
      </div>
    </div>
  );
};

const WhyHere: Component = () => {
  return (
    <div class="flex-col bg-green-light lg:rounded-xl">
      <div class="h-52">1</div>
      <div class="h-52">2</div>
      <div class="h-52">3</div>
      <div class="h-52">4</div>
    </div>
  );
};
export default App;

const BoxBetween: Component = () => {
  return (
    <div class="relative">
      <div class="absolute inset-0 grid" aria-hidden="true">
        <div class="bg-light-cream"></div>
        <div class="bg-green-dark"></div>
      </div>
      <div class="isolate mx-auto max-w-lg rounded-lg border-2 bg-white p-8 shadow-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, porro.
        Accusamus, quidem!
      </div>
    </div>
  );
};
