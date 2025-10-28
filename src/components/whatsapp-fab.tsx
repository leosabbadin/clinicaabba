import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M.052 24l1.688-6.164a11.91 11.91 0 01-1.74-6.38C0 5.14 5.272 0 11.833 0S23.61 5.14 23.61 11.457c0 6.315-5.27 11.456-11.777 11.456a11.85 11.85 0 01-5.753-1.545L.052 24zm6.66-3.132a9.58 9.58 0 004.992 1.372h.005c5.448 0 9.872-4.322 9.872-9.663C21.58 6.24 17.155 1.92 11.71 1.92S1.845 6.24 1.845 11.577a9.542 9.542 0 002.532 6.475l.18.29-1.22 4.414 4.54-1.18.267.155z"
      />
    </svg>
);

export default function WhatsAppFab() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Link>
    </Button>
  );
}
