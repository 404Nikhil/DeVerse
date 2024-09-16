import { Container, Icons, Wrapper } from "@/components";
import CTA from "@/components/home/cta";
import FAQsSection from "@/components/home/faq";
import Home from "@/components/home/home";
import Prizes from "@/components/home/prizes";
import Timeline from "@/components/home/timeline";
import Tracks from "@/components/home/tracks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LampContainer } from "@/components/ui/lamp";
import { features, perks, pricingCards, reviews } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, UserIcon, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="w-full relative flex items-center justify-center flex-col">
      {/* hero */}
      <Container>
        <Home />
      </Container>
      <Container>
        <Prizes />
      </Container>
      <Container>
        <Timeline />
      </Container>
      <Container>
        <Tracks />
      </Container>
      <Container>
        <FAQsSection />
      </Container>
      <Container className="max-w-screen-xl">
        <CTA />
      </Container>
    </section>
  );
};

export default HomePage;
