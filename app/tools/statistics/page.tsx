"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calculator, TrendingUp, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function StatisticsTools() {
  const [cpkData, setCpkData] = useState({
    usl: "",
    lsl: "",
    mean: "",
    stdDev: "",
  })

  const [cpkResults, setCpkResults] = useState<{
    cp: number
    cpk: number
    cpu: number
    cpl: number
  } | null>(null)

  const calculateCpk = () => {
    const usl = Number.parseFloat(cpkData.usl)
    const lsl = Number.parseFloat(cpkData.lsl)
    const mean = Number.parseFloat(cpkData.mean)
    const stdDev = Number.parseFloat(cpkData.stdDev)

    if (isNaN(usl) || isNaN(lsl) || isNaN(mean) || isNaN(stdDev) || stdDev <= 0) {
      alert("Por favor, insira valores válidos")
      return
    }

    const cp = (usl - lsl) / (6 * stdDev)
    const cpu = (usl - mean) / (3 * stdDev)
    const cpl = (mean - lsl) / (3 * stdDev)
    const cpk = Math.min(cpu, cpl)

    setCpkResults({ cp, cpk, cpu, cpl })
  }

  const getCapabilityInterpretation = (cpk: number) => {
    if (cpk >= 2.0) return { level: "Excelente", color: "text-green-600", description: "Processo altamente capaz" }
    if (cpk >= 1.33) return { level: "Adequado", color: "text-blue-600", description: "Processo capaz" }
    if (cpk >= 1.0) return { level: "Marginal", color: "text-yellow-600", description: "Processo marginalmente capaz" }
    return { level: "Inadequado", color: "text-red-600", description: "Processo não capaz" }
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Ferramentas Estatísticas</h1>
              <p className="text-sm text-gray-600">Calculadoras para análise de capacidade de processo</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="cpk" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cpk">Cp/Cpk</TabsTrigger>
            <TabsTrigger value="control-limits">Limites de Controle</TabsTrigger>
            <TabsTrigger value="sigma-level">Nível Sigma</TabsTrigger>
          </TabsList>

          <TabsContent value="cpk" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Calculadora Cp/Cpk
                  </CardTitle>
                  <CardDescription>Insira os dados do processo para calcular os índices de capacidade</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="usl">Limite Superior (USL)</Label>
                      <Input
                        id="usl"
                        type="number"
                        step="0.001"
                        value={cpkData.usl}
                        onChange={(e) => setCpkData({ ...cpkData, usl: e.target.value })}
                        placeholder="Ex: 10.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lsl">Limite Inferior (LSL)</Label>
                      <Input
                        id="lsl"
                        type="number"
                        step="0.001"
                        value={cpkData.lsl}
                        onChange={(e) => setCpkData({ ...cpkData, lsl: e.target.value })}
                        placeholder="Ex: 9.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="mean">Média do Processo</Label>
                      <Input
                        id="mean"
                        type="number"
                        step="0.001"
                        value={cpkData.mean}
                        onChange={(e) => setCpkData({ ...cpkData, mean: e.target.value })}
                        placeholder="Ex: 10.0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="stdDev">Desvio Padrão</Label>
                      <Input
                        id="stdDev"
                        type="number"
                        step="0.001"
                        value={cpkData.stdDev}
                        onChange={(e) => setCpkData({ ...cpkData, stdDev: e.target.value })}
                        placeholder="Ex: 0.1"
                      />
                    </div>
                  </div>

                  <Button onClick={calculateCpk} className="w-full">
                    Calcular Cp/Cpk
                  </Button>
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Resultados
                  </CardTitle>
                  <CardDescription>Índices de capacidade do processo</CardDescription>
                </CardHeader>
                <CardContent>
                  {cpkResults ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">{cpkResults.cp.toFixed(3)}</div>
                          <div className="text-sm text-blue-800">Cp (Capacidade Potencial)</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">{cpkResults.cpk.toFixed(3)}</div>
                          <div className="text-sm text-green-800">Cpk (Capacidade Real)</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-lg font-semibold text-gray-700">{cpkResults.cpu.toFixed(3)}</div>
                          <div className="text-xs text-gray-600">CPU (Limite Superior)</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg text-center">
                          <div className="text-lg font-semibold text-gray-700">{cpkResults.cpl.toFixed(3)}</div>
                          <div className="text-xs text-gray-600">CPL (Limite Inferior)</div>
                        </div>
                      </div>

                      {(() => {
                        const interpretation = getCapabilityInterpretation(cpkResults.cpk)
                        return (
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">Interpretação:</span>
                              <span className={`font-bold ${interpretation.color}`}>{interpretation.level}</span>
                            </div>
                            <p className="text-sm text-gray-600">{interpretation.description}</p>
                          </div>
                        )
                      })()}

                      <div className="text-xs text-gray-500 space-y-1">
                        <p>
                          <strong>Cp:</strong> Mede a capacidade potencial (ignora centralização)
                        </p>
                        <p>
                          <strong>Cpk:</strong> Mede a capacidade real (considera centralização)
                        </p>
                        <p>
                          <strong>Objetivo:</strong> Cpk ≥ 1.33 para processos capazes
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Insira os dados e clique em "Calcular" para ver os resultados</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Theory Section */}
            <Card>
              <CardHeader>
                <CardTitle>Teoria: Índices de Capacidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Fórmulas</h4>
                    <div className="space-y-2 text-sm font-mono bg-gray-50 p-4 rounded-lg">
                      <div>Cp = (USL - LSL) / (6σ)</div>
                      <div>CPU = (USL - μ) / (3σ)</div>
                      <div>CPL = (μ - LSL) / (3σ)</div>
                      <div>Cpk = min(CPU, CPL)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Interpretação</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Cpk ≥ 2.0:</span>
                        <span className="text-green-600 font-medium">Excelente</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1.33 ≤ Cpk {"<"} 2.0:</span>
                        <span className="text-blue-600 font-medium">Adequado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1.0 ≤ Cpk {"<"} 1.33:</span>
                        <span className="text-yellow-600 font-medium">Marginal</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cpk {"<"} 1.0:</span>
                        <span className="text-red-600 font-medium">Inadequado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="control-limits">
            <Card>
              <CardHeader>
                <CardTitle>Calculadora de Limites de Controle</CardTitle>
                <CardDescription>Em desenvolvimento - Disponível em breve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Esta ferramenta estará disponível na próxima versão</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sigma-level">
            <Card>
              <CardHeader>
                <CardTitle>Calculadora de Nível Sigma</CardTitle>
                <CardDescription>Em desenvolvimento - Disponível em breve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Esta ferramenta estará disponível na próxima versão</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
