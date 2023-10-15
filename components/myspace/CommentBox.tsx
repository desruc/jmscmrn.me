import Image from "next/image";

interface Props {
  image: string;
  title: string;
  content: string;
}

export function CommentBox({ image, title, content }: Props) {
  return (
    <div className="flex w-full">
      <div className="text-center bg-[#FF9933] border-r-4 border-b-4 border-white p-2 flex flex-col items-center justify-center">
        <a href="#" className="mb-2">
          {title}
        </a>
        <Image
          src={image}
          alt={title}
          height={160}
          width={160}
          className="my-2"
        />
      </div>
      <div className="bg-[#f9D6B4] grow border-b-4 border-white p-2">
        <p className="mb-2 font-semibold">{getRandomDateString()}</p>
        {content}
      </div>
    </div>
  );
}

// A function to get the date string of a random date in the past 5 years. It must include the time.
function getRandomDateString() {
  const randomDate = new Date(
    Date.now() - Math.floor(Math.random() * 2 * 365 * 24 * 60 * 60 * 1000)
  );

  return randomDate.toLocaleString();
}
