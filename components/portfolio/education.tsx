"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "BAC+2 Réseaux Informatiques",
    institution: "OFPPT ISTA Lazzaret",
    location: "Oujda",
    period: "2010 — 2012",
  },
  {
    id: 2,
    degree: "Baccalauréat Sciences (SVT)",
    institution: "Lycée Lalla Asmae",
    location: "Oujda",
    period: "2009 — 2010",
  },
]

const interests = [
  { name: "Commerce & Finance", icon: "💼" },
  { name: "Technologie & Innovation", icon: "💡" },
  { name: "Sport & Fitness", icon: "🏃" },
  { name: "Voyages & Culture", icon: "✈️" },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Académique
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Formation
              </h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personality & Interests */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Personnalité
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Leadership & Soft Skills
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8"
            >
              Un profil alliant rigueur opérationnelle, intelligence relationnelle et
              vision stratégique pour piloter des équipes vers l&apos;excellence.
            </motion.p>

            {/* Numbered soft skills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Management & Coaching",
                "Communication persuasive",
                "Décision stratégique",
                "Orientation performance",
                "Rigueur & Ponctualité",
                "Adaptabilité & Résilience",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-md"
                >
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-background rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Au quotidien — Centres d&apos;intérêt
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span>{interest.name}</span>
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
