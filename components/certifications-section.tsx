"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    provider: "Udemy",
    status: "In Progress",
    year: "2024",
    description: "Comprehensive AWS cloud fundamentals and best practices",
    icon: "☁️",
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Dr. Angela Yu",
    status: "Completed",
    year: "2021",
    description: "Full-stack development with modern technologies and frameworks",
    icon: "🎓",
  },
  {
    title: "The Complete JavaScript Course",
    provider: "Jonas Schmedtmann",
    status: "Completed",
    year: "2021",
    description: "Advanced JavaScript concepts, ES6+, and modern development practices",
    icon: "📚",
  },
  {
    title: "BE in Electrical Engineering",
    provider: "Government Engineering College (GEC)",
    status: "Completed",
    year: "2020",
    description: "Bachelor's degree with GPA: 7.41",
    icon: "🎯",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Continuous learning and professional development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex items-center gap-2">
                      <Badge variant={cert.status === "Completed" ? "default" : "secondary"} className="text-xs">
                        {cert.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-poppins leading-tight">{cert.title}</CardTitle>
                  <p className="text-[var(--electric-blue)] font-medium text-sm">{cert.provider}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
