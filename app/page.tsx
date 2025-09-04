import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/80 dark:border-slate-700/50">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            M.Sulpin Agung Saputra
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors duration-200">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors duration-200">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-500 to-indigo-500 bg-white shadow-2xl shadow-blue-500/25">
              <Image
                src="/profile.png"
                alt="M.Sulpin Agung Saputra"
                width={192}
                height={192}
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  M.Sulpin Agung Saputra
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl lg:text-2xl dark:text-slate-300">
               Web Developer | Frontend Enthusiast | UI/UX Explorer 
               I'm passionate about crafting modern, responsive, and user-friendly digital experiences that bridge creativity and functionality.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 space-y-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300 leading-relaxed">
              I am an enthusiastic Web Developer with a strong foundation in modern technologies and a keen eye for design.  
              I specialize in turning ideas into functional, responsive, and visually engaging websites.  
              My goal is to build digital solutions that not only perform seamlessly but also deliver meaningful user experiences.  
              Beyond coding, I value clean design, usability, and continuous learning.

            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="container py-12 md:py-24 space-y-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
              Here are some of the technologies and tools I work with
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              { name: "HTML & CSS", icon: Code, color: "from-orange-500 to-red-500" },
              { name: "React", icon: Code, color: "from-blue-500 to-cyan-500" },
              { name: "Next.js", icon: Code, color: "from-gray-700 to-gray-900" },
              { name: "Tailwind CSS", icon: Palette, color: "from-teal-500 to-blue-500" },
              { name: "UI/UX Design", icon: Smartphone, color: "from-purple-500 to-pink-500" },
            ].map((skill, index) => (
              <Card
                key={skill.name}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 space-y-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {[
              {
                title: "E-commerce Website",
                description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
                image: "/placeholder.svg?height=300&width=500&text=E-commerce",
                link: "#",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                title: "Portfolio Website",
                description: "A personal portfolio website showcasing projects and skills.",
                image: "/placeholder.svg?height=300&width=500&text=Portfolio",
                link: "#",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Dashboard UI",
                description: "An admin dashboard with data visualization and user management.",
                image: "/placeholder.svg?height=300&width=500&text=Dashboard",
                link: "#",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-slate-800 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex justify-between items-center pt-4">
                      <Link
                        href={project.link}
                        className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:underline transition-all duration-300`}
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="container py-12 md:py-24 space-y-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300">
              Let’s collaborate!  
              Whether you have a project idea or just want to connect, feel free to reach out.  

            </p>
          </div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white/80 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link href="mailto:msulpinagungsaputra@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white/80 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link href="https://github.com/Sulpin" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-white/80 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/sulpin-agung-saputra-5211b22b3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 md:py-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Sulpin. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Sulpin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sulpin-agung-saputra-5211b22b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:msulpinagungsaputra@gmail.com"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
