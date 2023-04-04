import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { usePost } from "../../contexts/post";

export default function Header() {
  // const history = useHistory();
  const [connecting, setConnecting] = useState(false);
  const { connected, select } = useWallet();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  // initialize User here
  const [User, setUser] = useState({
    name: "John Doe",
    avatar: "https://i.pravatar.cc/300",
  });
  

  // const { post, setPost } = usePost();

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              traveller
            </span>
          </a>
          {connected ? (
            <div class="flex items-center lg:order-2">
              <button>
                <a
                  onClick={onConnect}
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  {connecting ? "Connecting" : ""}
                </a>
              </button>
              {/* a vlog button to the left side of the profile */}
              <button>
                <a href="/vlog" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                  Vlog
                </a>
              </button>
              <a
                href="/profile"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                {User.name}
              </a>
              <a href="/profile">
                <img
                  src={User.avatar}
                  class="w-10 h-10 rounded-full object-cover"
                  alt="User Avatar"
                />
              </a>
            </div>
          ) : (
            <div class="flex items-center lg:order-2">
              <button>
                <a
                  onClick={onConnect}
                  class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log in
                </a>
              </button>
              <a
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
