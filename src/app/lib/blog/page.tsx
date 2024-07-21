import React from "react";
import Image from "next/image";

interface BlogPost {
  title: string;
  description: string;
  image: string;
  userImage: string;
  userName: string;
  href: string;
}

interface BlogCardsProps {
  posts: BlogPost[];
}

const posts: BlogPost[] = [
  {
    title: "Announcing a free plan for small teams",
    description: "At Wake, our mission has always been focused on bringing openness.",
    image: "/assets/about-boy.jpg",
    userImage: "/assets/about-2.jpeg",
    userName: "Lauren Waller",
    href: "#",
  },
  {
    title: "How Google Assistant now helps you record stories for kids",
    description: "Google is constantly updating its consumer AI, Google Assistant",
    image: "/assets/about-boy.jpg",
    userImage: "/assets/about-2.jpeg",
    userName: "Aaron Laruser",
    href: "#",
  },
  {
    title: "Front accounts - let's work together",
    description: "Are you an accountant? Are you a company formation advisor?",
    image: "/assets/about-boy.jpg",
    userImage: "/assets/about-2.jpeg",
    userName: "Lauren Waller",
    href: "#",
  },
];

const Page: React.FC<BlogCardsProps> = ({ posts }) => {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black/[0.96] ">
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 lg:mx-20">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Our Blogs
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          See how game-changing companies are making the most of every
          engagement with Preline.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          
          <a
            key={index}
            className="group flex flex-col h-full border border-purple-500 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-4 dark:border-purple-500 dark:hover:border-transparent dark:hover:shadow-white/10"
            href={post.href}
          >
            <div className=" aspect-w-16 aspect-h-11">
              <Image
                className="w-full object-cover rounded-xl"
                src={post.image}
                alt="Image Description"
                objectFit="cover"
                height={100}
                width={100}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {post.title}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">
                {post.description}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <Image
                className="rounded-full"
                src={post.userImage}
                alt="Image Description"
                width={32}
                height={32}
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                  By {post.userName}
                </h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

const Pages: React.FC = () => {
  return <Page posts={posts} />;
};

export default Pages;
