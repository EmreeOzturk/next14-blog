import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Welcome to my Blog
      </h1>
      <p className="max-w-[750px]  text-center leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit.adipisicing elit.adipisicing elit.adipisicing elit. Dolore dolorem nemo suscipit mollitia blanditiis reiciendis nostrum aspernatur tenetur in officia.
      </p>
    </div>

  );
}
