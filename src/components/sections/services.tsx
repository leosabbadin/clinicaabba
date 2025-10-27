import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Medal, PersonStanding, Activity, Shield, Dumbbell, Bone } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesList = [
  {
    name: "Fisioterapia Especializada",
    description: "Avaliação precisa e tratamento focado na recuperação funcional de traumas ortopédicos e disfunções, utilizando as melhores práticas para sua reabilitação.",
    icon: HeartPulse,
    imageId: "chronic-pain"
  },
  {
    name: "Dores Crônicas e Agudas",
    description: "Abordagem terapêutica para o tratamento de condições agudas e crônicas, visando o alívio da dor e a restauração do seu bem-estar.",
    icon: HeartPulse,
    imageId: "chronic-pain"
  },
  {
    name: "Fisioterapia no Pré e Pós-Operatório",
    description: "Acompanhamento completo, da avaliação à alta, para acelerar a recuperação funcional de cirurgias e traumas ortopédicos de coluna, joelho, ombro e mais.",
    icon: Activity,
    imageId: "post-operative"
  },
  {
    name: "Fisioterapia Esportiva",
    description: "Foco na prevenção de lesões, reabilitação acelerada e otimização da performance de atletas, do amador ao profissional.",
    icon: Medal,
    imageId: "sports-injury"
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
    imageId: "geriatric"
  },
  {
    name: "RPG (Reeducação Postural Global)",
    description: "Método de correção postural que trata desequilíbrios musculares de forma global, aliviando dores estruturais e melhorando a consciência corporal.",
    icon: PersonStanding,
    imageId: "pediatric"
  },
  {
    name: "Pilates",
    description: "Serviço focado no fortalecimento do core, flexibilidade e controle corporal. Promove bem-estar e qualidade de vida através de exercícios supervisionados.",
    icon: Dumbbell,
    imageId: "method-therapist"
  },
];

function ServiceCard({ name, description, icon: Icon, imageId }: { name: string; description: string; icon: React.ElementType; imageId: string; }) {
  const image = PlaceHolderImages.find(p => p.id === imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="relative h-64 w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
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
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
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
      </div>
    </section>
  );
}
