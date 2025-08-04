"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle, Clock, TrendingUp, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function IntroductionModule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Introdução ao Lean Six Sigma</h1>
                <p className="text-sm text-gray-600">Módulo 1 - Fundamentos</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 mr-1" />
              Completo
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Progresso do Módulo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Completo</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>História do Six Sigma</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Princípios do Lean</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Metodologia DMAIC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Benefícios e ROI</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="history">História</TabsTrigger>
                <TabsTrigger value="principles">Princípios</TabsTrigger>
                <TabsTrigger value="benefits">Benefícios</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />O que é Lean Six Sigma?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Lean Six Sigma é uma metodologia de melhoria de processos que combina os princípios do{" "}
                      <strong>Lean Manufacturing</strong> (foco na eliminação de desperdícios) com as ferramentas
                      estatísticas do <strong>Six Sigma</strong> (foco na redução da variabilidade).
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Lean</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Eliminação de desperdícios</li>
                          <li>• Fluxo contínuo</li>
                          <li>• Valor para o cliente</li>
                          <li>• Melhoria contínua (Kaizen)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Six Sigma</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Redução da variabilidade</li>
                          <li>• Decisões baseadas em dados</li>
                          <li>• Metodologia DMAIC</li>
                          <li>• Qualidade estatística</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Metodologia DMAIC</CardTitle>
                    <CardDescription>A estrutura fundamental para projetos de melhoria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {[
                        { phase: "Define", description: "Definir o problema", color: "bg-red-100 text-red-800" },
                        {
                          phase: "Measure",
                          description: "Medir o estado atual",
                          color: "bg-orange-100 text-orange-800",
                        },
                        {
                          phase: "Analyze",
                          description: "Analisar causas raiz",
                          color: "bg-yellow-100 text-yellow-800",
                        },
                        { phase: "Improve", description: "Implementar soluções", color: "bg-green-100 text-green-800" },
                        { phase: "Control", description: "Controlar melhorias", color: "bg-blue-100 text-blue-800" },
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${item.color} mb-2`}
                          >
                            <span className="font-bold">{item.phase[0]}</span>
                          </div>
                          <h4 className="font-semibold text-sm">{item.phase}</h4>
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      História e Evolução
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-lg">1980s - Nascimento do Six Sigma</h4>
                        <p className="text-gray-700 mt-2">
                          Desenvolvido pela Motorola para reduzir defeitos em produtos eletrônicos. O termo "Six Sigma"
                          refere-se ao objetivo de ter no máximo 3,4 defeitos por milhão de oportunidades.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-lg">1990s - Expansão e Popularização</h4>
                        <p className="text-gray-700 mt-2">
                          General Electric, sob liderança de Jack Welch, adotou Six Sigma em larga escala, economizando
                          bilhões de dólares e popularizando a metodologia.
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-lg">2000s - Integração com Lean</h4>
                        <p className="text-gray-700 mt-2">
                          A combinação dos princípios Lean (Toyota Production System) com Six Sigma criou uma abordagem
                          mais completa para melhoria de processos.
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-lg">Hoje - Aplicação Global</h4>
                        <p className="text-gray-700 mt-2">
                          Lean Six Sigma é aplicado em diversos setores: manufatura, serviços, saúde, governo,
                          tecnologia e muito mais.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="principles" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Princípios Fundamentais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-blue-900">Princípios Lean</h4>

                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium">1. Valor</h5>
                            <p className="text-sm text-gray-700">Definir valor do ponto de vista do cliente</p>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium">2. Fluxo de Valor</h5>
                            <p className="text-sm text-gray-700">Mapear todas as atividades do processo</p>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium">3. Fluxo Contínuo</h5>
                            <p className="text-sm text-gray-700">Eliminar interrupções e gargalos</p>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium">4. Sistema Puxado</h5>
                            <p className="text-sm text-gray-700">Produzir apenas o que é demandado</p>
                          </div>

                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h5 className="font-medium">5. Perfeição</h5>
                            <p className="text-sm text-gray-700">Busca contínua pela melhoria</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg text-green-900">Princípios Six Sigma</h4>

                        <div className="space-y-3">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium">1. Foco no Cliente</h5>
                            <p className="text-sm text-gray-700">Satisfação e valor para o cliente</p>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium">2. Decisões Baseadas em Dados</h5>
                            <p className="text-sm text-gray-700">Análise estatística e evidências</p>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium">3. Foco em Processos</h5>
                            <p className="text-sm text-gray-700">Melhoria sistemática de processos</p>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium">4. Gestão Proativa</h5>
                            <p className="text-sm text-gray-700">Prevenção ao invés de correção</p>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg">
                            <h5 className="font-medium">5. Colaboração</h5>
                            <p className="text-sm text-gray-700">Trabalho em equipe multifuncional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Benefícios e ROI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">25-50%</div>
                        <div className="text-sm text-blue-800">Redução de Custos</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">10-30%</div>
                        <div className="text-sm text-green-800">Aumento de Produtividade</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">90%+</div>
                        <div className="text-sm text-purple-800">Redução de Defeitos</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Benefícios Organizacionais</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-blue-900">Financeiros</h5>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Redução de custos operacionais</li>
                            <li>• Aumento da margem de lucro</li>
                            <li>• ROI típico de 3:1 a 6:1</li>
                            <li>• Redução de retrabalho</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-green-900">Operacionais</h5>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Melhoria da qualidade</li>
                            <li>• Redução do tempo de ciclo</li>
                            <li>• Aumento da capacidade</li>
                            <li>• Processos mais estáveis</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-purple-900">Estratégicos</h5>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Vantagem competitiva</li>
                            <li>• Satisfação do cliente</li>
                            <li>• Cultura de melhoria</li>
                            <li>• Inovação em processos</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-orange-900">Pessoas</h5>
                          <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Desenvolvimento de competências</li>
                            <li>• Engajamento dos funcionários</li>
                            <li>• Liderança baseada em dados</li>
                            <li>• Trabalho em equipe</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between mt-8">
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Dashboard
                </Button>
              </Link>
              <Link href="/modules/define">
                <Button>
                  Próximo Módulo: Define
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
