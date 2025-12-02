import Button from "@/components/common/button/Button";
import Card from "@/components/common/card";
import Form from "@/components/common/form/form";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-8 bg-gray-900">
        <Button variant="primary">Choisir votre formation</Button>
        <Button variant="primary" size="small">
          Choisir votre formation
        </Button>
        <Button variant="secondary">Choisir votre formation</Button>
        <Button variant="ghost">Choisir votre formation</Button>
        <Button variant="inactive">Choisir votre formation</Button>
        <Button variant="primary" href="#">
          Choisir votre formation
        </Button>
        <Card />
        <Form />
      </div>
      <Footer />
    </>
  );
}
