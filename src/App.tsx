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

// const LoginBtn: Component = () => {
//   const [loggedIn, setLoggedIn] = createSignal(false);
//   const toggle = () => setLoggedIn(!loggedIn())

//   return (
//     <Show
//       when={loggedIn()}
//       fallback={<button onClick={toggle}>Log in</button>}
//     >
//       <button onClick={toggle}>Log out</button>
//     </Show>
//   );
// }

//  <img src={logo} alt="logo" class="fill-current h-11 w-11 mr-2" />

const Header: Component = () => {
  return (
    <header class="flex items-center justify-between flex-wrap bg-light-cream py-2 pl-5 md:pl-8 md:pr-8 md:py-5">
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
    </header>
  );
};

export default App;
