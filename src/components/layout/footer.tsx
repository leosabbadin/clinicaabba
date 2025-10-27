import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-headline text-lg font-semibold">Abba Digital Physio</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Dedicated to your recovery and wellness.
          </p>
        </div>

        <div className="md:col-start-3">
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-headline text-lg font-semibold">Connect</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-7xl border-t px-4 pt-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Abba Digital Physio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
