import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            M.Sulpin Agung Saputra
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-background bg-background">
              <Image
                src="https://media.licdn.com/dms/image/D5603AQFvXtQl7xX2jw/profile-displayphoto-shrink_400_400/0/1699999999999?e=2147483647&v=beta&t=xxxx"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Sulpin</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Web Developer & Designer creating modern and responsive web experiences
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 space-y-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate web developer with a focus on creating beautiful, functional, and user-friendly websites.
              With expertise in modern web technologies, I strive to build digital experiences that make an impact.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-12 md:py-24 space-y-8 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the technologies and tools I work with
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              "HTML & CSS",
              "React",
              "Next.js",
              "Tailwind CSS",
              "UI/UX Design",
            ].map((skill) => (
              <div key={skill} className="flex items-center justify-center rounded-lg border bg-background p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-12 md:py-24 space-y-8">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {[
              {
                title: "E-commerce Website",
                description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Portfolio Website",
                description: "A personal portfolio website showcasing projects and skills.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
              {
                title: "Dashboard UI",
                description: "An admin dashboard with data visualization and user management.",
                image: "/placeholder.svg?height=300&width=500",
                link: "#",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                    <div className="flex justify-between items-center pt-2">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
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
        <section id="contact" className="container py-12 md:py-24 space-y-8 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="mailto:msulpinagungsaputra@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="https://github.com/Sulpin" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="https://www.linkedin.com/in/sulpin-agung-saputra-5211b22b3" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sulpin. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Sulpin" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sulpin-agung-saputra-5211b22b3" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:msulpinagungsaputra@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
