"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaCardProps {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  className?: string;
}

export function MediaCard({
  type,
  src,
  title,
  description,
  className,
}: MediaCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <Card
        className={cn(
          "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
      >
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden">
            {type === "image" ? (
              <img
                src={src || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onClick={openLightbox}
              />
            ) : (
              <div
                className="relative w-full h-full bg-muted"
                onClick={openLightbox}
              >
                <video
                  src={src}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-space-grotesk font-bold text-lg mb-2 text-balance">
              {title}
            </h3>
            <p className="text-muted-foreground font-dm-sans text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-full">
            {type === "image" ? (
              <img
                src={src || "/placeholder.svg"}
                alt={title}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <video
                src={src}
                controls
                autoPlay
                className="max-w-full max-h-full"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
