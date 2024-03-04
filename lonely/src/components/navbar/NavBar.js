// import { LANGUAGES } from "@/constants/LangeConst";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ChangeLange from "./ChangeLang";

const NavBar = () => {
  const t = useTranslations("Navigation");

  return (
    <nav className="flex justify-between">
      <div className="flex justify-between " style={{ width: "70%" }}>
        <Link href={"/"}>{t("home")}</Link>
        {/* <p>About</p> */}
        {/* <p>contact</p> */}
      </div>
      <div>
        <ChangeLange />
        {/* <select className="rounded p-1">
          {LANGUAGES.map(({ code, label }) => {
            return (
              <option key={code} value={code}>
                {label}
              </option>
            );
          })}
        </select> */}
      </div>
    </nav>
  );
};

export default NavBar;

// https://dev.to/franklin030601/building-a-multi-language-app-with-react-js-2och
