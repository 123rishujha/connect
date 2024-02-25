import { LANGUAGES } from "@/constants/LangeConst";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex justify-between " style={{ width: "70%" }}>
        <p>Home</p>
        <p>About</p>
        <p>contact</p>
      </div>
      <div>
        <select className="rounded p-1">
          {LANGUAGES.map(({ code, label }) => {
            return (
              <option key={code} value={code}>
                {label}
              </option>
            );
          })}
        </select>
      </div>
    </nav>
  );
};

export default NavBar;

// https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och
