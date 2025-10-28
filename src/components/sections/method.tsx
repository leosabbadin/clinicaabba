import Image from "next/image";
import { Stethoscope, Users, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    icon: Stethoscope,
    title: "Avaliação Precisa",
    description: "Investigamos a fundo para entender a origem do problema.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description: "Um ambiente acolhedor onde você se sente seguro e ouvido.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Equipe em constante atualização e comprometida com as melhores práticas.",
  },
];

export default function Method() {
    const whatsappLink = "https://wa.me/5562986025326?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
    
  return (
    <section id="method" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="order-2 flex flex-col items-start md:order-1">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Mais que Fisioterapia. Um Cuidado que Acolhe.
          </h2>
          <p className="mt-4 text-muted-foreground">
            O nome "Abba" vem do aramaico e significa "Pai", uma expressão de intimidade, confiança e cuidado. Essa é a base da nossa filosofia.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nossa missão é promover um serviço inigualável, onde a excelência profissional encontra os valores éticos e cristãos. Aqui, você não é apenas um paciente; vemos você como um todo, cuidando do seu bem-estar físico, emocional e espiritual.
          </p>
          <Button asChild className="mt-6" style={{ backgroundColor: '#1EAE5F' }}>
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              INICIAR TRATAMENTO AGORA
            </Link>
          </Button>
          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl md:h-[500px]">
              <Image
                src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-28%20at%2010.16.36.jpeg?raw=true"
                alt="A compassionate physiotherapist attending to a patient with care."
                fill
                className="object-cover"
                data-ai-hint="caring therapist"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
