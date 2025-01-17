import { MainContent } from "@/components/details/MainContent";
import { ImageGallery } from "@/components/details/ImageGallery";
import { mockData } from "@/lib/content/details";

export default function Page({ params }: { params: { slug: string } }) {

  return (
    <div className="px-6 md:px-12 w-full mx-auto">
      <MainContent
        companyName={mockData.companyName}
        title={mockData.mainContent.title}
        description={mockData.mainContent.description}
        tabs={mockData.tabs}
      />
      <ImageGallery images={mockData.images} />
    </div>
  )
}
