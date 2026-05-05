import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
