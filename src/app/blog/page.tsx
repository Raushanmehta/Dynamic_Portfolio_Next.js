import React from "react";
import BlogFeature from "../components/BlogFeature";

const posts = [
  {
    title: "Announcing a free plan for small teams",
    description:
      "At Wake, our mission has always been focused on bringing openness.",
    image: "/assets/about-boy.jpg",
    userImage: "/assets/about-2.jpeg",
    userName: "Lauren Waller",
    href: "#",
  },
  {
    title: "How Google Assistant now helps you kids",
    description:
      "Google is constantly updating its consumer AI, Google Assistant",
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

const Page: React.FC = () => {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white md:py-[30px] sm:py-24">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-center font-bold text-5xl tracking-tighter">Everything are Feature</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            pariatur quia reprehenderit ali modi neque.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(({ title, description, image, userImage, userName }) => (
            <BlogFeature
              key={title}
              image={image}
              title={title}
              description={description}
              userImage={userImage}
              userName={userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
