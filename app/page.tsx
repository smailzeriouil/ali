import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export const metadata = {
  title: 'Accueil',
  description:
    "Portfolio de Ali ElGoual — Responsable Commercial Régional. 10+ ans d'expérience en vente, management d'équipe et développement commercial.",
  keywords: [
    'Ali ElGoual',
    'Responsable Commercial Régional',
    "Chef d'équipe commerciale",
    'vente',
    'management',
    'Maroc',
  ],
}

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
