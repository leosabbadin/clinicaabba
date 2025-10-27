import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Medal, PersonStanding, Activity, Shield, Dumbbell, Bone } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesList = [
  {
    name: "Fisioterapia Especializada (Dores Crônicas e Agudas)",
    description: "Avaliação precisa e tratamento focado em dores crônicas e agudas. Identificamos a causa para recuperar sua função e eliminar a dor.",
    icon: HeartPulse,
    imageId: "chronic-pain"
  },
  {
    name: "Pré e Pós-Operatório",
    description: "Cuidado completo da avaliação à alta. Aceleramos sua recuperação funcional pós-cirurgia (coluna, joelho, ombro) e traumas ortopédicos.",
    icon: Activity,
    imageId: "post-operative"
  },
  {
    name: "Osteopatia",
    description: "Terapia manual focada na causa raiz do desequilíbrio corporal. Restauramos a mobilidade e aliviamos a dor tratando o corpo de forma integrada.",
    icon: Bone,
    imageId: "neurological"
  },
  {
    name: "Quiropraxia",
    description: "Ajustes precisos na coluna e articulações para restaurar o alinhamento. Alívio rápido da dor, correção de tensões e aumento da mobilidade.",
    icon: Shield,
    imageId: "geriatric"
  },
  {
    name: "Fisioterapia Esportiva",
    description: "Foco na prevenção de lesões e reabilitação de atletas. Retorne ao esporte com mais segurança, força e performance, seja amador ou profissional.",
    icon: Medal,
    imageId: "sports-injury"
  },
  {
    name: "RPG (Reeducação Postural Global)",
    description: "Método global para correção de desequilíbrios musculares e alívio de dores estruturais. Ajuste sua postura e melhore sua consciência corporal.",
    icon: PersonStanding,
    imageId: "pediatric"
  },
  {
    name: "Pilates",
    description: "Ferramenta de reabilitação e bem-estar com acompanhamento profissional. Fortaleça o core, ganhe flexibilidade e consciência corporal.",
    icon: Dumbbell,
    imageId: "method-therapist"
  },
];

function ServiceCard({ name, description, icon: Icon, imageId }: { name: string; description: string; icon: React.ElementType; imageId: string; }) {
  const image = PlaceHolderImages.find(p => p.id === imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="relative h-48 w-full">
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
