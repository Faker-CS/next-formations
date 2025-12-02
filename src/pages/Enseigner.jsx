import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Enseigner() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col gap-4 p-8 bg-gray-900 min-h-screen">
        <h1 className="text-white text-4xl">Enseigner chez nous</h1>
        <p className="text-white">Content for Enseigner chez nous page.</p>
      </div>
      <Footer />
    </>
  );
}