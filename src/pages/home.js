import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/common/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/common/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <div class="py-12">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />
              <button
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ml-10"
              >
                Add a Post
              </button>
            </div>
          </div>
        </div>
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 mt-20">
            <h2 class="text-3xl font-bold text-black-800 md:text-4xl dark:text-black">
              Popular Sites
            </h2>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 pt-20">
            <h2 class="text-3xl font-bold text-black-800 md:text-4xl dark:text-black">
              Popular Sites
            </h2>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
