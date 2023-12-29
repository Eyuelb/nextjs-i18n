"use client";

import { memo } from "react";
import { dir } from "i18next";
import useLocale from "@/i18n/hooks/useLocale";


interface Props extends React.HTMLAttributes<HTMLHtmlElement> {}

const HTML = memo(function HTML(props: Props): JSX.Element {
  const locale = useLocale();
  return <html lang={locale} dir={dir(locale)} {...props} />;
});

export default HTML;
export type { Props as HTMLProps };
