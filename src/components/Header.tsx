interface Props {
  title: string;
}

export default function Header({ title }:Props) {
  return (
    <header className="">
      <h1 className="text-5xl my-4 text-yellow-200">{title}</h1>
    </header>
  );
}
