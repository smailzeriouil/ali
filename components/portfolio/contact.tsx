"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 00 36 10 63",
    href: "tel:+212600361063",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alielgoual@gmail.com",
    href: "mailto:alielgoual@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Oujda, Maroc",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ali ElGoual",
    href: "https://www.linkedin.com/in/elgoual-ali-9a6a8375",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Prendre contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Disponible pour nouvelles opportunités
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ouvert à de nouveaux défis en management commercial, développement réseau
            ou direction régionale.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-lg">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4">Travaillons ensemble</h3>
              <p className="mb-6 opacity-90">
                Je suis ouvert aux discussions concernant des opportunités en management
                commercial et développement de réseaux de vente.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="https://mail.google.com/mail/?view=cm&to=alielgoual@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer un message
                </a>
              </Button>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}
