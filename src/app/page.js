
import Button from "@/components/common/button/Button";
import Card from "@/components/common/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8 bg-gray-900">
      <Button variant="primary">Choisir votre formation</Button>
      <Button variant="primary" size="small">Choisir votre formation</Button>
      <Button variant="secondary">Choisir votre formation</Button>
      <Button variant="ghost">Choisir votre formation</Button>
      <Button variant="inactive">Choisir votre formation</Button>
      <Button variant="primary" href="#">Choisir votre formation</Button>
      <Card />
    </div>
  );
}
