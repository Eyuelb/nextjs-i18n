"use client";

import useDictionary from "@/i18n/hooks/useDictionary";
import { Language } from "@/i18n/type";


interface Props {
  language: Language;
}

export default function ClientSideComponentExample({ language }: Props) {
  const { t } = useDictionary(language);
  return (
    <div
      style={{
        marginTop: 20,
        padding: 24,
        borderRadius: 2,
        border: "1px solid #000",
      }}
    >
      {t("rhyme")}
    </div>
  );
}

export type { Props as RhymeProps };
