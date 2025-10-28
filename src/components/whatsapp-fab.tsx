import Link from "next/link";
import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
        <path d="M39.3,8.7A19.83,19.83,0,0,0,8.7,39.3,19.83,19.83,0,0,0,39.3,8.7ZM24,41.2A17.2,17.2,0,1,1,41.2,24,17.22,17.22,0,0,1,24,41.2Z"></path>
        <path d="M33.7,30.3a2.31,2.31,0,0,1-1.4.9,5,5,0,0,1-2.2.4,3.23,3.23,0,0,1-1.6-.4,11.23,11.23,0,0,1-3-1.6,17.3,17.3,0,0,1-5.7-5.7,11.23,11.23,0,0,1-1.6-3,3.23,3.23,0,0,1-.4-1.6,5,5,0,0,1,.4-2.2,2.31,2.31,0,0,1,.9-1.4l.2-.2a1.86,1.86,0,0,1,2.8.5l.3.5c.2.2.3.4.4.5a3.17,3.17,0,0,1,.4.9,1.52,1.52,0,0,1-.1,1,4.88,4.88,0,0,1-.6.8,1.4,1.4,0,0,0-.4,1.6,13.72,13.72,0,0,0,2.6,3.6,13.72,13.72,0,0,0,3.6,2.6,1.4,1.4,0,0,0,1.6-.4,4.88,4.88,0,0,1,.8-.6,1.52,1.52,0,0,1,1-.1,3.17,3.17,0,0,1,.9.4c.1.1.3.2.5.4l.3.5a1.86,1.86,0,0,1,.5,2.8Z"></path>
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
