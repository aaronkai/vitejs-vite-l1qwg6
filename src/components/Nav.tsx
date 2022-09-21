interface Props {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  //ToDo: fix typing
  setCookie: any;
}

export default function Nav({ setFormVisible, setCookie }: Props) {
  function handleClick() {
    setFormVisible(true);
    setCookie("TMsLogged", false, { path: "/" });
  }
  return (
    <nav>
      <ul className="grid auto-rows-auto  ">
        <li
          className="font-normal text-lg text-slate-400 text-right"
          onClick={() => handleClick()}
        >
          Enter 1-Rep Maxes
        </li>
        <li className="font-normal text-lg text-slate-400 text-right">
          1RM Calculator
        </li>
        <li className="font-normal text-lg text-slate-400 text-right">About</li>
      </ul>
    </nav>
  );
}
