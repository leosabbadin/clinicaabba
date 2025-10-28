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
          className="h-full w-full text-white"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.95L2.05 22l5.3-1.4c1.42.79 3.03 1.21 4.69 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM7.34 17.47l-.18-.29a8.3 8.3 0 0 1-1.25-4.27c0-4.58 3.73-8.31 8.31-8.31a8.3 8.3 0 0 1 8.31 8.31c0 4.58-3.73 8.31-8.31 8.31h-.01c-1.44 0-2.84-.36-4.1-1.02l-.31-.18-3.05.8.82-2.98zM15.36 14.1c-.2-.1-.72-.35-1.12-.42-.25-.04-.42-.06-.59.1-.17.16-.38.42-.46.52-.09.1-.17.11-.34.05-.17-.06-1.02-.38-1.77-1.14-.59-.59-.97-1.14-1.1-1.39-.12-.25-.01-.38.09-.49.09-.1.2-.25.3-.37.1-.13.15-.21.21-.36.06-.14.03-.27-.03-.37-.06-.1-.59-1.42-.81-1.94-.22-.52-.43-.45-.59-.45-.16 0-.33 0-.5 0-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.67 4.25 3.73.59.25 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.05-.1-.17-.15-.34-.25z"/>
        </svg>
      </Link>
    </Button>
  );
}

    