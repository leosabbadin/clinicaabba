import { Mail, MapPin, Phone } from "lucide-react";
import LocationMap from "../location-map";

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
        <div className="h-96 w-full md:h-full">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
