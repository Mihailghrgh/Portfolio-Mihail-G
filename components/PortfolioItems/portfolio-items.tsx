"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Sample data - replace with your actual media files
const portfolioItems = [
  {
    type: "image" as const,
    src: "/marketing1.png",
    title: "Brand Campaign Design",
    description:
      "Creative visual identity and campaign materials for a tech startup launch.",
    size: "large" as const,
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Product Demo Video",
    description:
      "Engaging product demonstration showcasing key features and benefits.",
    size: "medium" as const,
  },
  {
    type: "image" as const,
    src: "/social-media-graphics.png",
    title: "Social Media Graphics",
    description:
      "Cohesive social media visual strategy across multiple platforms.",
    size: "small" as const,
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Brand Story Video",
    description:
      "Compelling brand narrative video highlighting company values and mission.",
    size: "large" as const,
  },
  {
    type: "image" as const,
    src: "/print-advertisement-design.png",
    title: "Print Advertisement",
    description:
      "High-impact print campaign for magazine and outdoor advertising.",
    size: "medium" as const,
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Motion Graphics Reel",
    description:
      "Dynamic motion graphics showcasing animation and visual effects skills.",
    size: "small" as const,
  },
  {
    type: "image" as const,
    src: "/website-design-mockup.png",
    title: "Website Design",
    description:
      "Modern, responsive website design with focus on user experience.",
    size: "large" as const,
  },
  {
    type: "video" as const,
    src: "/placeholder.mp4",
    title: "Commercial Spot",
    description:
      "30-second commercial showcasing creative storytelling and production quality.",
    size: "medium" as const,
  },
];

export default function Portfolio() {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className=" bg-black">
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-space-grotesk font-bold text-3xl text-white mb-6">
            Ready to see my work?
          </h2>
          <p className="font-dm-sans text-slate-300 text-lg mb-8 leading-relaxed">
            Explore my collection of marketing campaigns, brand designs, and
            creative content that drives results.
          </p>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="bg-white text-black px-8 rounded-none font-dm-sans font-medium hover:bg-black transition-colors text-lg  hover:text-white duration-300">
                Open Portfolio
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white border-gray-400 h-[90%]">
              <div className="flex justify-end pr-8">
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black hover:text-gray-500"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
              <DrawerHeader className="border-b border-slate-700">
                <div className="flex flex-col items-center justify-center">
                  <DrawerTitle className="font-space-grotesk font-bold text-4xl text-black">
                    Marketing Portfolio
                  </DrawerTitle>
                  <DrawerDescription className="font-dm-sans text-black">
                    Scroll to explore my creative work
                  </DrawerDescription>
                </div>
              </DrawerHeader>

              <div className="overflow-y-auto flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="space-y-8">
                    <img
                      src="/marketing1.png"
                      alt="Poster 1"
                      className="w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-all"
                    />

                    <img
                      src="marketing2.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <img
                      src="/marketing9.png"
                      alt="Poster 1"
                      className="w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="space-y-8">
                    <img
                      src="marketing2.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-all"
                    />
                    <video
                      src="marketingvideo2.mp4"
                      autoPlay
                      loop
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
                    />
                    <img
                      src="marketing3.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <img
                      src="marketing8.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="space-y-8">
                    <video
                      src="marketingvideo1.mp4"
                      autoPlay
                      loop
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <video
                      src="marketingvideo4.mp4"
                      autoPlay
                      loop
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <img
                      src="marketing6.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-all"
                    />
                    <video
                      src="marketingvideo5.mp4"
                      autoPlay
                      loop
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                  </div>

                  <div className="space-y-8">
                    <img
                      src="marketing4.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <video
                      src="marketingvideo3.mp4"
                      autoPlay
                      loop
                      className="w-full max-w-3xl max-h-[90vh] object-contain rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
                    />
                    <img
                      src="marketing7.png"
                      alt="Poster 2"
                      className="w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-all"
                    />
                  </div>

                  {/* {portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className={`${getSizeClasses(
                        item.size
                      )} group relative overflow-hidden rounded-lg bg-slate-800 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl`}
                    >
                      <div className="absolute inset-0">
                        {item.type === "image" ? (
                          <img
                            src={item.src || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            width="100%"
                            height="auto"
                          />
                        ) : (
                          <video
                            src={item.src}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            onMouseEnter={(e) => e.currentTarget.play()}
                            onMouseLeave={(e) => e.currentTarget.pause()}
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-space-grotesk font-bold text-white text-xl mb-2">
                            {item.title}
                          </h3>
                          <p className="font-dm-sans text-slate-200 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </main>
    </div>
  );
}
