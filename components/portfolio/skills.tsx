"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Management d'équipe", percentage: 96 },
  { name: "Développement réseau", percentage: 94 },
  { name: "Négociation & Closing", percentage: 93 },
  { name: "Gestion portefeuille", percentage: 92 },
  { name: "Analyse commerciale", percentage: 89 },
  { name: "Architecture réseaux", percentage: 88 },
  { name: "Microsoft Office Suite", percentage: 84 },
]

const softSkills = [
  "Management & Coaching",
  "Communication persuasive",
  "Décision stratégique",
  "Orientation performance",
  "Rigueur & Ponctualité",
  "Adaptabilité & Résilience",
]

const languages = [
  { name: "Arabe", level: "Natif" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
  { name: "Tarifit", level: "Natif" },
]

function SkillBar({ name, percentage, delay }: { name: string; percentage: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Savoir-faire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compétences & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences techniques et relationnelles développées à travers
            une décennie d&apos;expérience en vente et management commercial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Compétences clés
            </h3>
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={0.3 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Soft skills and languages */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Leadership & Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Langues</h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="bg-muted rounded-xl p-4 text-center"
                  >
                    <div className="font-semibold text-foreground">{lang.name}</div>
                    <div className="text-sm text-muted-foreground">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
