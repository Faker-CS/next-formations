import Categories from "@/components/categories/categories";
import Button from "@/components/common/button/Button";
import Card from "@/components/common/card";
import FinancingCard from "@/components/common/financing-card/financing-card";
import Form from "@/components/common/form/form";
import Hero from "@/components/common/hero/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Header />
      
      <div style={{overflow:"hidden"}}>
        <Hero />
        <Categories />
      </div>
      <Footer />
    </>
  );
}