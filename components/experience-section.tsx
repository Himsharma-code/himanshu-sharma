"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Space-O Infoweb Pvt. Ltd.",
    location: "Ahmedabad",
    period: "Dec 2024 – Jul 2025",
    achievements: [
      "Engineered a recommendation system using React.js, Nest.js, and pgvector, processing product data from CSV files",
      "Leveraged OpenAI API to generate and store vector embeddings, enabling a 25% improvement in product recommendation accuracy through efficient similarity search",
      "Designed and developed an admin dashboard for a food ordering app, enabling order management, user analytics, and operational oversight",
      "Constructed a multi-tenant admin dashboard with i18n localisation for a global food ordering platform, supporting three languages, and increasing user engagement by 15% across international markets",
      "Set up code generation workflows using Orval in React.js, automating API client generation, and reducing boilerplate code by 30%",
    ],
    technologies: ["React.js", "Nest.js", "pgvector", "OpenAI API", "i18n", "Orval", "Multi-tenant Architecture"],
  },
  {
    title: "Full Stack Developer",
    company: "SyncSignature",
    location: "Surat",
    period: "Feb 2024 – Present",
    achievements: [
      "Led the development across the entire stack, managing both frontend and backend services, and overseeing deployment on AWS infrastructure",
      "Developed frontend components using React.js, integrated with ShadCN UI and styled with Tailwind CSS for a seamless user interface",
      "Created scalable backend services using Node.js and GraphQL, enhancing API performance and user experience",
      "Developed a workspace module allowing multi-user collaboration",
      "Managed email signature deployment using Google APIs",
      "Implemented an AI image generation feature",
      "Converted platform to a Progressive Web App (PWA), reducing load time by 30%",
    ],
    technologies: [
      "React.js",
      "ShadCN UI",
      "Tailwind CSS",
      "Node.js",
      "GraphQL",
      "AWS",
      "Google APIs",
      "AI Integration",
      "PWA",
    ],
  },
  {
    title: "Web Developer",
    company: "Ciphernutz IT Services",
    location: "Surat",
    period: "Oct 2021 – Jan 2024",
    achievements: [
      "Developed a web app using React.js, Reactstrap, SCSS, and WebSocket specifically for tax management of companies, enabling clients to upload documents for review by Admin Team to determine eligibility for government scheme benefits",
      "Established a mono repository with Yarn workspace in Next.js, showcasing proficiency in optimizing project structure and dependencies for streamlined development and maintenance",
      "Developed clue based gaming website, prioritizing an advanced React.js UI with diverse clue sections presenting quests through text, images, and videos, engaging users across multiple formats",
      "Contributed to the development of a tech networking platform using Next.js, enabling job discovery, company exploration, and community engagement within the tech industry",
      "Developed various APIs in Node.js with Express.js for handling data stored in a MongoDB database",
      "Leveraged headless Content Management Systems (CMS) such as Sanity and Strapi to enhance content delivery and management",
      "Implemented the axios-cache-adapter mechanism, resulting in notable performance gains ranging from 20% to 80%",
      "Adopted a Test-Driven Development (TDD) approach by crafting comprehensive test cases utilizing Playwright and Jest",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Reactstrap",
      "SCSS",
      "WebSocket",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Sanity",
      "Strapi",
      "Yarn Workspace",
      "Axios Cache Adapter",
      "Playwright",
      "Jest",
      "TDD",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-[var(--electric-blue)] rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{experience.period}</span>
                        <MapPinIcon className="h-4 w-4 ml-2" />
                        <span>{experience.location}</span>
                      </div>
                      <CardTitle className="text-xl font-poppins">{experience.title}</CardTitle>
                      <p className="text-[var(--electric-blue)] font-medium">{experience.company}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-[var(--neon-green)] mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
