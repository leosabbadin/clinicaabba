import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Location from '@/components/sections/location';
import Method from '@/components/sections/method';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Method />
      <Testimonials />
      <Location />
    </>
  );
}
