import React from "react";

export type Language = "en" | "de" |"am";

export type ParamsWithLanguage<T extends object = {}> = {
  locale: Language;
} & T;

export interface LocalePageProps {
  params: ParamsWithLanguage;
}
export interface LocaleLayoutProps {
  children: React.ReactNode
  params: ParamsWithLanguage;
}