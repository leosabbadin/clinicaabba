import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path
      d="M19.63 4.37A8.91 8.91 0 0 0 12.01 3C6.48 3 2 7.48 2 13a8.9 8.9 0 0 0 2.37 6.63L3 21l1.45-1.37A8.91 8.91 0 0 0 12.01 21C17.54 21 22 16.52 22 11a8.91 8.91 0 0 0-2.37-6.63M12.01 19.5c-1.49 0-2.93-.4-4.2-1.12L7.36 18.1l-2.85.95.96-2.82-.28-.45a7.07 7.07 0 0 1-1.19-4.28c0-4.42 3.59-8 8-8s8 3.58 8 8c0 4.42-3.59 8-8 8m3.97-6.35c-.2-.1-.53-.26-1.5-0.74s-1.4-.64-1.63-.72c-.22-.08-.38-.04-.54.12s-.6.72-.73.86c-.13.14-.27.16-.47.06s-1.95-.72-3.36-2.08c-.83-.8-1.58-1.8-1.76-2.1c-.18-.3-.02-.46.1-.6s.27-.3.4-.4c.05-.05.1-.1.15-.17s.03-.25-.03-.35c-.05-.1-.47-1.13-.64-1.53c-.17-.4-.35-.34-.48-.34H5.32c-.13 0-.3.04-.45.2s-.52.5-.52 1.24s.53 1.44.6 1.54s1.04 1.7 2.53 2.37c1.49.67 2.13.8 2.6.96c.48.16.82.13 1.1.08c.3-.05.82-.33.93-.64c.1-.3.1-.57.08-.64c-.03-.07-.1-.11-.2-.2z"
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
