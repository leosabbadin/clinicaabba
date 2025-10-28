import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4,5.6c-1.7-1.7-4-2.6-6.4-2.6C6.6,3,3,6.6,3,12c0,1.9,0.5,3.7,1.5,5.2L3.3,20.7l3.6-1.2c1.4,0.8,3,1.3,4.8,1.3h0 c5.4,0,9.8-4.4,9.8-9.8C21.4,9.6,20.1,7.3,18.4,5.6z M12,20.1c-1.6,0-3.2-0.5-4.5-1.4l-0.3-0.2l-3.3,1.1l1.1-3.2l-0.2-0.3 c-1-1.4-1.5-3.1-1.5-4.9c0-4.4,3.6-8,8-8c2.2,0,4.2,0.9,5.7,2.3c1.5,1.5,2.3,3.5,2.3,5.7C20,16.5,16.4,20.1,12,20.1z M17.1,14 c-0.2-0.1-1.3-0.6-1.5-0.7c-0.2-0.1-0.3,0-0.5,0.2c-0.2,0.2-0.5,0.7-0.6,0.8c-0.1,0.1-0.2,0.2-0.4,0.1c-0.6-0.2-1.4-0.5-2.5-1.5 c-0.8-0.7-1.4-1.7-1.5-2c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.2,0.4-0.4c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.1,0-0.3-0.1-0.4 c0-0.1-0.5-1.3-0.7-1.7c-0.2-0.5-0.3-0.4-0.5-0.4H7.9C7.7,6.8,7.4,6.9,7.2,7.1c-0.2,0.2-0.8,0.7-0.8,1.8c0,1,0.8,2,0.9,2.2 c0.1,0.2,1.3,2.1,3.3,2.9c0.5,0.2,0.8,0.3,1.1,0.4c0.5,0.1,0.9,0.1,1.2,0c0.4-0.1,1.3-0.5,1.4-1c0.2-0.5,0.2-0.9,0.1-1 C17.4,14.1,17.3,14,17.1,14z"
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
