export function InterestsTable() {
  return (
    <section className="border__lightblue">
      <h3 className="!text-white px-2 bg__lightblue">
        James Cameron{`'`}s Interests
      </h3>
      <table cellSpacing={3} cellPadding={3} className="border-separate">
        <tbody>
          <TableRow title="Music" content="Metal, Electronic" />
          <TableRow title="Movies" content="Terminator 2" />
        </tbody>
      </table>
    </section>
  );
}

interface TableRowProps {
  title: string;
  content: string | React.ReactElement;
}

function TableRow({ title, content }: TableRowProps) {
  return (
    <tr>
      <td className="!bg-[#BFDBFE] pr-8 font-bold text-[#1D4ED8]">{title}</td>
      <td className="!bg-[#DBEAFE] w-full">{content}</td>
    </tr>
  );
}
