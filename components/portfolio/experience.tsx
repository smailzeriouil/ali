"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Responsable Commercial Régional",
    subtitle: "Chef d'Équipe Commerciale",
    company: "M2T — Maroc de Traitement",
    location: "Région Orientale, Maroc",
    period: "Janvier 2020 — Aujourd'hui",
    current: true,
    responsibilities: [
      "Management d'une équipe de 6 délégués commerciaux : recrutement, formation terrain, coaching individuel et évaluation de performance.",
      "Pilotage des objectifs régionaux et suivi des KPIs hebdomadaires (taux de conversion, CA, adhésions).",
      "Développement et animation d'un réseau de plus de 250 points de vente actifs (Tasshilat & Chaabi Cash).",
      "Prospection et intégration de nouveaux agents avec suivi complet de l'onboarding.",
      "Production de reportings et tableaux de bord pour la direction générale.",
      "Veille concurrentielle et remontée des insights terrain pour orienter la politique commerciale.",
    ],
    tags: ["Management", "KPIs", "Réseau 250+", "Coaching", "Reporting"],
  },
  {
    id: 2,
    title: "Conseiller Commercial",
    company: "Yasmine Signature Immobilier",
    location: "Oujda",
    period: "Septembre 2014 — Septembre 2016",
    current: false,
    responsibilities: [
      "Gestion complète du cycle de vente : prospection, découverte des besoins, simulation financière et négociation.",
      "Développement de partenariats avec banques et établissements de crédit pour faciliter le financement clients.",
      "Animation d'espaces de vente premium et fidélisation d'une clientèle exigeante.",
      "Dépassement régulier des objectifs mensuels à 120% grâce à une approche consultative et un suivi CRM rigoureux.",
    ],
    tags: ["Immobilier", "Vente", "CRM", "Négociation", "120% objectifs"],
  },
  {
    id: 3,
    title: "Resp. Adjoint → Resp. d'Agence → Animateur Régional",
    company: "WAFACASH",
    location: "Oujda puis Région Orientale",
    period: "Septembre 2012 — Août 2014",
    current: false,
    responsibilities: [
      "Management d'équipes de 4 à 8 collaborateurs, supervision des opérations et garantie de la qualité de service.",
      "Pilotage de la performance commerciale et suivi des indicateurs de satisfaction client (NPS).",
      "Contrôle des opérations sensibles : Western Union, Cash Express, change de devises, crédits SALAF CASH.",
      "Animateur Régional : accompagnement et formation de 12 agences de la région Orientale.",
      "Gestion rigoureuse de la trésorerie et conformité aux réglementations de Bank Al-Maghrib.",
    ],
    tags: ["Finance", "Trésorerie", "Formation", "NPS", "Conformité"],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
        className={`absolute left-0 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
          experience.current
            ? "bg-accent ring-4 ring-accent/20"
            : "bg-primary ring-4 ring-primary/20"
        }`}
      />

      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            {experience.current && (
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2">
                Poste actuel
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
            {experience.subtitle && (
              <p className="text-primary font-medium">{experience.subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Company info */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="font-medium">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Responsibilities */}
        <ul className="space-y-3 mb-6">
          {experience.responsibilities.map((resp, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-muted-foreground text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{resp}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.05 }}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Parcours
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            10+ années de résultats concrets en vente, management et développement
            commercial dans la région Orientale du Maroc.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Références disponibles sur demande
        </motion.p>
      </div>
    </section>
  )
}
