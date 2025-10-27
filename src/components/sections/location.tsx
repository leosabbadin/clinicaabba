import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const mapImage = PlaceHolderImages.find(p => p.id === 'map-location');

export default function Location() {
  return (
    <section id="location" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Visite Nossa Clínica
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estamos convenientemente localizados para atendê-lo. Encontre-nos no endereço abaixo ou entre em contato para agendar sua consulta.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-muted-foreground">Avenida do Bem-Estar, 123, Lisboa, 1000-001, Portugal</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-muted-foreground">+351 21 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contato@abbaphysio.digital</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Horário de Funcionamento</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Segunda - Sexta</span> <span>9:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sábado</span> <span>10:00 - 14:00</span></li>
              <li className="flex justify-between"><span>Domingo</span> <span>Fechado</span></li>
            </ul>
          </div>
        </div>
        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-md md:h-full">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-cover"
              data-ai-hint={mapImage.imageHint}
            />
          )}
           <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button asChild size="lg">
              <Link href="https://maps.app.goo.gl/4rXjTBQ3cX2HgkED6?g_st=ipc" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
