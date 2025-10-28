import Link from "next/link";
import type { SVGProps } from "react";

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04,2.5C6.75,2.5,2.5,6.75,2.5,12.04c0,1.75,0.47,3.42,1.32,4.85L2.5,21.5l4.79-1.3c1.38,0.76,2.98,1.18,4.68,1.18 c5.29,0,9.54-4.25,9.54-9.54S17.33,2.5,12.04,2.5z M12.04,20.6c-1.42,0-2.8-0.36-4.03-1.01l-0.29-0.17l-2.98,0.81l0.82-2.92 l-0.19-0.3C5.01,15.6,4.59,13.87,4.59,12.04c0-4.11,3.34-7.45,7.45-7.45c4.11,0,7.45,3.34,7.45,7.45 C19.49,17.26,16.15,20.6,12.04,20.6z"
        fill="white"
      />
      <path
        d="M9.47,7.97c-0.23-0.49-0.48-0.5-0.69-0.51c-0.18,0-0.38,0-0.59,0s-0.54,0.08-0.81,0.39 c-0.27,0.31-1.04,1.02-1.04,2.48c0,1.46,1.07,2.88,1.21,3.08c0.14,0.2,2.09,3.35,5.18,4.55c2.65,1.02,3.08,0.81,3.64,0.76 c0.56-0.05,1.77-0.72,2.02-1.41c0.25-0.69,0.25-1.28,0.18-1.41c-0.08-0.13-0.28-0.21-0.59-0.36c-0.31-0.15-1.77-0.87-2.05-0.97 c-0.27-0.1-0.47-0.15-0.67,0.15c-0.2,0.3-0.78,0.97-0.95,1.17c-0.18,0.2-0.35,0.23-0.66,0.08c-0.31-0.15-1.3-0.48-2.48-1.52 c-0.92-0.82-1.53-1.83-1.71-2.13c-0.18-0.3-0.02-0.46,0.13-0.61c0.14-0.14,0.31-0.36,0.47-0.54c0.16-0.18,0.21-0.3,0.31-0.5 c0.1-0.2,0.05-0.38-0.03-0.53C10.53,10.05,9.7,8.46,9.47,7.97z"
        fill="white"
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
      <WhatsAppIcon />
    </Link>
  );
}