"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, TrendingUp, Users, Award, Calculator, Trophy, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

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

  const quickStats = user
    ? [
        { label: "Nível", value: user.level, icon: Trophy, color: "text-blue-600" },
        { label: "XP", value: user.xp, icon: Zap, color: "text-green-600" },
        { label: "Módulos", value: `${user.completedModules}/6`, icon: BookOpen, color: "text-purple-600" },
        { label: "Streak", value: "7 dias", icon: Award, color: "text-orange-600" },
      ]
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Lean Six Sigma</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Yellow Belt Training Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <UserNav />
              <Badge
                variant="secondary"
                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              >
                Yellow Belt
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Domine o Lean Six Sigma Yellow Belt</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprenda a metodologia DMAIC, ferramentas estatísticas e técnicas de melhoria contínua para eliminar
            desperdícios e reduzir variabilidade em processos.
          </p>
        </div>

        {/* User Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index}>
                  <CardContent className="p-4 text-center">
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">6</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Módulos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ferramentas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Exercícios</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conquistas</div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Gamificação
              </CardTitle>
              <CardDescription>Acompanhe seu progresso e conquistas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/gamification">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Ver Conquistas
                  </Button>
                </Link>
                <Link href="/certification">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Certificação
                  </Button>
                </Link>
                <Link href="/leaderboard">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Ranking
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        {!user && (
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comece sua jornada hoje!</h3>
              <p className="text-blue-100 mb-6">
                Cadastre-se gratuitamente e tenha acesso a todos os módulos, ferramentas e certificação.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/auth/register">
                  <Button size="lg" variant="secondary">
                    Cadastrar Grátis
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Fazer Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
