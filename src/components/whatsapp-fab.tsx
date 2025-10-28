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
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 2.005c-5.525 0-10.005 4.478-10.005 10.002 0 1.75.45 3.395 1.226 4.834l-1.23 4.51 4.616-1.214a9.94 9.94 0 0 0 4.39 1.12h.004c5.525 0 10.005-4.478 10.005-10.003s-4.48-10.002-10.006-10.002zm0 0" fill="#FFFFFF"/>
            <path d="M17.25 14.265c-.195-.098-1.154-.57-1.334-.633-.18-.063-.312-.098-.444.098-.132.195-.504.633-.618.765-.114.132-.228.148-.423.05-.195-.098-.836-.308-1.593-.98-1.22-1.1-1.422-1.422-1.593-1.845-.063-.165.03-.255.09-.345.053-.08.118-.195.178-.293.06-.098.08-.165.118-.278.04-.113.02-.21-.01-.308-.03-.1-.444-1.065-.609-1.458-.163-.38-.328-.33-.443-.336-.114 0-.246-.015-.378-.015-.132 0-.345.045-.525.225-.18.18-.69.675-.69 1.65 0 .975.705 1.92.81 2.055.105.135 1.404 1.83 3.404 2.4A5.61 5.61 0 0 0 16.5 18c.27 0 .825-.113 1.17-.69.345-.578.345-1.08.24-1.215-.1-.131-.345-.224-.525-.32z" fill="#25D366"/>
        </svg>
      </Link>
    </Button>
  );
}
