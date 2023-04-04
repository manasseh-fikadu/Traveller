import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/common/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/common/Footer"), {
  ssr: false,
});
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const router = useRouter();

  // Assuming that the user data is fetched from an API or a database
  const user = {
    name: "John Doe",
    bio: "I love traveling and exploring new places.",
    location: "Los Angeles, USA",
    joinedDate: "January 2021",
  };
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0">
            <img className="h-48 w-48 rounded-full" 
                src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixqx=J2FyZG9uLXNkb3d8MXx8fGVufDB8fHx8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                alt={user.name} 
            />
          </div>
          <div className="mt-6 sm:mt-0 sm:ml-4">
            <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-lg text-gray-600">{user.bio}</p>
            <div className="mt-4 flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-400 mr-2"
              />
              <span className="text-gray-500">{user.location}</span>
            </div>
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-gray-400 mr-2"
              />
              <span className="text-gray-500">Joined {user.joinedDate}</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
          {/* TODO: Display the recent posts of the user */}
        </div>
      </div>
      <Footer />
    </>
  );
}
