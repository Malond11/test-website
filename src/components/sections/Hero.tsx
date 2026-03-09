"use client";

import { useState, useEffect } from "react";
import { Sparkles, Star, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const rotatingWords = ["Home", "Office", "Space", "Life"];

function FloatingSparkle({
  delay,
  size,
  left,
  top,
}: {
  delay: number;
  size: number;
  left: string;
  top: string;
}) {
  return (
    <Sparkles
      className="absolute text-primary-300/40 animate-float"
      style={{
        width: size,
        height: size,
        left,
        top,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animated counter
  useEffect(() => {
    const target = 500;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50">
      {/* Floating sparkle particles */}
      <FloatingSparkle delay={0} size={20} left="10%" top="20%" />
      <FloatingSparkle delay={1.5} size={14} left="80%" top="15%" />
      <FloatingSparkle delay={3} size={18} left="70%" top="70%" />
      <FloatingSparkle delay={2} size={12} left="20%" top="80%" />
      <FloatingSparkle delay={4} size={16} left="50%" top="10%" />
      <FloatingSparkle delay={1} size={22} left="90%" top="50%" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* Text content with staggered entrance */}
        <div>
          <h1
            className={`font-display text-4xl font-bold leading-tight text-warm-900 transition-all duration-700 md:text-5xl lg:text-6xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            RD Cleaning{" "}
            <span className="relative inline-block overflow-hidden align-bottom">
              <span
                key={rotatingWords[wordIndex]}
                className="inline-block animate-wordSlide text-primary-500"
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
            ,
            <br />
            <span className="text-primary-500">A Happier You</span>
          </h1>

          <p
            className={`mt-6 max-w-lg text-lg text-warm-800/70 transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Professional cleaning services you can trust. We bring the sparkle
            to your home or office so you can focus on what matters most.
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all delay-400 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Button href="/contact" size="lg" className="group">
              Book a Cleaning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>

          {/* Animated trust badges */}
          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all delay-500 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-2 text-sm backdrop-blur-sm transition-transform hover:scale-105">
              <Sparkles className="h-4 w-4 animate-pulse text-primary-400" />
              <span className="font-semibold text-primary-600">{count}+</span>
              <span className="text-warm-800/60">homes trusted</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-secondary-200 bg-white/60 px-4 py-2 text-sm backdrop-blur-sm transition-transform hover:scale-105">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-secondary-400 text-secondary-400"
                  />
                ))}
              </div>
              <span className="text-warm-800/60">5-star rated</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-warm-200 bg-white/60 px-4 py-2 text-sm backdrop-blur-sm transition-transform hover:scale-105">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-warm-800/60">Fully insured</span>
            </div>
          </div>
        </div>

        {/* Animated illustration */}
        <div
          className={`flex items-center justify-center transition-all delay-300 duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
          }`}
        >
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center">
            {/* Pulsing rings */}
            <div className="absolute inset-0 animate-ping-slow rounded-3xl bg-primary-200/30" />
            <div className="absolute inset-4 animate-ping-slower rounded-3xl bg-primary-200/20" />

            {/* Main container */}
            <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200">
              {/* Orbiting icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <Sparkles className="absolute left-1/2 top-4 h-6 w-6 -translate-x-1/2 text-primary-400" />
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <Star className="absolute bottom-8 right-8 h-5 w-5 text-secondary-400" />
              </div>
              <div className="absolute inset-0 animate-spin-slower">
                <Clock className="absolute left-6 top-1/2 h-5 w-5 text-accent/60" />
              </div>

              {/* Center sparkle */}
              <Sparkles className="h-24 w-24 animate-bounce-slow text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
