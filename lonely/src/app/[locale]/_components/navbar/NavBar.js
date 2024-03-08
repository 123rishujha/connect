import { useTranslations } from "next-intl";
import Link from "next/link";
import ChangeLange from "./ChangeLang";

const NavBar = () => {
  const t = useTranslations("Navigation");

  return (
    <nav className="flex justify-between border-red">
      <div className="flex justify-between " style={{ width: "70%" }}>
        <Link href={"/"}>{t("home")}</Link>
      </div>
      <div>
        <ChangeLange />
      </div>
    </nav>
  );
};

export default NavBar;
