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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, BarChart3, TrendingUp, Calculator, Database, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function MeasurePage() {
  const [measurementPlan, setMeasurementPlan] = useState({
    metric: "",
    operationalDefinition: "",
    dataSource: "",
    sampleSize: "",
    frequency: "",
    responsibility: "",
  })

  const [msaData, setMsaData] = useState({
    operators: "3",
    parts: "10",
    trials: "3",
    tolerance: "",
  })

  const [baselineData, setBaselineData] = useState("")

  const calculateProgress = () => {
    const planFields = Object.values(measurementPlan).filter((field) => field.trim() !== "").length
    const msaFields = Object.values(msaData).filter((field) => field.trim() !== "").length
    const baselineComplete = baselineData.trim() !== "" ? 1 : 0
    return Math.round(((planFields + msaFields + baselineComplete) / 11) * 100)
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
                <h1 className="text-2xl font-bold text-gray-900">Measure - Medir</h1>
                <p className="text-sm text-gray-600">Módulo 3 - Coleta e Análise de Dados Baseline</p>
              </div>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">
              <BarChart3 className="w-4 h-4 mr-1" />
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
                      <span>Conceitos de Medição</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>Plano de Medição</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>MSA - Análise do Sistema</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400" />
                      <span>Coleta de Dados Baseline</span>
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
                <TabsTrigger value="plan">Plano de Medição</TabsTrigger>
                <TabsTrigger value="msa">MSA</TabsTrigger>
                <TabsTrigger value="baseline">Baseline</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Fase Measure - Objetivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      A fase <strong>Measure</strong> foca na coleta de dados confiáveis para estabelecer o desempenho
                      atual do processo. É essencial validar o sistema de medição antes de coletar dados.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Principais Atividades</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Desenvolver plano de coleta de dados</li>
                          <li>• Validar sistema de medição (MSA)</li>
                          <li>• Coletar dados baseline</li>
                          <li>• Calcular capacidade do processo</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Ferramentas Utilizadas</h4>
                        <ul className="text-sm text-green-800 space-y-1">
                          <li>• Plano de coleta de dados</li>
                          <li>• Gage R&R</li>
                          <li>• Gráficos de controle</li>
                          <li>• Estudos de capacidade</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-2">R&R</div>
                        <div className="text-sm text-purple-800">Repetibilidade e Reprodutibilidade</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-2">Cp/Cpk</div>
                        <div className="text-sm text-orange-800">Índices de Capacidade</div>
                      </div>
                      <div className="text-center p-4 bg-teal-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600 mb-2">σ</div>
                        <div className="text-sm text-teal-800">Variação do Processo</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tipos de Dados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-3 text-blue-600">Dados Contínuos</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Podem assumir qualquer valor dentro de um intervalo
                        </p>
                        <div className="space-y-2 text-sm">
                          <div>• Tempo (minutos, horas)</div>
                          <div>• Peso (gramas, quilos)</div>
                          <div>• Temperatura (°C)</div>
                          <div>• Dimensões (mm, cm)</div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-3 text-green-600">Dados Discretos</h4>
                        <p className="text-sm text-gray-600 mb-3">Valores específicos, geralmente contagens</p>
                        <div className="space-y-2 text-sm">
                          <div>• Número de defeitos</div>
                          <div>• Quantidade de peças</div>
                          <div>• Classificações (Bom/Ruim)</div>
                          <div>• Avaliações (1-5 estrelas)</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plan" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Plano de Coleta de Dados
                    </CardTitle>
                    <CardDescription>Defina como os dados serão coletados</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="metric">Métrica a ser Medida</Label>
                        <Input
                          id="metric"
                          value={measurementPlan.metric}
                          onChange={(e) => setMeasurementPlan({ ...measurementPlan, metric: e.target.value })}
                          placeholder="Ex: Tempo de ciclo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dataSource">Fonte dos Dados</Label>
                        <Select
                          value={measurementPlan.dataSource}
                          onValueChange={(value) => setMeasurementPlan({ ...measurementPlan, dataSource: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a fonte" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manual">Coleta Manual</SelectItem>
                            <SelectItem value="system">Sistema Automatizado</SelectItem>
                            <SelectItem value="sensor">Sensores</SelectItem>
                            <SelectItem value="inspection">Inspeção</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="operationalDefinition">Definição Operacional</Label>
                      <Textarea
                        id="operationalDefinition"
                        value={measurementPlan.operationalDefinition}
                        onChange={(e) =>
                          setMeasurementPlan({ ...measurementPlan, operationalDefinition: e.target.value })
                        }
                        placeholder="Descreva exatamente como a métrica será medida..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="sampleSize">Tamanho da Amostra</Label>
                        <Input
                          id="sampleSize"
                          value={measurementPlan.sampleSize}
                          onChange={(e) => setMeasurementPlan({ ...measurementPlan, sampleSize: e.target.value })}
                          placeholder="Ex: 100"
                        />
                      </div>
                      <div>
                        <Label htmlFor="frequency">Frequência</Label>
                        <Select
                          value={measurementPlan.frequency}
                          onValueChange={(value) => setMeasurementPlan({ ...measurementPlan, frequency: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Frequência" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">A cada hora</SelectItem>
                            <SelectItem value="daily">Diariamente</SelectItem>
                            <SelectItem value="weekly">Semanalmente</SelectItem>
                            <SelectItem value="monthly">Mensalmente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="responsibility">Responsável</Label>
                        <Input
                          id="responsibility"
                          value={measurementPlan.responsibility}
                          onChange={(e) => setMeasurementPlan({ ...measurementPlan, responsibility: e.target.value })}
                          placeholder="Nome do responsável"
                        />
                      </div>
                    </div>

                    <Button className="w-full">Salvar Plano de Medição</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Checklist do Plano de Medição</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "A métrica está claramente definida?",
                        "A definição operacional é específica?",
                        "O tamanho da amostra é adequado?",
                        "A frequência de coleta foi definida?",
                        "O responsável pela coleta foi designado?",
                        "Os recursos necessários estão disponíveis?",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="msa" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      MSA - Measurement System Analysis
                    </CardTitle>
                    <CardDescription>
                      Análise da repetibilidade e reprodutibilidade do sistema de medição
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="operators">Número de Operadores</Label>
                        <Select
                          value={msaData.operators}
                          onValueChange={(value) => setMsaData({ ...msaData, operators: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 Operadores</SelectItem>
                            <SelectItem value="3">3 Operadores</SelectItem>
                            <SelectItem value="4">4 Operadores</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="parts">Número de Peças</Label>
                        <Select
                          value={msaData.parts}
                          onValueChange={(value) => setMsaData({ ...msaData, parts: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Peças</SelectItem>
                            <SelectItem value="10">10 Peças</SelectItem>
                            <SelectItem value="15">15 Peças</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="trials">Número de Tentativas</Label>
                        <Select
                          value={msaData.trials}
                          onValueChange={(value) => setMsaData({ ...msaData, trials: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 Tentativas</SelectItem>
                            <SelectItem value="3">3 Tentativas</SelectItem>
                            <SelectItem value="4">4 Tentativas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="tolerance">Tolerância da Especificação</Label>
                        <Input
                          id="tolerance"
                          value={msaData.tolerance}
                          onChange={(e) => setMsaData({ ...msaData, tolerance: e.target.value })}
                          placeholder="Ex: ±0.5"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Critérios de Aceitação MSA</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                        <div>
                          <div className="font-medium">Gage R&R:</div>
                          <div>• {"<"} 10% = Excelente</div>
                          <div>• 10-30% = Aceitável</div>
                          <div>• {">"} 30% = Inaceitável</div>
                        </div>
                        <div>
                          <div className="font-medium">Número de Categorias:</div>
                          <div>• ≥ 5 = Adequado</div>
                          <div>• 3-4 = Marginal</div>
                          <div>• {"<"} 3 = Inadequado</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Executar Análise MSA</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Componentes da Variação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-red-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-red-600 mb-2">Repetibilidade</div>
                          <div className="text-sm text-red-800">Variação do equipamento</div>
                          <div className="text-xs text-red-600 mt-2">Mesmo operador, mesma peça</div>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-yellow-600 mb-2">Reprodutibilidade</div>
                          <div className="text-sm text-yellow-800">Variação entre operadores</div>
                          <div className="text-xs text-yellow-600 mt-2">Operadores diferentes, mesma peça</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600 mb-2">Peça-a-Peça</div>
                          <div className="text-sm text-green-800">Variação real do processo</div>
                          <div className="text-xs text-green-600 mt-2">Diferenças entre peças</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="baseline" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Coleta de Dados Baseline
                    </CardTitle>
                    <CardDescription>Estabeleça o desempenho atual do processo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="baselineData">Dados Coletados</Label>
                      <Textarea
                        id="baselineData"
                        value={baselineData}
                        onChange={(e) => setBaselineData(e.target.value)}
                        placeholder="Cole aqui os dados coletados (separados por vírgula ou quebra de linha)..."
                        rows={6}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full bg-transparent">
                        Importar de Excel
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Gerar Dados de Exemplo
                      </Button>
                    </div>

                    <Button className="w-full">Analisar Dados Baseline</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas Descritivas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-blue-600">--</div>
                        <div className="text-sm text-blue-800">Média</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">--</div>
                        <div className="text-sm text-green-800">Mediana</div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-yellow-600">--</div>
                        <div className="text-sm text-yellow-800">Desvio Padrão</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-600">--</div>
                        <div className="text-sm text-purple-800">Amplitude</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                      <Calculator className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Insira dados para ver as estatísticas</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between mt-8">
              <Link href="/modules/define">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Módulo Anterior
                </Button>
              </Link>
              <Link href="/modules/analyze">
                <Button>
                  Próximo Módulo: Analyze
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
