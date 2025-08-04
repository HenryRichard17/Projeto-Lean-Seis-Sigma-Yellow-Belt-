"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Share2, Eye, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projectImages = [
  {
    id: 1,
    title: "Dashboard Principal",
    description: "Interface principal com estatísticas e navegação intuitiva",
    image: "/images/dashboard-hero.png",
    category: "Interface",
    tags: ["Dashboard", "UI/UX", "Analytics"],
  },
  {
    id: 2,
    title: "Módulos DMAIC",
    description: "Cinco módulos interativos da metodologia DMAIC",
    image: "/images/dmaic-modules.png",
    category: "Módulos",
    tags: ["DMAIC", "Metodologia", "Treinamento"],
  },
  {
    id: 3,
    title: "Sistema de Gamificação",
    description: "XP, níveis, badges e ranking para engajamento",
    image: "/images/gamification-system.png",
    category: "Gamificação",
    tags: ["XP", "Badges", "Ranking", "Engajamento"],
  },
  {
    id: 4,
    title: "Ferramentas Estatísticas",
    description: "Calculadoras e gráficos de controle avançados",
    image: "/images/statistical-tools.png",
    category: "Ferramentas",
    tags: ["Estatística", "Gráficos", "Análise"],
  },
  {
    id: 5,
    title: "Certificação Digital",
    description: "Certificado profissional Yellow Belt para download",
    image: "/images/certification-badge.png",
    category: "Certificação",
    tags: ["Certificado", "Yellow Belt", "Profissional"],
  },
  {
    id: 6,
    title: "Design Responsivo",
    description: "Interface adaptada para mobile e tablet",
    image: "/images/mobile-responsive.png",
    category: "Responsivo",
    tags: ["Mobile", "Tablet", "Responsivo"],
  },
]

export default function Gallery() {
  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `lean-six-sigma-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async (title: string, imageUrl: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Lean Six Sigma Platform - ${title}`,
          text: "Confira esta plataforma incrível de treinamento Lean Six Sigma!",
          url: window.location.origin + imageUrl,
        })
      } catch (error) {
        console.log("Erro ao compartilhar:", error)
      }
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.origin + imageUrl)
      alert("URL copiada para a área de transferência!")
    }
  }

  const downloadAll = () => {
    projectImages.forEach((item, index) => {
      setTimeout(() => {
        handleDownload(item.image, item.title)
      }, index * 500) // Delay para evitar bloqueio do browser
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Galeria do Projeto</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Explore as principais funcionalidades da plataforma Lean Six Sigma Yellow Belt
          </p>
        </div>
        <Button onClick={downloadAll} className="hidden md:flex">
          <Download className="w-4 h-4 mr-2" />
          Download Todas
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{projectImages.length}</div>
            <div className="text-sm text-muted-foreground">Imagens</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">6</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">HD</div>
            <div className="text-sm text-muted-foreground">Qualidade</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">Free</div>
            <div className="text-sm text-muted-foreground">Download</div>
          </CardContent>
        </Card>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projectImages.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="relative aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
              <Image
                src={item.image || "/placeholder.svg?height=300&width=500&text=" + encodeURIComponent(item.title)}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/90 text-black">
                  {item.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(item.image, "_blank")}
                  className="bg-white/90 text-black hover:bg-white"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Ver Ampliado
                </Button>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription className="text-sm">{item.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(item.image, "_blank")}
                  className="flex-1"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Ver
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(item.image, item.title)}
                  className="flex-1"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleShare(item.title, item.image)}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* About Section */}
      <div className="mt-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sobre as Imagens do Projeto</CardTitle>
            <CardDescription className="text-lg">
              Estas imagens foram criadas para demonstrar as principais funcionalidades da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dashboard Principal</h4>
                    <p className="text-sm text-muted-foreground">
                      Interface moderna com estatísticas em tempo real, progresso do usuário e navegação intuitiva entre
                      módulos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Módulos DMAIC</h4>
                    <p className="text-sm text-muted-foreground">
                      Cinco módulos interativos cobrindo toda a metodologia DMAIC com templates, exercícios e
                      avaliações.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">🎮</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sistema de Gamificação</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistema completo de XP, níveis, badges e ranking para manter os usuários engajados no aprendizado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ferramentas Estatísticas</h4>
                    <p className="text-sm text-muted-foreground">
                      Calculadoras avançadas, gráficos de controle e análises estatísticas para aplicação prática dos
                      conceitos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Certificação Digital</h4>
                    <p className="text-sm text-muted-foreground">
                      Certificado profissional Yellow Belt para download após conclusão do curso e aprovação no exame.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Design Responsivo</h4>
                    <p className="text-sm text-muted-foreground">
                      Interface totalmente adaptada para dispositivos móveis, tablets e desktops com experiência
                      otimizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="text-center space-y-4">
                <h4 className="font-semibold text-lg">Especificações Técnicas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Resolução</div>
                    <div className="text-muted-foreground">1920x1080 HD</div>
                  </div>
                  <div>
                    <div className="font-medium">Formato</div>
                    <div className="text-muted-foreground">PNG/JPG</div>
                  </div>
                  <div>
                    <div className="font-medium">Licença</div>
                    <div className="text-muted-foreground">Open Source</div>
                  </div>
                  <div>
                    <div className="font-medium">Uso</div>
                    <div className="text-muted-foreground">Comercial OK</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Gostou do Projeto?</h3>
            <p className="text-muted-foreground mb-6">
              Explore a plataforma completa e descubra todas as funcionalidades interativas do nosso sistema de
              treinamento Lean Six Sigma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  Explorar Plataforma
                </Button>
              </Link>
              <Link href="/marketing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Kit de Marketing
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
