import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Location() {
  const whatsappLink = "https://wa.me/5562986025326?text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  return (
    <section id="location" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Visite Nossa Clínica
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Estamos convenientemente localizados para atendê-lo. Encontre-nos no endereço abaixo ou entre em contato para agendar sua consulta.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <MapPin className="h-8 w-8 text-primary" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Endereço</h3>
              <p className="text-muted-foreground">Av. Ipanema N° 684 Quadra 3 Lote 14 jardim Atlântico - Goiânia</p>
            </div>
          </div>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
            <Phone className="h-8 w-8 text-primary transition-colors group-hover:text-primary/80" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Telefone</h3>
              <p className="text-muted-foreground transition-colors group-hover:text-primary">(62) 9 8602-5326</p>
            </div>
          </Link>
          <div className="flex flex-col items-center gap-4">
            <Mail className="h-8 w-8 text-primary" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">contato@abbaphysio.digital</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border bg-card p-6 max-w-md mx-auto">
            <h3 className="font-semibold">Horário de Funcionamento</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Segunda - Sexta</span> <span>9:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sábado</span> <span>10:00 - 14:00</span></li>
              <li className="flex justify-between"><span>Domingo</span> <span>Fechado</span></li>
            </ul>
        </div>

        <div className="mt-12">
            <Button asChild size="lg">
              <Link href="https://maps.app.goo.gl/4rXjTBQ3cX2HgkED6?g_st=ipc" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Ver no Google Maps
              </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
