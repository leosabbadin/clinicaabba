import Image from "next/image";
import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <Image
      src="https://raw.githubusercontent.com/leosabbadin/imagem-abba/main/Screenshot%20(31)%20(1).png"
      alt="Abba Physio Logo"
      width={100}
      height={50}
      className="h-10 w-auto"
    />
  );
}
