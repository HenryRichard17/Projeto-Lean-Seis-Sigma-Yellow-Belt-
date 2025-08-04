"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Star, Target, Zap, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function GamificationPage() {
  const userStats = {
    level: 3,
    xp: 1250,
    xpToNext: 1500,
    streak: 7,
    totalPoints: 3420,
    completedModules: 2,
    totalModules: 6,
  }

  const badges = [
    {
      id: 1,
      name: "Primeiro Passo",
      description: "Completou o primeiro módulo",
      icon: Star,
      earned: true,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      name: "Estatístico",
      description: "Usou 5 ferramentas estatísticas",
      icon: TrendingUp,
      earned: true,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      name: "Consistente",
      description: "7 dias consecutivos de estudo",
      icon: Zap,
      earned: true,
      color: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      name: "Project Charter",
      description: "Criou seu primeiro Project Charter",
      icon: Target,
      earned: false,
      color: "bg-gray-100 text-gray-400",
    },
    {
      id: 5,
      name: "DMAIC Master",
      description: "Completou todos os módulos DMAIC",
      icon: Trophy,
      earned: false,
      color: "bg-gray-100 text-gray-400",
    },
    {
      id: 6,
      name: "Yellow Belt",
      description: "Conquistou a certificação Yellow Belt",
      icon: Award,
      earned: false,
      color: "bg-gray-100 text-gray-400",
    },
  ]

  const leaderboard = [
    { rank: 1, name: "Ana Silva", points: 5240, level: 5 },
    { rank: 2, name: "Carlos Santos", points: 4890, level: 4 },
    { rank: 3, name: "Você", points: 3420, level: 3 },
    { rank: 4, name: "Maria Oliveira", points: 3180, level: 3 },
    { rank: 5, name: "João Costa", points: 2950, level: 3 },
  ]

  const challenges = [
    { id: 1, title: "Calculadora Cp/Cpk", description: "Use a calculadora 3 vezes", progress: 2, target: 3, xp: 100 },
    { id: 2, title: "Módulo Define", description: "Complete o módulo Define", progress: 0, target: 1, xp: 500 },
    { id: 3, title: "Streak Semanal", description: "Estude por 7 dias consecutivos", progress: 7, target: 7, xp: 200 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gamificação</h1>
              <p className="text-sm text-gray-600">Acompanhe seu progresso e conquistas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">Nível {userStats.level}</div>
              <div className="text-sm text-gray-600 mb-3">Yellow Belt em Progresso</div>
              <Progress value={(userStats.xp / userStats.xpToNext) * 100} className="h-2" />
              <div className="text-xs text-gray-500 mt-2">
                {userStats.xp}/{userStats.xpToNext} XP
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{userStats.streak}</div>
              <div className="text-sm text-gray-600">Dias Consecutivos</div>
              <Zap className="w-8 h-8 mx-auto mt-2 text-green-500" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{userStats.totalPoints}</div>
              <div className="text-sm text-gray-600">Pontos Totais</div>
              <Star className="w-8 h-8 mx-auto mt-2 text-purple-500" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {userStats.completedModules}/{userStats.totalModules}
              </div>
              <div className="text-sm text-gray-600">Módulos Completos</div>
              <Trophy className="w-8 h-8 mx-auto mt-2 text-orange-500" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Conquistas
              </CardTitle>
              <CardDescription>Badges conquistadas e disponíveis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {badges.map((badge) => {
                  const IconComponent = badge.icon
                  return (
                    <div
                      key={badge.id}
                      className={`flex items-center gap-3 p-3 rounded-lg ${badge.earned ? "bg-white border" : "bg-gray-50"}`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${badge.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${badge.earned ? "text-gray-900" : "text-gray-500"}`}>
                          {badge.name}
                        </h4>
                        <p className={`text-sm ${badge.earned ? "text-gray-600" : "text-gray-400"}`}>
                          {badge.description}
                        </p>
                      </div>
                      {badge.earned && <Badge className="bg-green-100 text-green-800">Conquistado</Badge>}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Ranking
              </CardTitle>
              <CardDescription>Top 5 usuários da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${user.name === "Você" ? "bg-blue-50 border border-blue-200" : "bg-gray-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        user.rank === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : user.rank === 2
                            ? "bg-gray-100 text-gray-800"
                            : user.rank === 3
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {user.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-600">Nível {user.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{user.points}</div>
                      <div className="text-sm text-gray-600">pontos</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Challenges */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Desafios Ativos
            </CardTitle>
            <CardDescription>Complete os desafios para ganhar XP extra</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{challenge.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>
                        {challenge.progress}/{challenge.target}
                      </span>
                    </div>
                    <Progress value={(challenge.progress / challenge.target) * 100} className="h-2" />
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">+{challenge.xp} XP</Badge>
                      {challenge.progress >= challenge.target && (
                        <Badge className="bg-green-100 text-green-800">Completo!</Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
