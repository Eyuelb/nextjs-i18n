import Link from "@/i18n/components/Link";
import ClientSideComponentExample from "@/i18n/example";
import { LocalePageProps } from "@/i18n/type";

export default function Home({ params }: LocalePageProps) {
  const { locale } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex items-center justify-center min-w-[100px] p-2 rounded-md border-2">
        <Link href="/" locale="de">
          DE
        </Link>
      </div>
      <div>
        <Link href="/" locale="am">
          AM
        </Link>
      </div>
      <div>
        <Link href="/" locale="en">
          EN
        </Link>
      </div>
      <ClientSideComponentExample language={locale} />
    </main>
  );
}
