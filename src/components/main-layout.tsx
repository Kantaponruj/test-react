import { MainNavbar } from "@/components/main-navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />

      <section className="min-h-screen mx-auto w-full py-8 px-6 ">
        {children}
      </section>
    </>
  );
}
