"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageShowcase } from "@/components/image-showcase"
import { Copy, Share2, Download, Linkedin, Twitter, Facebook } from "lucide-react"
import { useState } from "react"

const marketingImages = [
  {
    title: "Dashboard Principal",
    description: "Interface moderna com analytics e navegação intuitiva",
    image: "/images/dashboard-hero.png",
    features: ["Analytics", "UI Moderna", "Navegação", "Responsivo"],
  },
  {
    title: "Sistema de Gamificação",
    description: "XP, níveis, badges e ranking para engajamento",
    image: "/images/gamification-system.png",
    features: ["XP System", "Badges", "Ranking", "Conquistas"],
  },
  {
    title: "Ferramentas Estatísticas",
    description: "Calculadoras e gráficos de controle profissionais",
    image: "/images/statistical-tools.png",
    features: ["Gráficos de Controle", "Cp/Cpk", "Análises", "Visualizações"],
  },
]

const socialPosts = {
  linkedin: `🚀 Acabei de desenvolver uma plataforma completa de treinamento Lean Six Sigma Yellow Belt!

✨ Principais recursos:
🔹 Módulos DMAIC Completos
🔹 Ferramentas Estatísticas Avançadas  
🔹 Sistema de Gamificação
🔹 Certificação Digital
🔹 Design Responsivo

🛠️ Stack: Next.js 14, TypeScript, Tailwind CSS
🎯 100% gratuito e open source

#LeanSixSigma #YellowBelt #WebDevelopment #NextJS #QualityManagement`,

  twitter: `🚀 Nova plataforma Lean Six Sigma Yellow Belt!

✅ Módulos DMAIC interativos
✅ Gamificação completa  
✅ Ferramentas estatísticas
✅ Certificação digital
✅ 100% gratuito

#LeanSixSigma #WebDev #OpenSource`,

  facebook: `🎯 Orgulhoso de apresentar minha nova criação: uma plataforma completa de treinamento Lean Six Sigma Yellow Belt!

Esta solução web interativa revoluciona o aprendizado com:
• Módulos DMAIC completos e interativos
• Sistema de gamificação com XP e badges
• Ferramentas estatísticas profissionais
• Certificação digital oficial
• Interface moderna e responsiva

Desenvolvida com Next.js 14, TypeScript e as melhores práticas de UX/UI. 

A plataforma é 100% gratuita e open source, democratizando o acesso ao conhecimento de melhoria contínua!`,
}

export default function Marketing() {
  const [copiedPost, setCopiedPost] = useState<string | null>(null)

  const copyToClipboard = async (text: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPost(platform)
      setTimeout(() => setCopiedPost(null), 2000)
    } catch (error) {
      console.error("Erro ao copiar:", error)
    }
  }

  const downloadAllImages = () => {
    marketingImages.forEach((item, index) => {
      setTimeout(() => {
        const link = document.createElement("a")
        link.href = item.image
        link.download = `lean-six-sigma-${item.title.toLowerCase().replace(/\s+/g, "-")}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 500)
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Kit de Marketing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Imagens promocionais e textos prontos para divulgar o projeto Lean Six Sigma Yellow Belt nas redes sociais.
        </p>
      </div>

      {/* Imagens Promocionais */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Imagens Promocionais</h2>
          <Button onClick={downloadAllImages} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Todas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingImages.map((item) => (
            <ImageShowcase key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Posts para Redes Sociais */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Posts para Redes Sociais</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LinkedIn */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-600" />
                LinkedIn
              </CardTitle>
              <CardDescription>Post profissional detalhado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg mb-4 text-sm whitespace-pre-line">{socialPosts.linkedin}</div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(socialPosts.linkedin, "linkedin")}
                  className="flex-1"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copiedPost === "linkedin" ? "Copiado!" : "Copiar"}
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`,
                    )
                  }
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Twitter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Twitter className="w-5 h-5 text-blue-400" />
                Twitter/X
              </CardTitle>
              <CardDescription>Post conciso e direto</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg mb-4 text-sm whitespace-pre-line">{socialPosts.twitter}</div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(socialPosts.twitter, "twitter")}
                  className="flex-1"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copiedPost === "twitter" ? "Copiado!" : "Copiar"}
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(socialPosts.twitter)}`)
                  }
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Tweetar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-blue-700" />
                Facebook
              </CardTitle>
              <CardDescription>Post detalhado para engajamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg mb-4 text-sm whitespace-pre-line">{socialPosts.facebook}</div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(socialPosts.facebook, "facebook")}
                  className="flex-1"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copiedPost === "facebook" ? "Copiado!" : "Copiar"}
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`,
                    )
                  }
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dicas de Marketing */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Dicas de Marketing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>📱 Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Badge className="mb-2">LinkedIn</Badge>
                <p className="text-sm text-muted-foreground">
                  Foque no aspecto profissional e técnico. Mencione tecnologias e benefícios para empresas.
                </p>
              </div>
              <div>
                <Badge className="mb-2">Twitter</Badge>
                <p className="text-sm text-muted-foreground">
                  Use hashtags relevantes e seja conciso. Destaque o aspecto open source.
                </p>
              </div>
              <div>
                <Badge className="mb-2">Facebook</Badge>
                <p className="text-sm text-muted-foreground">
                  Conte a história do projeto e o impacto esperado na educação.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 Estratégias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Timing
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Poste durante horários de pico: 9h-11h e 14h-16h em dias úteis.
                </p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Hashtags
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Use hashtags específicas como #LeanSixSigma, #QualityManagement, #WebDev.
                </p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Engajamento
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Responda comentários rapidamente e faça perguntas para gerar discussão.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
