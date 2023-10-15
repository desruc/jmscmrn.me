import Image from "next/image";

export function FriendsSection() {
  return (
    <section className="py-2">
      <h2 className="title__orange bg__orange px-2">{`James Cameron's Friends`}</h2>
      <div className="px-2">
        <p className="py-2">
          James Cameron has{" "}
          <span className="text-red-500">{friends.length}</span> friends.
        </p>
        <div className="grid md:grid-cols-3 gap-2">
          {friends.map((friend) => (
            <div key={friend.name} className="flex items-center justify-center">
              <div className="p-2 text-center">
                <a href="#" className="text-center">
                  {friend.name}
                </a>
                <Image
                  className="cursor-pointer"
                  src={friend.image}
                  alt={friend.name}
                  height={160}
                  width={160}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const friends = [
  {
    name: "Alexandra",
    image: "/alex.jpg",
  },
  {
    name: "Flacko",
    image: "/flacko.jpg",
  },
  {
    name: "Odin: God of Zoomies",
    image: "/odin.jpg",
  },
];
