"use client";
import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { LANGUAGES } from "../../_constants/LangeConst";
// import { router } from "next/navigation";

const ChangeLang = () => {
  const [isPening, startTransition] = useTransition();
  const router = useRouter();
  const activeLlocaleLang = useLocale();

  const onLangChange = (event) => {
    // console.log(event.target.value);
    let langChoosed = event.target.value;
    startTransition(() => {
      router.replace(`/${langChoosed}`);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        onChange={onLangChange}
        defaultValue={activeLlocaleLang}
        disabled={isPening}
      >
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
