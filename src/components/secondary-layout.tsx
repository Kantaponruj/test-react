import { SecondaryNavbar } from "./secondary-navbar";

export default function SecondaryLayout({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryNavbar name={name} />

      <section className="min-h-screen mx-auto w-full py-8 px-6 ">
        {children}
      </section>
    </>
  );
}
