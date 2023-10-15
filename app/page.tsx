import { BlurbsSection } from "~/components/myspace/BlurbsSection";
import { CommentSection } from "~/components/myspace/CommentSection";
import ContactBox from "~/components/myspace/ContactBox";
import { FriendsSection } from "~/components/myspace/FriendsSection";
import { ImageSection } from "~/components/myspace/ImageSection";
import { InterestsTable } from "~/components/myspace/InterestsTable";
import { MyspaceNavigation } from "~/components/myspace/MyspaceNavigation";
import { UrlBox } from "~/components/myspace/UrlBox";

import "./myspace.css";

export default function MySpace() {
  return (
    <div>
      <MyspaceNavigation />
      <main className="container mx-auto bg-white pt-4">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left side */}
          <div className="lg:basis-[30%] lg:grow-0 lg:shrink-0 px-2">
            <ImageSection />
            <ContactBox />
            <UrlBox />
            <InterestsTable />
          </div>
          {/* Right side */}
          <div className="grow p-2 myspace">
            <section className="flex justify-center text-center items-center h-[100px] border-black border-4 font-bold text-xl mb-4">
              James Cameron is in your extended network.
            </section>
            <BlurbsSection />
            <FriendsSection />
            <CommentSection />
          </div>
        </div>
      </main>
    </div>
  );
}
