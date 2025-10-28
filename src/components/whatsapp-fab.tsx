import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhatsAppFab() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full"
        >
          <path d="M16.75 13.96c.25.13.43.2.6.3.2.12.33.22.45.36.12.14.18.28.2.43.04.16-.04.3-.16.43-.12.13-.3.23-.55.33-.24.1-.55.13-.93.13-.38 0-.82-.08-1.32-.23-.5-.16-1.02-.4-1.57-.72-.54-.32-1.06-.7-1.53-1.15-.47-.45-.88-.93-1.2-1.44s-.57-1.04-.7-1.6c-.13-.56-.2-1.1-.2-1.63 0-.4.04-.7.1-.92.07-.23.18-.4.35-.5.17-.1.38-.14.6-.14.2 0 .38.02.52.07.14.05.26.1.36.18.1.08.18.18.24.3.06.12.1.25.1.4 0 .17-.03.32-.08.45-.06.13-.15.28-.28.43-.13.15-.25.3-.36.43-.1.14-.15.28-.15.42 0 .15.06.28.18.4.12.12.3.25.54.4.24.15.5.28.8.4.3.1.58.2.85.23.27.03.48-.02.63-.13zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        </svg>
      </Link>
    </Button>
  );
}
