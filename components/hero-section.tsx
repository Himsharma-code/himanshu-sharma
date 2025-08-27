"use client";

import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/himanshu-profile.webp"
                alt="Himanshu Sharma"
                width={96}
                height={96}
                className="rounded-full object-cover border-3 border-[var(--electric-blue)] shadow-lg hover:shadow-xl transition-shadow duration-300"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-[var(--electric-blue)]/20 blur-sm -z-10 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Himanshu Sharma</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MapPinIcon className="h-4 w-4" />
            <span>Surat, India</span>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Building performant, scalable, and user-focused web applications
            with 4 years of experience in modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              size="lg"
              className="bg-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/80 text-white font-medium px-8 animate-pulse-glow"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>

            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="/cv.pdf" download="Himanshu_Sharma_CV.pdf">
                <DownloadIcon className="h-5 w-5 " />
                Download CV
              </a>
            </Button>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/himanshu15101998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/himanshu15101998"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:himanshu15101998@gmail.com">
                  <MailIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="tel:+916352559089">
                  <PhoneIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p>
              4+ Years Experience • React.js • Next.js • TypeScript • Node.js •
              GraphQL
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
