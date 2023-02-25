import dynamic from 'next/dynamic';
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
      <button
            aria-label="search"
            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </button>
      <div class="py-12">
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
