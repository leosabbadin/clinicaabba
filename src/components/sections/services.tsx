import { generateServiceDescriptions } from "@/ai/flows/generate-service-descriptions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, BrainCircuit, HeartPulse, Medal, PersonStanding, Activity } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const servicesList = [
  {
    name: "Sports Injury Rehabilitation",
    icon: Medal,
    imageId: "sports-injury"
  },
  {
    name: "Post-Operative Care",
    icon: Activity,
    imageId: "post-operative"
  },
  {
    name: "Chronic Pain Management",
    icon: HeartPulse,
    imageId: "chronic-pain"
  },
  {
    name: "Neurological Rehabilitation",
    icon: BrainCircuit,
    imageId: "neurological"
  },
  {
    name: "Geriatric Physiotherapy",
    icon: PersonStanding,
    imageId: "geriatric"
  },
  {
    name: "Pediatric Physiotherapy",
    icon: Baby,
    imageId: "pediatric"
  },
];

async function ServiceCard({ name, icon: Icon, imageId }: { name: string; icon: React.ElementType; imageId: string; }) {
  const { serviceDescription } = await generateServiceDescriptions({ serviceName: name });
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
        <p className="text-sm text-muted-foreground">{serviceDescription}</p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <section id="services" className="w-full bg-accent/50 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We offer a comprehensive range of specialized physiotherapy services tailored to your individual needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <ServiceCard key={service.name} name={service.name} icon={service.icon} imageId={service.imageId} />
          ))}
        </div>
      </div>
    </section>
  );
}
