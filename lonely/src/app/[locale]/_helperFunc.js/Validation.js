import * as Yup from "yup";
import { useTranslations } from "next-intl";

export const ValidationType = (controlType, validationObj) => {
  const t = useTranslations();
  if (controlType === "normal") {
    let yupInstance = Yup.string().trim(t("formErr.notOnlySpc"));
    if ((validationObj.type = "normal")) {
      if (validationObj.required) {
        yupInstance = yupInstance.required(t("formErr.reqErr"));
      }
      if (validationObj.max) {
        yupInstance = yupInstance.max(
          validationObj.max,
          `${t("formErr.maxErr")} ${validationObj.max}`,
        );
      }
    }
    return yupInstance;
  }
};
