"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "SCSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "NestJS", "GraphQL", "Express.js", "REST APIs"],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Docker", "Git", "GitHub", "AWS EC2", "S3", "Vercel", "Lighthouse"],
  },
  {
    title: "Other",
    icon: "🚀",
    skills: ["PWA", "i18n", "WebSocket", "Microfrontends", "SEO", "Jest", "React Testing Library"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl font-poppins">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover:bg-[var(--electric-blue)]/20 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
