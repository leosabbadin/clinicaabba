import { Mail, MapPin, Phone } from "lucide-react";
import LocationMap from "../location-map";

export default function Location() {
  return (
    <section id="location" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Visit Our Clinic
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are conveniently located to serve you. Find us at the address below or get in touch to book your appointment.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">123 Wellness Avenue, London, W1A 1AA, United Kingdom</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+44 20 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@abbaphysio.digital</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Opening Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
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
