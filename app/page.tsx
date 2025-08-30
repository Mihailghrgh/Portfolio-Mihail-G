"use client";

import Image from "next/image";
import Navigation from "@/components/navigation";
import DarkVeil from "@/components/DarkVeil";
import { TextReveal } from "@/components/magicui/text-reveal";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import Footer from "@/components/footer";
import { useState } from "react";
import { portfolioImages } from "@/components/portfolio";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import { servicesEnglish } from "@/components/TextFiles/servicesEnglish";
import { servicesRomanian } from "@/components/TextFiles/servicesRomanian";
import { ProjectsSection } from "@/components/Projects/Projects";
import { textEnglish, textRomanian } from "@/components/magicui/textEnglish";
import { skills } from "@/components/TextFiles/techstack";
import porftolioItems from '../components/PortfolioItems/portfolio-items'
import Portfolio from "../components/PortfolioItems/portfolio-items";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef1 = useRef<HTMLHeadingElement>(null);
  const headlineRef2 = useRef<HTMLHeadingElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section entrance animation
    const tl = gsap.timeline();

    tl.fromTo(
      headlineRef2.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      headlineRef1.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        tickerRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

    // Services cards stagger animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // Work items animation
    gsap.fromTo(
      ".work-item",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
        },
      }
    );

    // Process steps animation
    gsap.fromTo(
      ".process-step",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
      }
    );

    // Section headers animation
    gsap.fromTo(
      ".section-header",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 85%",
        },
      }
    );

    // Testimonial cards animation
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, rotateY: 15 },
      {
        opacity: 1,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 80%",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const firstColumn = skills.slice(0, 3);
  const secondColumn = skills.slice(4, 8);
  const thirdColumn = skills.slice(8, 12);

  const [language, setLanguage] = useState<string>("english");

  return (
    <div className="bg-black text-white">
      <Navigation setLanguage={setLanguage} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-end h-screen px-6 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <DarkVeil
            hueShift={10}
            noiseIntensity={0.02}
            scanlineIntensity={0.05}
            speed={1}
            scanlineFrequency={0.5}
            warpAmount={0.1}
            resolutionScale={0.8}
          />
        </div>

        <div className="relative z-20 max-w-4xl w-full">
          <div>
            <h1
              ref={headlineRef2}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-left"
            >
              Mihail Gheorghe
            </h1>
          </div>
          <div>
            <h1
              ref={headlineRef1}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-left"
            >
              {language === "english"
                ? "Crafting Website Designs"
                : "Creează un Website"}
              <br />
              {language === "english"
                ? "That Drives Results"
                : "Care aduce Rezultate"}
            </h1>
          </div>
        </div>

        <div
          ref={tickerRef}
          className="relative z-20 w-screen -mx-6 overflow-hidden mb-6"
        >
          <div className="flex animate-scroll">
            {/* First set of images */}
            {portfolioImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-40 relative overflow-hidden rounded-lg mr-3 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {portfolioImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-40 relative overflow-hidden rounded-lg mr-3 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Portfolio />
      </div>

      {/* <section
        ref={servicesRef}
        className="bg-black px-6 py-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="section-header text-center text-3xl md:text-4xl font-light mb-16">
            {language === "english" ? "Offered Services" : "Șerviciile oferite"}
          </h2>
          <div>
            <ServiceSection
              services={
                language === "english" ? servicesEnglish : servicesRomanian
              }
            />
          </div>
        </div>
      </section> */}

      <ProjectsSection
        heading={
          language === "english"
            ? "Website designs & Projects"
            : "Design-uri de website & Proiecte"
        }
      />

      <section className="bg-black px-6 border-t border-white/10">
        <div className="max-w-6xl pt-8 text-center mx-auto section-header">
          <h2 className="section-header text-3xl md:text-4xl font-light mb-16">
            {language === "english" ? "About me" : "Despre mine"}
          </h2>
          <TextReveal
            text1={language === "english" ? textEnglish : textRomanian}
            className="text-white/80"
          />
        </div>
      </section>

      <section className="bg-black px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-6">
              Tech Stack
            </h2>
            <p className="text-center text-white/70">
              {language === "english"
                ? "The technologies used as Full-Stack Engineer"
                : "Tehnologiile folosite ca Full-Stack Engineer"}
            </p>
          </div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
