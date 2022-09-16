export default function Nav({ setFormVisible, setCookie }) {
  function handleClick() {
    setFormVisible(true);
    setCookie("TMsLogged", false, { path: "/" });
  }
  return (
    <nav>
      <ul className="flex justify-between">
        <li className="font-normal text-xl text-yellow-200">1RM Calculator</li>
        <li className="font-normal text-xl text-yellow-200">About</li>
        <li
          className="font-normal text-xl text-yellow-200"
          onClick={() => handleClick()}
        >
          1-Rep Maxes
        </li>
      </ul>
    </nav>
  );
}
