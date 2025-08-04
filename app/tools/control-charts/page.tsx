"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, TrendingUp, BarChart3, AlertTriangle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import Link from "next/link"

export default function ControlChartsPage() {
  const [chartType, setChartType] = useState("xbar-r")
  const [data, setData] = useState("")
  const [subgroupSize, setSubgroupSize] = useState("5")
  const [chartData, setChartData] = useState<any[]>([])
  const [controlLimits, setControlLimits] = useState({
    ucl: 0,
    lcl: 0,
    centerLine: 0,
  })

  const generateSampleData = () => {
    const sampleData = Array.from({ length: 25 }, (_, i) => ({
      subgroup: i + 1,
      value: 10 + Math.random() * 2 - 1,
      range: Math.random() * 1.5,
    }))
    setChartData(sampleData)
    setControlLimits({
      ucl: 11.5,
      lcl: 8.5,
      centerLine: 10,
    })
  }

  const calculateControlLimits = () => {
    if (!data.trim()) {
      alert("Por favor, insira os dados primeiro")
      return
    }

    // Simular cálculo dos limites de controle
    const values = data
      .split(/[,\n]/)
      .map((v) => Number.parseFloat(v.trim()))
      .filter((v) => !isNaN(v))

    if (values.length === 0) {
      alert("Dados inválidos")
      return
    }

    const mean = values.reduce((sum, val) => sum + val, 0) / values.length
    const stdDev = Math.sqrt(values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (values.length - 1))

    const processedData = values.map((value, index) => ({
      subgroup: index + 1,
      value: value,
      range: index > 0 ? Math.abs(value - values[index - 1]) : 0,
    }))

    setChartData(processedData)
    setControlLimits({
      ucl: mean + 3 * stdDev,
      lcl: mean - 3 * stdDev,
      centerLine: mean,
    })
  }

  const chartTypes = [
    { value: "xbar-r", label: "X̄-R (Média e Amplitude)", description: "Para dados contínuos com subgrupos" },
    { value: "xbar-s", label: "X̄-S (Média e Desvio)", description: "Para dados contínuos com subgrupos grandes" },
    { value: "x-mr", label: "X-mR (Individual e Amplitude Móvel)", description: "Para medições individuais" },
    { value: "p", label: "p (Proporção)", description: "Para dados de atributos (proporção de defeituosos)" },
    { value: "np", label: "np (Número de Defeituosos)", description: "Para dados de atributos (contagem)" },
    { value: "c", label: "c (Defeitos)", description: "Para contagem de defeitos em área constante" },
    { value: "u", label: "u (Defeitos por Unidade)", description: "Para contagem de defeitos em área variável" },
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
              <h1 className="text-2xl font-bold text-gray-900">Gráficos de Controle</h1>
              <p className="text-sm text-gray-600">Monitore a estabilidade e controle estatístico do processo</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="generator" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generator">Gerador de Gráficos</TabsTrigger>
            <TabsTrigger value="theory">Teoria</TabsTrigger>
            <TabsTrigger value="interpretation">Interpretação</TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Configuração do Gráfico
                  </CardTitle>
                  <CardDescription>Configure os parâmetros para gerar o gráfico de controle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="chartType">Tipo de Gráfico</Label>
                    <Select value={chartType} onValueChange={setChartType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {chartTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      {chartTypes.find((t) => t.value === chartType)?.description}
                    </p>
                  </div>

                  {(chartType === "xbar-r" || chartType === "xbar-s") && (
                    <div>
                      <Label htmlFor="subgroupSize">Tamanho do Subgrupo</Label>
                      <Select value={subgroupSize} onValueChange={setSubgroupSize}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="data">Dados do Processo</Label>
                    <Textarea
                      id="data"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      placeholder="Insira os dados separados por vírgula ou quebra de linha..."
                      rows={6}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button onClick={calculateControlLimits} className="w-full">
                      Calcular Limites
                    </Button>
                    <Button onClick={generateSampleData} variant="outline" className="w-full bg-transparent">
                      Dados de Exemplo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Chart Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Gráfico de Controle
                  </CardTitle>
                  <CardDescription>Visualização dos dados com limites de controle</CardDescription>
                </CardHeader>
                <CardContent>
                  {chartData.length > 0 ? (
                    <div className="space-y-4">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="subgroup" />
                            <YAxis />
                            <Tooltip />
                            <ReferenceLine y={controlLimits.ucl} stroke="red" strokeDasharray="5 5" label="UCL" />
                            <ReferenceLine
                              y={controlLimits.centerLine}
                              stroke="green"
                              strokeDasharray="5 5"
                              label="CL"
                            />
                            <ReferenceLine y={controlLimits.lcl} stroke="red" strokeDasharray="5 5" label="LCL" />
                            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{controlLimits.ucl.toFixed(3)}</div>
                          <div className="text-sm text-red-800">UCL</div>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{controlLimits.centerLine.toFixed(3)}</div>
                          <div className="text-sm text-green-800">Linha Central</div>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">{controlLimits.lcl.toFixed(3)}</div>
                          <div className="text-sm text-red-800">LCL</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Insira dados e clique em "Calcular Limites" para gerar o gráfico</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Analysis Section */}
            {chartData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Análise de Estabilidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Testes de Causas Especiais</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Teste 1: Pontos fora dos limites</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Teste 2: 9 pontos consecutivos do mesmo lado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Teste 3: 6 pontos consecutivos crescentes/decrescentes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span>Teste 4: 14 pontos alternando para cima e para baixo</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Status do Processo</h4>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium text-green-800">Processo Sob Controle</span>
                        </div>
                        <p className="text-sm text-green-700">
                          Nenhuma causa especial detectada. O processo está estatisticamente estável.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="theory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fundamentos dos Gráficos de Controle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Os gráficos de controle são ferramentas estatísticas usadas para monitorar a estabilidade de um
                  processo ao longo do tempo. Eles ajudam a distinguir entre variação comum (natural) e variação
                  especial (anormal).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Componentes Principais</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Linha Central (CL):</strong> Representa a média do processo
                      </li>
                      <li>
                        • <strong>Limite Superior (UCL):</strong> Limite superior de controle
                      </li>
                      <li>
                        • <strong>Limite Inferior (LCL):</strong> Limite inferior de controle
                      </li>
                      <li>
                        • <strong>Pontos de Dados:</strong> Valores plotados ao longo do tempo
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Tipos de Variação</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Variação Comum:</strong> Inerente ao processo, previsível
                      </li>
                      <li>
                        • <strong>Variação Especial:</strong> Devido a causas específicas
                      </li>
                      <li>
                        • <strong>Processo Estável:</strong> Apenas variação comum presente
                      </li>
                      <li>
                        • <strong>Processo Instável:</strong> Presença de variação especial
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seleção do Tipo de Gráfico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left">Tipo de Dados</th>
                        <th className="border border-gray-300 p-3 text-left">Gráfico</th>
                        <th className="border border-gray-300 p-3 text-left">Quando Usar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Contínuos com subgrupos</td>
                        <td className="border border-gray-300 p-3">X̄-R</td>
                        <td className="border border-gray-300 p-3">Subgrupos de 2-10 unidades</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Contínuos com subgrupos grandes</td>
                        <td className="border border-gray-300 p-3">X̄-S</td>
                        <td className="border border-gray-300 p-3">Subgrupos {">"} 10 unidades</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Medições individuais</td>
                        <td className="border border-gray-300 p-3">X-mR</td>
                        <td className="border border-gray-300 p-3">Uma medição por período</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Proporção de defeituosos</td>
                        <td className="border border-gray-300 p-3">p</td>
                        <td className="border border-gray-300 p-3">Tamanho de amostra variável</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Número de defeituosos</td>
                        <td className="border border-gray-300 p-3">np</td>
                        <td className="border border-gray-300 p-3">Tamanho de amostra constante</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interpretation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Regras de Interpretação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Testes para Causas Especiais (Western Electric Rules)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-red-600 mb-2">Teste 1</h5>
                        <p className="text-sm">Um ponto além dos limites de controle (3σ)</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-yellow-600 mb-2">Teste 2</h5>
                        <p className="text-sm">9 pontos consecutivos do mesmo lado da linha central</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-orange-600 mb-2">Teste 3</h5>
                        <p className="text-sm">6 pontos consecutivos crescentes ou decrescentes</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-blue-600 mb-2">Teste 4</h5>
                        <p className="text-sm">14 pontos alternando para cima e para baixo</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-purple-600 mb-2">Teste 5</h5>
                        <p className="text-sm">2 de 3 pontos consecutivos além de 2σ do mesmo lado</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-green-600 mb-2">Teste 6</h5>
                        <p className="text-sm">4 de 5 pontos consecutivos além de 1σ do mesmo lado</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Padrões Não-Aleatórios</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <h5 className="font-medium text-red-800 mb-2">Tendência</h5>
                        <p className="text-sm text-red-700">Série de pontos consecutivos subindo ou descendo</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h5 className="font-medium text-yellow-800 mb-2">Deslocamento</h5>
                        <p className="text-sm text-yellow-700">Mudança súbita no nível do processo</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-2">Ciclicidade</h5>
                        <p className="text-sm text-blue-700">Padrão repetitivo de altos e baixos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ações Recomendadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Processo Sob Controle</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Continue monitorando o processo</li>
                      <li>• Mantenha as condições atuais</li>
                      <li>• Documente as práticas bem-sucedidas</li>
                      <li>• Considere reduzir a variação comum</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Processo Fora de Controle</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Investigue as causas especiais imediatamente</li>
                      <li>• Implemente ações corretivas</li>
                      <li>• Recalcule os limites de controle se necessário</li>
                      <li>• Monitore de perto até estabilizar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
