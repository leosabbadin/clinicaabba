import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Medal, PersonStanding, Activity, Shield, Dumbbell, Bone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesList = [
  {
    id: "specialized-physiotherapy",
    name: "Fisioterapia Especializada",
    description: "Avaliação precisa e tratamento focado na recuperação funcional de traumas ortopédicos e disfunções, utilizando as melhores práticas para sua reabilitação.",
    icon: HeartPulse,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/Fisioterapia%20preventiva%20.jpg?raw=true",
    imageAlt: "Fisioterapia preventiva"
  },
  {
    id: "chronic-pain",
    name: "Dores Crônicas e Agudas",
    description: "Abordagem terapêutica para o tratamento de condições agudas e crônicas, visando o alívio da dor e a restauração do seu bem-estar.",
    icon: HeartPulse,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/IMG_1749.jpg?raw=true",
    imageAlt: "A person stretching their back, symbolizing relief from chronic pain."
  },
  {
    id: "post-operative",
    name: "Fisioterapia no Pré e Pós-Operatório",
    description: "Acompanhamento completo, da avaliação à alta, para acelerar a recuperação funcional de cirurgias e traumas ortopédicos de coluna, joelho, ombro e mais.",
    icon: Activity,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2016.34.36.jpeg?raw=true",
    imageAlt: "A patient doing guided exercises for post-operative recovery."
  },
  {
    id: "sports-injury",
    name: "Fisioterapia Esportiva",
    description: "Foco na prevenção de lesões, reabilitação acelerada e otimização da performance de atletas, do amador ao profissional.",
    icon: Medal,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/IMG_1759.jpg?raw=true",
    imageAlt: "Physiotherapist working with a football player."
  },
  {
    id: "osteopathy",
    name: "Osteopatia",
    description: "Terapia manual que investiga e trata a causa raiz da dor, buscando reequilibrar o corpo de forma integrada para restaurar a mobilidade.",
    icon: Bone,
    imageUrl: "https://images.unsplash.com/photo-1643300121645-83fe6b0f9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwYXRpZW50JTIwdGhlcmFweXxlbnwwfHx8fDE3NjE1NzQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "A therapist assisting a patient with balance and coordination exercises."
  },
  {
    id: "chiropractic",
    name: "Quiropraxia",
    description: "Ajustes precisos na coluna e articulações para alívio imediato da dor, correção de desalinhamentos e melhora da função do sistema nervoso.",
    icon: Shield,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2015.21.16.jpeg?raw=true",
    imageAlt: "A chiropractor adjusting a patient's back."
  },
  {
    id: "pediatric",
    name: "RPG (Reeducação Postural Global)",
    description: "Método de correção postural que trata desequilíbrios musculares de forma global, aliviando dores estruturais e melhorando a consciência corporal.",
    icon: PersonStanding,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2017.13.20.jpeg?raw=true",
    imageAlt: "A child playing with therapeutic toys during a physiotherapy session."
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Serviço focado no fortalecimento do core, flexibilidade e controle corporal. Promove bem-estar e qualidade de vida através de exercícios supervisionados.",
    icon: Dumbbell,
    imageUrl: "https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/WhatsApp%20Image%202025-10-27%20at%2015.20.45.jpeg?raw=true",
    imageAlt: "Pilates session in progress."
  },
];

function ServiceCard({ name, description, icon: Icon, imageUrl, imageAlt }: { name: string; description: string; icon: React.ElementType; imageUrl: string; imageAlt: string; }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 bg-card text-card-foreground">
       <div className="relative h-[400px] w-full">
          <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={`object-cover ${name === 'Pilates' ? 'object-bottom' : ''}`}
          />
      </div>
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
            <ServiceCard key={service.id} name={service.name} description={service.description} icon={service.icon} imageUrl={service.imageUrl} imageAlt={service.imageAlt} />
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
