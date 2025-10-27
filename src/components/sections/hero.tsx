import { generateHomePageCopy } from "@/ai/flows/generate-homepage-copy";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export default async function Hero() {
  const { copy } = await generateHomePageCopy({
    prompt: "Create a welcoming and reassuring message for a physiotherapy clinic's homepage. Emphasize personalized care, expert treatment, and a commitment to helping patients regain mobility and live pain-free.",
  });
  const [headline, ...paragraphs] = copy.split('\n\n');

  return (
    <section className="relative h-[80svh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
        <div className="container max-w-4xl px-4">
          <h1 className="font-headline text-4xl font-bold leading-tight drop-shadow-md md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90 drop-shadow-sm md:text-xl">
            {paragraphs.join(' ')}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
