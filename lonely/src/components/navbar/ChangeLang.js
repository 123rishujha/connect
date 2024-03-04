"use client";
import { LANGUAGES } from "@/constants/LangeConst";

const ChangeLang = () => {
  const onLangChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select onChange={onLangChange}>
        {LANGUAGES.map(({ code, label }) => {
          return (
            <option value={code} key={code} className="p-1">
              {label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default ChangeLang;
