
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Medal, PersonStanding, Activity, Shield, Dumbbell, Bone } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const servicesList = [
  {
    name: "Fisioterapia Especializada",
    description: "Avaliação precisa e tratamento focado na recuperação funcional de traumas ortopédicos e disfunções, utilizando as melhores práticas para sua reabilitação.",
    icon: HeartPulse,
    imageId: "chronic-pain",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/Fisioterapia%20preventiva%20.jpg"
  },
  {
    name: "Dores Crônicas e Agudas",
    description: "Abordagem terapêutica para o tratamento de condições agudas e crônicas, visando o alívio da dor e a restauração do seu bem-estar.",
    icon: HeartPulse,
    imageId: "chronic-pain",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/IMG_1749.jpg"
  },
  {
    name: "Fisioterapia no Pré e Pós-Operatório",
    description: "Acompanhamento completo, da avaliação à alta, para acelerar a recuperação funcional de cirurgias e traumas ortopédicos de coluna, joelho, ombro e mais.",
    icon: Activity,
    imageId: "post-operative",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2016.34.36.jpeg"
  },
  {
    name: "Fisioterapia Esportiva",
    description: "Foco na prevenção de lesões, reabilitação acelerada e otimização da performance de atletas, do amador ao profissional.",
    icon: Medal,
    imageId: "sports-injury",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/IMG_1759.jpg"
  },
  {
    name: "Osteopatia",
    description: "Terapia manual que investiga e trata a causa raiz da dor, buscando reequilibrar o corpo de forma integrada para restaurar a mobilidade.",
    icon: Bone,
    imageId: "neurological"
  },
  {
    name: "Quiropraxia",
    description: "Ajustes precisos na coluna e articulações para alívio imediato da dor, correção de desalinhamentos e melhora da função do sistema nervoso.",
    icon: Shield,
    imageId: "chiropractic",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2015.21.16.jpeg"
  },
  {
    name: "RPG (Reeducação Postural Global)",
    description: "Método de correção postural que trata desequilíbrios musculares de forma global, aliviando dores estruturais e melhorando a consciência corporal.",
    icon: PersonStanding,
    imageId: "pediatric",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2017.13.20.jpeg"
  },
  {
    name: "Pilates",
    description: "Serviço focado no fortalecimento do core, flexibilidade e controle corporal. Promove bem-estar e qualidade de vida através de exercícios supervisionados.",
    icon: Dumbbell,
    imageId: "method-therapist",
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2015.20.45.jpeg"
  },
];

function ServiceCard({ name, description, icon: Icon, imageId, imageUrl: customImageUrl }: { name: string; description: string; icon: React.ElementType; imageId: string; imageUrl?: string; }) {
  const image = PlaceHolderImages.find(p => p.id === imageId);
  const imageUrl = customImageUrl || image?.imageUrl;
  const imageDescription = image?.description || name;
  const imageHint = image?.imageHint || name.toLowerCase().split(' ').slice(0, 2).join(' ');


  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 bg-card text-card-foreground">
      {imageUrl && (
        <div className="relative h-[400px] w-full">
          <Image
            src={imageUrl}
            alt={imageDescription}
            fill
            className={`object-cover ${name === 'Pilates' ? 'object-bottom' : ''}`}
            data-ai-hint={imageHint}
          />
        </div>
      )}
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="rounded-full bg-accent p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-card-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
    const whatsappLink = "https://wa.me/5562986025326?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  return (
    <section id="services" className="w-full bg-accent/50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Oferecemos uma gama completa de serviços de fisioterapia especializados, adaptados às suas necessidades individuais.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" style={{ backgroundColor: '#1EAE5F' }}>
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                AGENDAR MINHA AVALIAÇÃO
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
