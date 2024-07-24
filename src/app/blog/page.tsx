import React from "react";
import BlogFeature from "../components/BlogFeature";

const posts = [
  {
    title: "Fueling Creativity and Design",
    description:
      "In the world of innovation, ideas spark creativity and drive design. Every invention begins as a simple thought.",
    image: "/assets/blog/blog-1.jpg",
    userImage: "/assets/blog/raushanmehta.jpeg",
    userName: "Raushan mehta",
    href: "#",
  },
  {
    title: "A Journey Through the Green Valley",
    description:
      "Nestled in the heart of nature, the lush green valley is a tranquil haven. Towering mountains and breathtaking landscape.",
    image: "/assets/blog/blog-3.jpg",
    userImage: "/assets/blog/brindasharma.jpeg",
    userName: "Brinda Sharma",
    href: "#",
  },
  {
    title: "The importance of coding in today's world",
    description: "This post could explore the latest trends in coding, such as artificial intelligence, machine learning, & quantum computing.",
    image: "/assets/blog/blog-2.jpg",
    userImage: "/assets/blog/chaiorcode.jpeg",
    userName: "Chai or Code",
    href: "#",
  },
];

const Page: React.FC = () => {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black text-white md:py-[30px] sm:py-24 ">
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
