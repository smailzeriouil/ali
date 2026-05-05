"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">Ali ElGoual</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Oujda, Maroc · 06 00 36 10 63 · Références disponibles sur demande
          </p>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ali ElGoual. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
