"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Tab {
  name: string
  slug: string
}

const tabs: Tab[] = [
  { name: "For anyone", slug: "anyone" },
  { name: "Recruiters", slug: "recruiters" },
  { name: "Design Directors", slug: "design-directors" },
  { name: "Product Designers", slug: "product-designers" },
  { name: "Product Managers", slug: "product-managers" },
  { name: "Engineers", slug: "engineers" }
]

interface TabNavProps {
  currentTab: string
}

export function TabNav({ currentTab }: TabNavProps) {
  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex gap-6 min-w-max px-6 md:px-12">
        {tabs.map((tab) => (
          <Link 
            key={tab.slug}
            href={`/roles/${tab.slug}`}
            className={`py-4 ${
              currentTab === tab.slug 
                ? 'text-foreground' 
                : 'text-muted-foreground hover:text-foreground transition-colors'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

