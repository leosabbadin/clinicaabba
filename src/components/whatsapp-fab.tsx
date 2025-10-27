import Link from "next/link";
import { Button } from "./ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
    >
        <path d="M16.75 13.96c.25.13.41.2.52.33.1.13.12.25.08.38-.04.13-.2.33-.35.48-.15.15-.3.23-.48.28-.18.05-.38.03-.6-.03-.23-.05-.48-.1-1.03-.33-.55-.23-1.05-.5-1.5-.83-.45-.33-.8-.7-1.1-1.13-.3-.43-.55-.9-.73-1.4-.18-.5-.25-1-.23-1.5.02-.5.15-.93.3-1.28.15-.35.33-.6.53-.78.2-.18.4-.25.58-.25.18 0 .35.03.5.08.15.05.28.1.4.15.13.05.23.1.3.18.08.08.13.18.15.3.02.13.02.25 0 .38-.03.13-.05.23-.1.35-.05.1-.1.2-.18.3-.08.1-.15.2-.2.3-.08.1-.13.15-.15.2-.02.05-.03.1-.02.13.02.03.05.08.1.13.05.05.08.1.13.15.2.13.44.3.7.5.3.18.5.33.68.45.18.13.3.2.43.28.13.08.23.1.3.1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
    </svg>
);

export default function WhatsAppFAB() {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E]"
      aria-label="Contate-nos no WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Link>
    </Button>
  );
}
