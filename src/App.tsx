import { Component, mergeProps } from "solid-js";
import "./index.css";
import logo from "./logo.svg";
import logoWide from "./logo-wide.svg";

import wa from "./assets/wa.svg";
import location from "./assets/location.svg";
import Diamond from "./assets/diamond.svg";
import bar from "./assets/bar.svg";

import hitam from "./assets/img/hitam.webp";
import merah from "./assets/img/merah.webp";
import pink from "./assets/img/pink.webp";

const App: Component = () => {
  return (
    <div class=" overflow-x-hidden">
      <Header />
      <Hero />
      <WhyHere />
      <Category />
      <About />
      <Footer />
    </div>
  );
};

const Header: Component = () => {
  return (
    <header class="fixed z-[120] w-full flex-wrap border-b border-b-white bg-light-cream bg-opacity-[85] py-2 pl-5 font-haoura backdrop-blur-xl md:px-10 md:py-5">
      <nav class="relative flex items-center justify-between md:mx-auto md:max-w-[1015px]">
        <div class="flex flex-shrink-0 items-center">
          <picture class="mr-10 flex items-center">
            <source media="(min-width: 768px)" srcset={logoWide} />
            <source media="(max-width: 767px)" srcset={logo} />
            <img src={logoWide} alt="logo" class="h-7 fill-current" />
          </picture>
          <ul class="flex space-x-5 text-sm font-semibold text-green-dark lg:space-x-10 max-md:hidden">
            <li>Produk</li>
            <li>Kategori Al-Qur'an</li>
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
      </nav>
    </header>
  );
};

const Hero: Component = () => {
  return (
    <div class="relative flex flex-col items-center justify-start bg-light-cream px-5 pb-40 md:px-10 md:pt-24 md:pb-0">
      <h1 class="mt-32 font-golden text-2xl leading-loose text-green-dark md:mt-24 md:text-[32px] lg:text-5xl">
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
    <div class="relative mt-10 md:mt-24 md:-mb-28 ">
      <div class="relative flex md:space-x-3 xl:-space-x-5 ">
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#90bdfc] md:h-[345px] md:w-[252px] xl:rotate-10der max-md:absolute max-md:top-8 max-md:-right-6 max-md:z-0"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#ff9f9f] md:h-[345px] md:w-[252px] xl:rotate-10der max-md:absolute max-md:top-0 max-md:-left-6 max-md:z-10"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#dd6969] md:h-[345px] md:w-[252px] xl:rotate-10der max-md:hidden"></div>
        <div class="h-[281px] w-[211px] rounded-lg border-2 border-white bg-[#971010] md:h-[345px] md:w-[252px] xl:rotate-10der max-lg:hidden"></div>
      </div>
    </div>
  );
};

const WhyHere: Component = () => {
  return (
    <section class="flex-col bg-green-light px-5 pb-20 pt-48 font-haoura lg:rounded-xl ">
      <h2 class="text-2xl font-extrabold text-white md:text-center md:text-3xl">
        Kelebihan al-qur`an kami dibanding penerbit lain
      </h2>
      <p class="mt-5 font-normal text-white  md:text-center">
        inilah beberapa alasan mengapa produk kami merupakan pilihan terbaik
        untuk Anda
      </p>
      <div class="mt-10 space-y-7">
        <Points
          title="Proses pembuatan yang berkualitas"
          desc="Alqur'an kami melalui proses tahap yang panjang, setiap langkah dilakukan dengan hati-hati oleh tim kami, menghasilkan produk terbaik yang tahan lama"
        />
        <Points
          title="Tampilan Unik"
          desc="Sampul quran kami terbuat dari bahan berkualitas dengan tampilan yang unik dan menarik. Kami menggunakan desain terbaik di pasaran untuk menciptakan produk eksklusif dan memikat"
        />
        <Points
          title="Kualitas terjamin"
          desc="Kami paham betapa pentingnya kualitas alquran sebagai kitab suci, bukan hanya sampul tapi juga isinya. Kami berkomitmen meminimalkan kekurangan dalam produksi dengan pengetatan kualitas kontrol (QC)."
        />
        <Points
          title="Terverifikasi oleh lembaga Agama"
          desc="Kami merupakan produsen al quran yang resmi terverifikasi oleh lembaga agama negara, Ini berarti bahwa al-quran kami telah lolos uji keaslian & standardisasi dari pihak berwenang"
        />
      </div>
    </section>
  );
};

const Points: Component = (props) => {
  const points = mergeProps(
    { title: "Hi", desc: "John", url: "#./", alt: "alt" },
    props
  );

  return (
    <div class="max-w-[825px] rounded-lg bg-light-cream py-5 px-5 md:mx-auto md:py-9 md:px-9">
      <div class=" md:flex ">
        <div class="md:mr-8 lg:mr-16">
          <div class="flex ">
            <img src={Diamond} alt="diamond" class="mr-5" />
            <h3 class="text-xl font-bold text-green-light">{points.title}</h3>
          </div>
          <p class="mt-5 text-sm text-green-dark md:text-base">{points.desc}</p>
        </div>
        <div class="mt-5 h-[202px] w-full rounded-lg bg-green-dark md:mt-0 md:min-w-[335px]">
          <img src={points.url} alt="" />
        </div>
      </div>
    </div>
  );
};

const Category: Component = () => {
  return (
    <section class="relative bg-light-cream px-5 pt-10">
      <div class="flex flex-col justify-center font-haoura">
        <h2 class="text-2xl font-extrabold text-green-dark md:text-center md:text-3xl">
          Kategori Al-Qur'an
        </h2>
        <p class="mt-5 font-normal text-green-light md:text-center">
          beberapa macam kategori al-qur'an yang bisa dipilih
        </p>
      </div>
      <div class="mt-10 space-y-5 md:mx-auto md:flex md:max-w-[850px] md:space-y-0 md:space-x-5 lg:space-x-7">
        <div class="flex-col">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img src={hitam} alt="al-mukhtar-hitam" class="h-56 md:h-72 " />
          </div>
          <p class="mt-5 text-xl font-bold text-green-light md:text-center">
            Al-Mukhtar
          </p>
        </div>
        <div class="flex-col">
          <div class=" flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img src={pink} alt="lope-pink" class=" h-56  md:h-72" />
          </div>
          <p class="mt-5 text-xl font-bold text-green-light md:text-center">
            Lope
          </p>
        </div>
        <div class="flex-col">
          <div class=" flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img src={merah} alt="samsinoer-merah-emas" class=" h-56 md:h-72" />
          </div>
          <p class=" mt-5 text-xl font-bold text-green-light md:text-center">
            Samsinoer
          </p>
        </div>
      </div>
    </section>
  );
};

const About: Component = () => {
  return (
    <div class="mt-20 flex-col bg-green-light px-5 py-10 font-haoura md:px-5 lg:rounded-tl-xl lg:rounded-tr-xl">
      <section>
        <h2 class="text-2xl font-extrabold text-white md:text-center md:text-3xl">
          Tentang Kami
        </h2>
        <div class="max-w-[825px] md:mx-auto">
          <div class="mt-5 space-y-5 text-white md:text-center">
            <p>
              Perusahaan kami, PT. GG Wirajaya, adalah perusahaan yang bergerak
              di bidang produksi quran <br /> cover handmade dan terletak di
              Cinere, Depok.
            </p>
          </div>
          <div class="mt-5 space-y-5 md:flex md:space-y-0 md:space-x-5">
            <div class="h-[202px] w-full rounded-lg bg-green-dark"></div>
            <div class="h-[202px] w-full rounded-lg bg-green-dark"></div>
          </div>
        </div>
      </section>
      <Lokasi />
    </div>
  );
};

const Lokasi: Component = () => {
  return (
    <section class="mt-10 max-w-[825px] font-haoura md:mx-auto md:px-0">
      <h2 class="text-2xl font-extrabold text-white md:text-center md:text-3xl">
        Lokasi & Kontak
      </h2>
      <div class="mt-5 text-white md:text-center">
        <p>
          <span class="font-bold">Alamat </span>: Cinere Terrace Commercial
          Block JA, N0.5, Rt/Rw: 007/005, <br class="max-md:hidden" />
          Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 16513
        </p>
      </div>
      <div class="mx-auto mt-5 flex md:justify-center md:space-x-5">
        <a href="https://goo.gl/maps/a59KtqJKnEBFiByT9" target="blank">
          <button class="flex items-center justify-center rounded border-[3px] border-[#005C49] bg-green-light px-5 py-2 md:py-[10px] md:px-7">
            <img src={location} alt="wa" class="h-5" />
            <span class="ml-2 font-semibold text-white">Google Map</span>
          </button>
        </a>
        <button class="ml-5 flex items-center justify-center rounded bg-white px-6 py-2 md:px-7 md:py-[10px]">
          <img src={wa} alt="wa" class="h-5" />
          <span class="ml-2 font-semibold">Whatsapp</span>
        </button>
      </div>
    </section>
  );
};

const Footer: Component = () => {
  return (
    <footer class="bg-green-dark text-center lg:text-left">
      <div
        class="p-4 text-center text-white"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2023 Copyright: <span> </span>
        <a class="text-white" href="https://tailwind-elements.com/">
          PT.GG Wirajaya
        </a>
      </div>
    </footer>
  );
};

export default App;
