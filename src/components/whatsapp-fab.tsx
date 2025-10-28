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
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-full w-full text-white"
        >
          <title>WhatsApp</title>
          <path
            d="M12.04 2.01A10.02 10.02 0 0 0 2 12.05a10.02 10.02 0 0 0 10.04 10.03c1.7 0 3.32-.42 4.77-1.2l3.4 1.25-1.28-3.32a10.02 10.02 0 0 0 1.1-4.76 10.02 10.02 0 0 0-10.03-10.04zM17.5 14.3c-.28-.14-1.65-.82-1.9-.91s-.45-.14-.64.14-.72.91-.88 1.1s-.32.22-.6.07c-1.12-.55-2.2-1.2-3.1-2.13s-1.55-2.03-1.8-2.58c-.25-.55-.13-1.04.1-1.35s.42-.5.5-.64.12-.21.04-.35c-.08-.14-.64-1.54-.88-2.1s-.48-.48-.64-.48h-.5c-.2 0-.5.07-.7.35s-.72.72-.72 1.75.72 2.04 1.2 2.7c.48.68 1.45 2.1 3.52 3.72s3.52 2.5 4.02 2.7c.5.2 1.04.16 1.45-.08s1.2-.95 1.35-1.25.28-.2.2-.3Z"
          />
        </svg>
      </Link>
    </Button>
  );
}
