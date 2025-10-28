import Link from "next/link";
import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm7.4 20.3c-.3.4-.6.8-1.2.8h-1.2c-.3 0-.6-.1-.9-.3-.5-.3-3.3-1.6-6.3-4.6-2.3-2.3-3.8-5-4.2-5.6-.4-.6-.8-1.3-.8-2s.5-1.1.8-1.5c.2-.3.5-.5.8-.8.2-.1.5-.2.7-.2.2 0 .5 0 .7.1l.1.1c.4.2 1 .5 1.5 1.2.5.7.8 1.5.8 1.6.1.1 0 1.4-1 2.3-.5.5-.9.9-1.2 1.1s-.4.4-.2.8c.2.4 1.2 2.2 2.8 3.8 2.1 2.1 3.8 2.6 4.3 2.6.5 0 .8 0 1.2-.4.4-.3.9-.9.9-1.9v-1.1c0-.2 0-.3-.1-.4-.1-.1-1.3-1-1.5-1.1-.2-.1-.5-.1-.7.1-.2.1-.3.2-.5.4s-.3.3-.4.2c-.1-.1-.7-.3-1.3-.6-.6-.3-1.1-.7-1.5-1.1-.3-.4-.3-.6-.2-1l.1-.3c.1-.2.3-.3.4-.4.2-.2.3-.2.4-.1.6.3 1.1.5 1.7.7.3.1.5.1.5-.1v-1.1c-.1-.1-.1-.1 0 0 .1 0 .1-.1.1-.1.1 0 .2-.1.3-.2.2-.1.3-.3.3-.6s-.1-.5-.2-.7c-.4-.4-1-1.1-1.3-1.4l-.1-.1c-.1 0-.2-.1-.2-.1s-.1 0-.1 0h-.1c-.1.1-.3.1-.4.2s-.3.2-.4.3l-.1.1z"
      />
    </svg>
  );
}


export default function WhatsAppFab() {
  return (
    <Link
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
