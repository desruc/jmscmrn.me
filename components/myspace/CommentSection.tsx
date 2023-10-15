import { CommentBox } from "./CommentBox";

export function CommentSection() {
  return (
    <section className="py-2">
      <h2 className="title__orange bg__orange px-2">{`James Cameron's Friend Comments`}</h2>
      <div className="px-2">
        <p className="my-2">
          Displaying <span className="text-red-500">{comments.length}</span> of{" "}
          <span className="text-red-500">{comments.length}</span> comments.
        </p>
        {comments.map((comment) => (
          <div key={comment.author} className="flex items-center">
            <CommentBox
              image={comment.image}
              title={comment.author}
              content={comment.content}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const comments = [
  {
    author: "Odin: God of Zoomies",
    image: "/odin.jpg",
    content: "I am the goodest boy.",
  },
];
