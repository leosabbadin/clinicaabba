
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const headline = "Chega de Viver com Limitações.";
  const subtitle = "Você encontrou a clínica certa. Nossa equipe de especialistas une tratamento avançado e cuidado humano para tirar você da crise e devolver seu movimento.";
  const whatsappLink = "https://wa.me/5562986025326?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

  return (
    <section className="relative h-[80svh] min-h-[500px] w-full">
      <Image
        src="https://raw.githubusercontent.com/leosabbadin/imagemclinicaabba/71c44676fa42a8aa8a9c15f9c7ce5cb843c748b6/ABBA.png"
        alt="Fisioterapia"
        fill
        className="object-cover"
        data-ai-hint="physiotherapy session"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="container max-w-4xl px-4">
          <h1 className="font-headline text-4xl font-bold leading-tight drop-shadow-md md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground drop-shadow-md md:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" style={{ backgroundColor: '#1EAE5F' }}>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                QUERO ALIVIAR MINHA DOR AGORA
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">CONHECER OS TRATAMENTOS</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
