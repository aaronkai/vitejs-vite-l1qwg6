export default function Nav({ setFormVisible, setCookie }) {
  function handleClick() {
    setFormVisible(true);
    setCookie("TMsLogged", false, { path: "/" });
  }
  return (
    <nav>
      <ul className="flex justify-between">
        <li>1RM Calculator</li>
        <li>About</li>
        <li onClick={() => handleClick()}>Enter One-Rep Maxes</li>
      </ul>
    </nav>
  );
}
