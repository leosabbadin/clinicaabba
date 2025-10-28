import Link from "next/link";
import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M116.2,27.5c-6.2-12.8-17-23.7-29.8-29.8C73.6-8.5,59-3.2,46.2,3.1C33.4,9.4,22.4,20.4,16.2,33.1 c-6.2,12.8-6.2,28.1,0,40.9c5.1,10.6,13.1,19.6,22.8,25.9c0.7,0.4,1.4,0.8,2.1,1.2c-1.3,4.1-3.1,8.1-5.3,11.8 c-0.6,1-0.1,2.3,0.9,2.8c0.5,0.2,1,0.4,1.5,0.4c0.6,0,1.2-0.2,1.7-0.6c4.6-3.4,8.8-7.2,12.7-11.4c0.9-0.9,1.7-1.9,2.5-2.9 c4.5,1.2,9.2,1.8,13.9,1.8h0.1c14.7,0,28.7-5.8,39.1-16.2C128.9,73.1,128.7,46.2,116.2,27.5z"
        fill="#25D366"
      />
      <path
        d="M96.5,69.5c-2.4-1.2-14.1-7-16.3-7.8c-2.2-0.8-3.8-1.2-5.4,1.2c-1.6,2.4-6.2,7.8-7.6,9.4 c-1.4,1.6-2.8,1.8-5.2,0.6c-2.4-1.2-10.1-3.7-19.2-11.8c-7.1-6.3-11.8-14.1-13.2-16.5c-1.4-2.4-0.1-3.7,1.1-4.9 c1-1,2.2-2.4,3.3-3.6c1.1-1.2,1.4-2,2.2-3.3c0.8-1.2,0.4-2.4-0.2-3.6c-0.6-1.2-5.4-13.1-7.4-17.9c-2-4.8-4-4.1-5.4-4.1 c-1.4,0-3,0-4.6,0s-3.8,0.6-5.8,3c-2,2.4-7.8,7.6-7.8,18.5c0,10.9,8,21.4,9.2,23c1.2,1.6,15.7,24,38,33.5 c22.3,9.4,22.3,6.3,26.3,6.1c4-0.2,12.5-5.1,14.3-10c1.8-4.8,1.8-8.9,1.2-10C100.3,70.7,98.9,70.3,96.5,69.5z"
        fill="#FFFFFF"
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
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-transparent shadow-lg transition-transform hover:scale-110"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
