import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContentTabsProps {
  tabs: {
    [key: string]: {
      title: string;
      content: string[];
    }
  }
}

export function ContentTabs({ tabs }: ContentTabsProps) {
  return (
    <Tabs defaultValue="services" className="w-full">
      <TabsList className="grid w-full grid-cols-2 rounded-full">
        {Object.keys(tabs).map((tabKey) => (
          <TabsTrigger key={tabKey} value={tabKey} className="rounded-full text-xs md:text-sm">
            {tabs[tabKey].title}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(tabs).map(([tabKey, tabData]) => (
        <TabsContent key={tabKey} value={tabKey} className="mt-4">
          {tabData.content.map((item, index) => (
            <p key={index} className="text-xs md:text-sm mb-2">
              {item}
            </p>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}

