import {
  Component,
  createEffect,
  createSignal,
  mergeProps,
  Show,
} from "solid-js";

import { stagger, inView } from "motion";
import { Motion, Presence } from "@motionone/solid";

import "./index.css";
import logo from "./logo.svg";
import logoWide from "./logo-wide.svg";

import wa from "./assets/wa.svg";
import location from "./assets/location.svg";
import Diamond from "./assets/diamond.svg";
import bar from "./assets/bar.svg";

const App: Component = () => {
  return (
    <div class="overflow-x-hidden">
      <Header />
      <Hero />
      <WhyHere />
      <Category />
      <About />
      <Footer />
    </div>
  );
};

// -- Header --

const Header: Component = () => {
  const handleClick = (event: { target: any; preventDefault: () => void }) => {
    // Get the target element that was clicked
    const target = event.target;

    // Make sure the target is a link element
    if (target.tagName === "A") {
      // Get the href attribute of the link
      const href = target.getAttribute("href");

      // Make sure the href is a valid anchor link
      if (href.startsWith("#")) {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the element corresponding to the anchor link
        const element = document.querySelector(href);

        // Scroll to the element smoothly
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isMenuActive, setMenuActive] = createSignal(false);
  const toggleMenu = () => setMenuActive((isMenuActive) => !isMenuActive);

  createEffect(() => {
    const body = document.body ?? document.querySelector("body");
    if (isMenuActive()) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isMenuActive]);

  return (
    <header class="fixed z-[120] w-full flex-wrap border-b border-b-white bg-light-cream bg-opacity-[85] py-1 font-haoura backdrop-blur-xl md:px-10 md:py-5">
      <Motion.nav
        class="relative flex items-center justify-between md:mx-auto md:max-w-[1015px]"
        onClick={handleClick}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.08 } }}
      >
        <div class="flex flex-shrink-0 items-center pl-5">
          <a href="/">
            <picture class="mr-10 flex items-center ">
              <source media="(min-width: 768px)" srcset={logoWide} />
              <source media="(max-width: 767px)" srcset={logo} />
              <img src={logoWide} alt="logo" class="h-7 fill-current" />
            </picture>
          </a>
          <ul class="flex space-x-5 text-sm font-semibold text-green-dark lg:space-x-10 max-md:hidden">
            <li>
              <a href="#kelebihan">Kelebihan</a>
            </li>
            <li>
              <a href="#kategori">Kategori Al-Qur'an</a>
            </li>
            <li>
              <a href="#about">Tentang Kami</a>
            </li>
            <li>
              <a href="#alamat">Lokasi & Kontak</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-shrink-0 items-center">
          <button class="rounded-full bg-red-btn py-2 px-4 text-sm font-semibold text-white hover:bg-red-btn-hover">
            cek toko
          </button>
          <button
            class="p-5 hover:bg-[#cacac2] focus:bg-light-cream active:bg-light-cream md:hidden"
            onclick={toggleMenu}
          >
            <img src={bar} alt="bar menu" class="h-8 fill-current" />
          </button>
        </div>
      </Motion.nav>
      <div class="z-50 bg-[#efefe7]">
        <Presence>
          <Show when={isMenuActive()}>
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.08 } }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <ul class="text-center text-base font-semibold text-green-dark ">
                <a href="#kelebihan" class="px-20" onclick={toggleMenu}>
                  <li class="bg-[#efefe7] py-3 hover:bg-[#cacac2] focus:bg-green-light">
                    Kelebihan
                  </li>
                </a>
                <a href="#kategori" class="px-20" onclick={toggleMenu}>
                  <li class="bg-[#efefe7] py-3 hover:bg-[#cacac2]">
                    Kategori Al-Qur'an
                  </li>
                </a>
                <a href="#about" class="px-20" onclick={toggleMenu}>
                  <li class="bg-[#efefe7] py-3 hover:bg-[#cacac2]">
                    Tentang kami
                  </li>
                </a>
                <a href="#alamat" class="px-20" onclick={toggleMenu}>
                  <li class="bg-[#efefe7] py-3 hover:bg-[#cacac2]">
                    Lokasi & Kontak
                  </li>
                </a>
              </ul>
            </Motion.div>
          </Show>
        </Presence>
      </div>
    </header>
  );
};

// -- Hero --

const Hero: Component = () => {
  return (
    <div class="relative flex flex-col items-center justify-start bg-light-cream px-5 pb-40 md:px-10 md:pt-24 md:pb-0">
      <Motion.h1
        class="mt-32 font-golden text-2xl leading-loose text-green-dark md:mt-24 md:text-[32px] lg:text-[46px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        100% Handmade Qur'an Cover
      </Motion.h1>
      <Motion.p
        class="mt-5 text-left font-haoura text-base font-medium text-green-light md:mt-10 md:max-w-2xl  md:text-center lg:mt-16 lg:max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        Enhance your reading experience with a luxurious handcrafted Quran
        cover. Made with utmost care and high quality material, unique and
        beautiful quran cover for the sacred text.
      </Motion.p>
      <Quran />
    </div>
  );
};

const Quran: Component = () => {
  return (
    <div class="relative mt-10 md:mt-20 md:-mb-40 ">
      <div class="relative flex md:-space-x-5 xl:-space-x-5">
        <Motion.div
          class="h-[281px] w-[211px] bg-transparent md:h-[345px] md:w-[252px] max-md:absolute max-md:top-8 max-md:-right-6 max-md:z-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
        >
          <img
            src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Hero/ungu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672975788176"
            alt="quran custom ungu"
            loading="lazy"
            class="h-full w-full object-cover shadow-sm contrast-125"
          />
        </Motion.div>
        <Motion.div
          class="h-[281px] w-[211px] md:h-[345px] md:w-[252px] max-md:absolute max-md:top-0 max-md:-left-6 max-md:z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.24 } }}
        >
          <img
            src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Hero/fanta.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672976550941"
            alt="quran custom merah"
            loading="lazy"
            class="h-full w-full object-cover shadow-sm"
          />
        </Motion.div>
        <Motion.div
          class="h-[281px] w-[211px] md:h-[345px] md:w-[252px] max-md:hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.34 } }}
        >
          <img
            src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Hero/hijau-tua.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672975875140"
            alt="quran custom cover hijau tua"
            loading="lazy"
            class="h-full w-full object-cover shadow-sm "
          />
        </Motion.div>
        <Motion.div
          class="h-[281px] w-[211px] md:h-[345px] md:w-[252px] max-lg:hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.44 } }}
        >
          <img
            src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Hero/emas.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672976745320"
            alt="quran custom cover emas"
            loading="lazy"
            class="h-full w-full object-cover shadow-sm "
          />
        </Motion.div>
      </div>
    </div>
  );
};

const WhyHere: Component = () => {
  return (
    <section
      class="flex-col bg-green-light px-5 pb-20 pt-48 font-haoura lg:rounded-xl "
      id="kelebihan"
    >
      <h2 class="text-2xl font-extrabold text-white md:text-center md:text-3xl">
        Kelebihan al-qur`an kami dibanding penerbit lain
      </h2>
      <p class="mt-5 font-normal text-white  md:text-center">
        inilah beberapa alasan mengapa produk kami merupakan pilihan terbaik
        untuk Anda
      </p>
      <div class="mt-10 space-y-7">
        <Points
          titles="Proses pembuatan yang berkualitas"
          desc="Alqur'an kami melalui proses tahap yang panjang, setiap langkah dilakukan dengan hati-hati oleh tim kami, menghasilkan produk terbaik yang tahan lama"
        />
        <Points
          titles="Tampilan Unik"
          desc="Sampul quran kami terbuat dari bahan berkualitas dengan tampilan yang unik dan menarik. Kami menggunakan desain terbaik di pasaran untuk menciptakan produk eksklusif dan memikat"
        />
        <Points
          titles="Kualitas terjamin"
          desc="Kami paham betapa pentingnya kualitas alquran sebagai kitab suci, bukan hanya sampul tapi juga isinya. Kami berkomitmen meminimalkan kekurangan dalam produksi dengan pengetatan kualitas kontrol (QC)."
        />
        <Points
          titles="Terverifikasi oleh lembaga Agama"
          desc="Kami merupakan produsen al quran yang resmi terverifikasi oleh lembaga agama negara, Ini berarti bahwa al-quran kami telah lolos uji keaslian & standardisasi dari pihak berwenang"
        />
      </div>
    </section>
  );
};

const Points: Component = (props) => {
  const points = mergeProps(
    { titles: "Hi", desc: "John", url: "#./", alt: "alt" },
    props
  );

  return (
    <div class="max-w-[825px] rounded-lg bg-light-cream py-5 px-5 md:mx-auto md:py-9 md:px-9">
      <div class=" md:flex ">
        <div class="md:mr-8 lg:mr-16">
          <div class="flex ">
            <img src={Diamond} alt="diamond" class="mr-5" />
            <h3 class="text-xl font-bold text-green-light">{points.titles}</h3>
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
    <section
      class="relative bg-light-cream px-5 pt-10 pb-20 md:pb-32"
      id="kategori"
    >
      <div class="flex flex-col justify-center font-haoura">
        <h2 class="text-2xl font-extrabold text-green-dark md:text-center md:text-3xl">
          Kategori Al-Qur'an
        </h2>
        <p class="mt-5 font-normal text-green-light md:text-center">
          beberapa macam kategori al-qur'an yang bisa dipilih
        </p>
      </div>
      <div class="mt-10 space-y-5 md:mx-auto md:flex md:max-w-[950px] md:justify-between md:space-y-0 lg:space-x-7">
        <div class="flex-col">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img
              src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Category/hitam.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672975464396"
              alt="al-mukhtar-hitam"
              class="h-56 md:h-72 "
              loading="lazy"
            />
          </div>
          <p class="mt-5 text-xl font-bold text-green-light md:text-center">
            Al-Mukhtar
          </p>
        </div>
        <div class="flex-col">
          <div class=" flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img
              src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Category/pink.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672975499496"
              alt="lope-pink"
              class="h-56 contrast-125 md:h-72"
              loading="lazy"
            />
          </div>
          <p class="mt-5 text-xl font-bold text-green-light md:text-center">
            Lope
          </p>
        </div>
        <div class="flex-col">
          <div class=" flex h-full w-full items-center justify-center rounded-lg bg-[#efefe7] shadow-sm">
            <img
              src="https://ik.imagekit.io/w9raj61y944g/Landing-Page/Category/syam-emas-merah.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673057214098"
              alt="syamsinoer-merah-emas"
              class="h-56 md:h-72 md:px-10"
              loading="lazy"
            />
          </div>
          <p class=" mt-5 text-xl font-bold text-green-light md:text-center">
            Syamsinoer
          </p>
        </div>
      </div>
    </section>
  );
};

const About: Component = () => {
  return (
    <div
      class="flex-col bg-green-light px-5 py-12 font-haoura md:px-5 lg:rounded-tl-xl lg:rounded-tr-xl"
      id="about"
    >
      <section>
        <h2 class="text-2xl font-extrabold text-white md:text-center md:text-3xl">
          Tentang Kami
        </h2>
        <div class="max-w-[825px] md:mx-auto">
          <div class="mt-5 space-y-5 text-white md:text-center">
            <p>
              Perusahaan kami, PT. GG Wirajaya, adalah perusahaan yang bergerak
              di bidang produksi quran <br class="max-md:hidden" /> cover
              handmade dan terletak di Cinere, Depok.
            </p>
          </div>
          <div class="mt-5 space-y-5 md:flex md:space-y-0 md:space-x-5">
            <div class="h-[202px] w-full rounded-lg bg-green-dark"></div>
            <div class="h-[202px] w-full rounded-lg bg-green-dark"></div>
          </div>
        </div>
      </section>
      <Location />
    </div>
  );
};

const Location: Component = () => {
  return (
    <section
      class="mt-10 max-w-[825px] shrink font-haoura md:mx-auto md:px-0"
      id="alamat"
    >
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
      <div class="mx-auto mt-5 flex space-x-5 md:justify-center">
        <a href="https://goo.gl/maps/a59KtqJKnEBFiByT9" target="blank">
          <button class="flex items-center justify-center rounded border-[3px] border-[#005C49] bg-green-light px-4 py-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-green-dark md:py-[10px] md:px-7">
            <img src={location} alt="wa" class="h-5" />
            <span class="ml-2 font-semibold text-white">Google Map</span>
          </button>
        </a>
        <button class="flex items-center justify-center rounded bg-white px-4 py-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-green-dark hover:text-white md:px-7 md:py-[10px]">
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
        <a class="text-white" href="/`">
          PT.GG Wirajaya
        </a>
      </div>
    </footer>
  );
};

export default App;
