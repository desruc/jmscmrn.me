import Image from "next/image";
import { getYearsSinceDate } from "~/utils/getYearsSinceDate";

export function ImageSection() {
  return (
    <section className="mb-4">
      <h1 className="text-2xl mb-2">James Cameron</h1>
      <div className="columns-2">
        <Image src="/me.jpg" alt="James Cameron" height={250} width={250} />
        <div>
          <p className="mb-4 font-semibold">{`":-)"`}</p>
          <div className="mb-4">
            <p>Male</p>
            <p>{getYearsSinceDate(new Date("02-07-1991"))} years old</p>
            <p>Brisbane,</p>
            <p>QUEENSLAND</p>
            <p>Australia</p>
          </div>
          <p>Last login:</p>
          <p>{getCurrentDate()}</p>
        </div>
      </div>
      <p>
        <span className="font-bold">Mood:</span> productive 🤘
      </p>
    </section>
  );
}

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}
