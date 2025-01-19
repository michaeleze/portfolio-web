"use client"

import { MainContent } from "@/components/MainContent"
import { ImageGallery } from "@/components/ImageGallery"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { ProjectImages } from "@/components/ProjectImages"
import { mockData } from "@/lib/mockData"
import { motion } from "framer-motion"
import React, { Usable } from "react"

const deepSoundsImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20at%2002.06.45-SAd7ps6PKy18bKY0ilnaeGXxGaliXh.png",
    alt: "DJ mixer with red lighting"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20at%2002.06.45-SAd7ps6PKy18bKY0ilnaeGXxGaliXh.png",
    alt: "Deep Sounds platform UI"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20at%2002.06.45-SAd7ps6PKy18bKY0ilnaeGXxGaliXh.png",
    alt: "Deep Sounds branding"
  }
]

export default function Page({ params }: { params: Usable<{ slug: string }> }) {
  const { slug } = React.use(params);
  const isDeepSounds = slug === "deep-sounds"

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isDeepSounds ? (
        <ProjectImages images={deepSoundsImages} />
      ) : (
        <main className="px-6 md:px-12 w-full mx-auto">
          <MainContent
            companyName={mockData.companyName}
            title={mockData.mainContent.title}
            description={mockData.mainContent.description}
            tabs={mockData.tabs}
          />
          <ImageGallery images={mockData.images} />
        </main>
      )}
    </div>
  )
}
