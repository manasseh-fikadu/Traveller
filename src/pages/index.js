import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveller</title>
        <meta name="description" content="Your Travel Guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* create a beautiful nav bar containing the logo about and sign up and login links */}
        {/* use tailwindcss */}
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-10" />
            <h1 className="text-2xl font-bold ml-2">Traveller</h1>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-lg font-bold mr-4">
              About
            </a>
            <a href="#" className="text-lg font-bold mr-4">
              Sign Up
            </a>
            <a href="#" className="text-lg font-bold">
              Login
            </a>
          </div>
        </div>

        {/* create a hero section */}
        {/* use tailwindcss */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">Traveller</h1>
          <p className="text-2xl font-bold">Your Travel Guide</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
            Get Started
          </button>
        </div>

        {/* create a top destinations section */}
        {/* use tailwindcss */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">Top Destinations</h1>
          <div className="flex mt-4">
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/paris.jpg" alt="paris" className="h-40" />
              <p className="font-bold">Paris</p>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/london.jpg" alt="london" className="h-40" />
              <p className="font-bold">London</p>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/newyork.jpg" alt="newyork" className="h-40" />
              <p className="font-bold">New York</p>
            </div>
          </div>
        </div>

        {/* create a top attractions section */}
        {/* use tailwindcss */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">Top Attractions</h1>
          <div className="flex mt-4">
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/eiffel.jpg" alt="eiffel" className="h-40" />
              <p className="font-bold">Eiffel Tower</p>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/bigben.jpg" alt="bigben" className="h-40" />
              <p className="font-bold">Big Ben</p>
            </div>
            <div className="flex flex-col items-center justify-center mr-4">
              <img src="/empire.jpg" alt="empire" className="h-40" />
              <p className="font-bold">Empire State Building</p>
            </div>
          </div>
        </div>

        {/* create a footer section */}
        {/* use tailwindcss */}
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">Traveller</h1>
          <p className="text-2xl font-bold">Your Travel Guide</p>
          <div className="flex mt-4">
            <a href="#" className="text-lg font-bold mr-4">
              About
            </a>
            <a href="#" className="text-lg font-bold mr-4">
              Sign Up
            </a>
            <a href="#" className="text-lg font-bold">
              Login
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
