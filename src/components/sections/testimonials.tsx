import { summarizeTestimonials } from "@/ai/flows/summarize-testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonialsList = [
    {
        name: "Sarah L.",
        avatar: "S",
        fullText: "After my knee surgery, I was worried I'd never get back to my active lifestyle. The team at Abba Digital Physio was incredible. They created a personalized recovery plan that was challenging but manageable. Their encouragement and expertise were instrumental in my recovery. Today, I'm back to hiking and running, something I thought was impossible a few months ago. I can't thank them enough for their support and for giving me my life back.",
    },
    {
        name: "Michael B.",
        avatar: "M",
        fullText: "I've been dealing with chronic back pain for years and had almost given up hope. A friend recommended Abba Digital Physio, and it has been a game-changer. They didn't just treat the symptoms; they took the time to understand the root cause of my pain. Through a combination of manual therapy, targeted exercises, and education on posture, my pain has significantly decreased. I feel more in control of my body than ever before.",
    },
    {
        name: "Emily C.",
        avatar: "E",
        fullText: "The physiotherapists here are not only highly skilled but also incredibly compassionate. As a new mother, I was struggling with postpartum back pain. They provided a safe and supportive environment for my treatment and even gave me exercises I could do at home with my baby. Their holistic approach to wellness is truly commendable. I highly recommend their services to any new parent.",
    },
];

async function TestimonialCard({ name, avatar, fullText }: { name: string; avatar: string; fullText: string; }) {
    const { summary } = await summarizeTestimonials({ testimonial: fullText });

    return (
        <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between p-6">
                <blockquote className="text-muted-foreground">
                    "{summary}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${name}`} />
                        <AvatarFallback>{avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-muted-foreground">Verified Patient</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">What Our Patients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Real stories from people we've helped on their journey to recovery.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsList.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
