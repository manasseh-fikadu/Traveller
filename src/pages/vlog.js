import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/common/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/common/Footer"), {
  ssr: false,
});
import Link from "next/link";

const posts = [
  {
    id: "1",
    title: "My trip to Paris",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2022-01-01",
    slug: "my-trip-to-paris",
  },
  {
    id: "2",
    title: "Exploring the beaches of Thailand",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2022-02-01",
    slug: "exploring-the-beaches-of-thailand",
  },
  {
    id: "3",
    title: "My trip to the Grand Canyon",
    excerpt:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2022-03-01",
    slug: "my-trip-to-the-grand-canyon",
    },
];

export default function Vlog() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Welcome to My Travel Vlog
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Here are some of my latest adventures:
        </p>
        <div className="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover rounded-lg shadow-md"
                  src={`https://source.unsplash.com/random/800x600?sig=${post.id}`}
                  alt={post.title}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  <Link href={`/posts/${post.slug}`} legacyBehavior>
                    <a className="hover:underline">{post.title}</a>
                  </Link>
                </h3>
                <p className="mt-2 text-base text-gray-500">{post.excerpt}</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&ixqx=J2FyZG9uLXNkb3d8MXx8fGVufDB8fHx8&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Avatar"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Doe
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
