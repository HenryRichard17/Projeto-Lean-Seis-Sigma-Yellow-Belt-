"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, TrendingUp, Users, Award, Calculator } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const modules = [
    {
      id: "introduction",
      title: "Introdução ao Lean Six Sigma",
      description: "Fundamentos, história e benefícios",
      progress: 100,
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      id: "define",
      title: "Define (Definir)",
      description: "Definição do problema e escopo do projeto",
      progress: 85,
      icon: Target,
      color: "bg-green-500",
    },
    {
      id: "measure",
      title: "Measure (Medir)",
      description: "Coleta e análise de dados baseline",
      progress: 70,
      icon: TrendingUp,
      color: "bg-yellow-500",
    },
    {
      id: "analyze",
      title: "Analyze (Analisar)",
      description: "Identificação de causas raiz",
      progress: 60,
      icon: Calculator,
      color: "bg-orange-500",
    },
    {
      id: "improve",
      title: "Improve (Melhorar)",
      description: "Implementação de soluções",
      progress: 45,
      icon: TrendingUp,
      color: "bg-purple-500",
    },
    {
      id: "control",
      title: "Control (Controlar)",
      description: "Sustentação das melhorias",
      progress: 30,
      icon: Users,
      color: "bg-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lean Six Sigma</h1>
                <p className="text-sm text-gray-600">Yellow Belt Training Platform</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Yellow Belt
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domine o Lean Six Sigma Yellow Belt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda a metodologia DMAIC, ferramentas estatísticas e técnicas de melhoria contínua para eliminar
            desperdícios e reduzir variabilidade em processos.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Progresso Geral do Curso
            </CardTitle>
            <CardDescription>Acompanhe seu desenvolvimento através dos módulos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Progresso Total</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-3" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600">Módulos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-gray-600">Ferramentas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Exercícios</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => {
            const IconComponent = module.icon
            return (
              <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline">{module.progress}%</Badge>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Progress value={module.progress} className="h-2" />
                    <Link href={`/modules/${module.id}`}>
                      <Button className="w-full">{module.progress === 100 ? "Revisar" : "Continuar"}</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Access Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Ferramentas Estatísticas
              </CardTitle>
              <CardDescription>Calculadoras e ferramentas para análise de dados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/tools/statistics">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Calculadora de Cp/Cpk
                  </Button>
                </Link>
                <Link href="/tools/control-charts">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Gráficos de Controle
                  </Button>
                </Link>
                <Link href="/tools/histogram">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Gerador de Histograma
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Templates de Projeto
              </CardTitle>
              <CardDescription>Modelos prontos para seus projetos Six Sigma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/templates/project-charter">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Project Charter
                  </Button>
                </Link>
                <Link href="/templates/sipoc">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Diagrama SIPOC
                  </Button>
                </Link>
                <Link href="/templates/fishbone">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Diagrama Ishikawa
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
