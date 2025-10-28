import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Location() {
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
          <div className="flex flex-col items-center gap-4">
            <Phone className="h-8 w-8 text-primary" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Telefone</h3>
              <p className="text-muted-foreground">+351 21 123 4567</p>
            </div>
          </div>
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
