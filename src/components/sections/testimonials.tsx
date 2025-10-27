import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonialsList = [
    {
        name: "Sarah L.",
        avatar: "S",
        fullText: "Após minha cirurgia no joelho, fiquei preocupada em nunca mais voltar ao meu estilo de vida ativo. A equipe da Abba Digital Physio foi incrível. Eles criaram um plano de recuperação personalizado que foi desafiador, mas administrável. O incentivo e a experiência deles foram fundamentais na minha recuperação. Hoje, estou de volta às caminhadas e corridas, algo que eu achava impossível alguns meses atrás. Não tenho como agradecer o suficiente pelo apoio e por me darem minha vida de volta.",
    },
    {
        name: "Michael B.",
        avatar: "M",
        fullText: "Lido com dores crônicas nas costas há anos e quase perdi as esperanças. Um amigo me recomendou a Abba Digital Physio, e foi uma virada de jogo. Eles não trataram apenas os sintomas; eles dedicaram tempo para entender a causa raiz da minha dor. Através de uma combinação de terapia manual, exercícios direcionados e educação sobre postura, minha dor diminuiu significativamente. Sinto-me mais no controle do meu corpo do que nunca.",
    },
    {
        name: "Emily C.",
        avatar: "E",
        fullText: "Os fisioterapeutas aqui não são apenas altamente qualificados, mas também incrivelmente compassivos. Como mãe de primeira viagem, eu estava com dores nas costas pós-parto. Eles proporcionaram um ambiente seguro e de apoio para o meu tratamento e até me deram exercícios que eu poderia fazer em casa com meu bebê. A abordagem holística deles para o bem-estar é verdadeiramente louvável. Recomendo muito seus serviços para qualquer nova mãe.",
    },
];

function TestimonialCard({ name, avatar, fullText }: { name: string; avatar: string; fullText: string; }) {
    return (
        <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between p-6">
                <blockquote className="text-muted-foreground">
                    "{fullText}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${name}`} />
                        <AvatarFallback>{avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-muted-foreground">Paciente Verificado</p>
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
          <h2 className="font-headline text-3xl font-bold md:text-4xl">O Que Nossos Pacientes Dizem</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Histórias reais de pessoas que ajudamos em sua jornada para a recuperação.
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
