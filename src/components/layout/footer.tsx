import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { label: "Serviços", href: "#services" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Localização", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-card py-12 text-card-foreground">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <p className="text-sm text-card-foreground/80">
            Dedicados à sua recuperação e bem-estar.
          </p>
        </div>

        <div className="md:col-start-3">
          <h3 className="font-headline text-lg font-semibold">Links Rápidos</h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-card-foreground/80 transition-colors hover:text-card-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold">Conecte-se</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-card-foreground/80 transition-colors hover:text-card-foreground" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-card-foreground/80 transition-colors hover:text-card-foreground" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-card-foreground/80 transition-colors hover:text-card-foreground" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-7xl border-t border-card-foreground/20 px-4 pt-8">
        <p className="text-center text-sm text-card-foreground/60">
          &copy; {new Date().getFullYear()} Abba Physio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
