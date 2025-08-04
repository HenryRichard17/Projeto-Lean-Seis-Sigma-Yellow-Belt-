"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Target, Users, FileText, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function DefineModule() {
  const [projectCharter, setProjectCharter] = useState({
    projectName: "",
    problemStatement: "",
    goalStatement: "",
    scope: "",
    timeline: "",
    teamMembers: "",
    sponsor: "",
  })

  const [sipocData, setSipocData] = useState({
    suppliers: "",
    inputs: "",
    process: "",
    outputs: "",
    customers: "",
  })

  const calculateProgress = () => {
    const charterFields = Object.values(projectCharter).filter((field) => field.trim() !== "").length
    const sipocFields = Object.values(sipocData).filter((field) => field.trim() !== "").length
    return Math.round(((charterFields + sipocFields) / 12) * 100)
  }

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
                <h1 className="text-2xl font-bold text-gray-900">Define - Definir</h1>
                <p className="text-sm text-gray-600">Módulo 2 - Definição do Problema e Escopo</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <Target className="w-4 h-4 mr-1" />
              {calculateProgress()}% Completo
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
                    <span>{calculateProgress()}%</span>
                  </div>
                  <Progress value={calculateProgress()} className="h-2" />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Conceitos Fundamentais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>Project Charter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>Diagrama SIPOC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400" />
                      <span>VOC Analysis</span>
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
                <TabsTrigger value="charter">Project Charter</TabsTrigger>
                <TabsTrigger value="sipoc">SIPOC</TabsTrigger>
                <TabsTrigger value="voc">VOC</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Fase Define - Objetivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      A fase <strong>Define</strong> é o primeiro passo da metodologia DMAIC. Aqui definimos claramente
                      o problema, estabelecemos objetivos mensuráveis e determinamos o escopo do projeto.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Principais Entregas</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Project Charter</li>
                          <li>• Diagrama SIPOC</li>
                          <li>• VOC (Voice of Customer)</li>
                          <li>• CTQ (Critical to Quality)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Ferramentas Utilizadas</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Brainstorming</li>
                          <li>• Mapeamento de Processos</li>
                          <li>• Análise de Stakeholders</li>
                          <li>• Matriz de Priorização</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Critérios de Sucesso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-2">SMART</div>
                        <div className="text-sm text-purple-800">Objetivos Específicos</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-2">CTQ</div>
                        <div className="text-sm text-orange-800">Crítico para Qualidade</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600 mb-2">ROI</div>
                        <div className="text-sm text-teal-800">Retorno do Investimento</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="charter" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Project Charter Interativo
                    </CardTitle>
                    <CardDescription>Preencha os campos abaixo para criar seu Project Charter</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectName">Nome do Projeto</Label>
                        <Input
                          id="projectName"
                          value={projectCharter.projectName}
                          onChange={(e) => setProjectCharter({ ...projectCharter, projectName: e.target.value })}
                          placeholder="Ex: Redução de Defeitos na Linha A"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sponsor">Sponsor do Projeto</Label>
                        <Input
                          id="sponsor"
                          value={projectCharter.sponsor}
                          onChange={(e) => setProjectCharter({ ...projectCharter, sponsor: e.target.value })}
                          placeholder="Ex: João Silva - Gerente de Produção"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="problemStatement">Declaração do Problema</Label>
                      <Textarea
                        id="problemStatement"
                        value={projectCharter.problemStatement}
                        onChange={(e) => setProjectCharter({ ...projectCharter, problemStatement: e.target.value })}
                        placeholder="Descreva o problema atual de forma clara e objetiva..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="goalStatement">Declaração do Objetivo</Label>
                      <Textarea
                        id="goalStatement"
                        value={projectCharter.goalStatement}
                        onChange={(e) => setProjectCharter({ ...projectCharter, goalStatement: e.target.value })}
                        placeholder="Defina o objetivo SMART do projeto..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="scope">Escopo do Projeto</Label>
                      <Textarea
                        id="scope"
                        value={projectCharter.scope}
                        onChange={(e) => setProjectCharter({ ...projectCharter, scope: e.target.value })}
                        placeholder="O que está incluído e excluído do projeto..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Input
                          id="timeline"
                          value={projectCharter.timeline}
                          onChange={(e) => setProjectCharter({ ...projectCharter, timeline: e.target.value })}
                          placeholder="Ex: 3 meses"
                        />
                      </div>
                      <div>
                        <Label htmlFor="teamMembers">Membros da Equipe</Label>
                        <Input
                          id="teamMembers"
                          value={projectCharter.teamMembers}
                          onChange={(e) => setProjectCharter({ ...projectCharter, teamMembers: e.target.value })}
                          placeholder="Ex: Maria, Pedro, Ana"
                        />
                      </div>
                    </div>

                    <Button className="w-full">Salvar Project Charter</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sipoc" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Diagrama SIPOC
                    </CardTitle>
                    <CardDescription>Suppliers, Inputs, Process, Outputs, Customers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="suppliers">Suppliers (Fornecedores)</Label>
                        <Textarea
                          id="suppliers"
                          value={sipocData.suppliers}
                          onChange={(e) => setSipocData({ ...sipocData, suppliers: e.target.value })}
                          placeholder="Liste os fornecedores do processo..."
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="inputs">Inputs (Entradas)</Label>
                        <Textarea
                          id="inputs"
                          value={sipocData.inputs}
                          onChange={(e) => setSipocData({ ...sipocData, inputs: e.target.value })}
                          placeholder="Liste as entradas do processo..."
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="process">Process (Processo)</Label>
                        <Textarea
                          id="process"
                          value={sipocData.process}
                          onChange={(e) => setSipocData({ ...sipocData, process: e.target.value })}
                          placeholder="Descreva o processo principal..."
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="outputs">Outputs (Saídas)</Label>
                        <Textarea
                          id="outputs"
                          value={sipocData.outputs}
                          onChange={(e) => setSipocData({ ...sipocData, outputs: e.target.value })}
                          placeholder="Liste as saídas do processo..."
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="customers">Customers (Clientes)</Label>
                        <Textarea
                          id="customers"
                          value={sipocData.customers}
                          onChange={(e) => setSipocData({ ...sipocData, customers: e.target.value })}
                          placeholder="Liste os clientes do processo..."
                          rows={2}
                        />
                      </div>
                    </div>

                    <Button className="w-full">Gerar Diagrama SIPOC</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="voc" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>VOC - Voice of Customer</CardTitle>
                    <CardDescription>Em desenvolvimento - Disponível em breve</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Ferramenta de análise VOC estará disponível na próxima versão</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between mt-8">
              <Link href="/modules/introduction">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Módulo Anterior
                </Button>
              </Link>
              <Link href="/modules/measure">
                <Button>
                  Próximo Módulo: Measure
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
