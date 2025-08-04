"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download } from "lucide-react"
import Image from "next/image"

interface ImageShowcaseProps {
  title: string
  description: string
  image: string
  features: string[]
  demoUrl?: string
}

export function ImageShowcase({ title, description, image, features, demoUrl }: ImageShowcaseProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = image
    link.download = `lean-six-sigma-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {demoUrl && (
              <Button size="sm" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Demo
              </Button>
            )}
            <Button size="sm" variant="outline" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
