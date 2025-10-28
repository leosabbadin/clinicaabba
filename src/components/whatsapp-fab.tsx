import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhatsAppFab() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.437 2.562a13.37 13.37 0 0 0-18.874 18.874l-2.563 6.563 6.78-2.52a13.37 13.37 0 0 0 6.06.626h.001c10.437-1.187 17.687-11.687 14.655-22.312a13.37 13.37 0 0 0-6.059-1.229z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M17.53 14.32a2.31 2.31 0 0 0-3.374-1.25 10.66 10.66 0 0 1-5.126-5.126 2.31 2.31 0 0 0-1.25-3.375 11.23 11.23 0 0 0-1.78.375c-.624.281-.937.812-.906 1.5.063 1.25.5 2.562 1.25 3.874a15.7 15.7 0 0 0 7.375 7.375c1.313.75 2.625 1.188 3.875 1.25.688.032 1.22-.28 1.5-1.03.312-.75.625-1.5.375-2.125a2.41 2.41 0 0 0-.813-1.125z"
            fill="#25D366"
          />
        </svg>
      </Link>
    </Button>
  );
}
