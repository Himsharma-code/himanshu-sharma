"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Product Recommendation System",
    description:
      "Scalable recommendation system using React.js, Nest.js, and pgvector that improved recommendation accuracy by 25%.",
    image: "/images/clime-ecommerce.png", // Updated to use real Clime AI e-commerce image
    technologies: ["React.js", "Nest.js", "pgvector", "PostgreSQL"],
    category: "Full Stack",
  },
  {
    title: "SyncSignature Platform",
    description: "AI-based headshot generator and email signature deployment platform with PWA capabilities.",
    image: "/images/sync-signature.png", // Updated to use real SyncSignature image
    technologies: ["React.js", "Node.js", "GraphQL", "AWS", "PWA"],
    liveUrl: "https://syncsignature.com",
    category: "SaaS Platform",
  },
  {
    title: "Wordle Game",
    description: "React.js-based word guessing game with smooth animations and responsive design.",
    image: "/images/wordle-game.png", // Updated to use real Wordle game image
    technologies: ["React.js", "CSS3", "JavaScript"],
    liveUrl: "https://wordle-game-demo.vercel.app",
    githubUrl: "https://github.com/himanshu15101998/wordle-game",
    category: "Game",
  },
  {
    title: "Text-to-Speech Web App",
    description:
      "Next.js application utilizing Web Speech API for text-to-speech conversion with multiple voice options.",
    image: "/images/text-to-speech.png", // Updated to use real text-to-speech app image
    technologies: ["Next.js", "Web Speech API", "Tailwind CSS"],
    liveUrl: "https://text-to-speech-demo.vercel.app",
    githubUrl: "https://github.com/himanshu15101998/text-to-speech",
    category: "Web App",
  },
  {
    title: "WebRTC File Transfer",
    description:
      "Peer-to-peer file sharing tool using WebRTC for secure and fast file transfers without server storage.",
    image: "/images/webrtc-file-transfer.png", // Updated to use real WebRTC file transfer image
    technologies: ["WebRTC", "JavaScript", "Socket.io"],
    liveUrl: "https://webrtc-file-transfer.vercel.app",
    githubUrl: "https://github.com/himanshu15101998/webrtc-file-transfer",
    category: "P2P Tool",
  },
  {
    title: "Habit Tracker App",
    description:
      "Comprehensive habit tracking application with daily, weekly, and monthly views and progress analytics.",
    image: "/images/habit-tracker.png", // Updated to use real habit tracker image
    technologies: ["React.js", "Chart.js", "Local Storage"],
    liveUrl: "https://habit-tracker-demo.vercel.app",
    githubUrl: "https://github.com/himanshu15101998/habit-tracker",
    category: "Productivity",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="p-0 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-xl font-poppins mb-3 line-clamp-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-shrink-0 bg-transparent">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
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
