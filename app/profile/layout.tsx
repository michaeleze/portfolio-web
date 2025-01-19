import { ProjectsGrid } from "@/components/ProjectsGrid"

export default function Home({children}: {children: React.ReactNode}) {
  return (
    <div className="">
      <ProjectsGrid currentSlug="" />
      {children}
    </div>
  )
}
