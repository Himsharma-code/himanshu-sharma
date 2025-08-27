"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden p-0">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-[var(--electric-blue)]/20 to-[var(--neon-green)]/20 flex items-center justify-center p-8">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--electric-blue)]">
                    <Image
                      src="/images/himanshu-profile.webp"
                      alt="Himanshu Sharma"
                      width={500}
                      height={500}
                      priority
                      className="object-cover  w-full h-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-4">
                Full Stack Web Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 4 years of experience in web development, I specialize in
                building performant and scalable web applications. My expertise
                spans across modern JavaScript frameworks, backend technologies,
                and cloud platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm passionate about performance optimization, distributed
                systems, and creating user-focused solutions. I've successfully
                led teams, mentored junior developers, and delivered projects
                that improved business metrics significantly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[var(--electric-blue)] mb-2">
                  4
                </h4>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--neon-green)] mb-2">
                  15+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--electric-blue)] mb-2">
                  3+
                </h4>
                <p className="text-sm text-muted-foreground">
                  Developers Mentored
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--neon-green)] mb-2">
                  25%
                </h4>
                <p className="text-sm text-muted-foreground">
                  Performance Improvement
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
