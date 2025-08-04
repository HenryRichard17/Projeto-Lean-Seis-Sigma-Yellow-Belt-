"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Award, Download, CheckCircle, Clock, Star, Trophy, FileText } from "lucide-react"
import Link from "next/link"

export default function CertificationPage() {
  const [examStarted, setExamStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [examCompleted, setExamCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const requirements = [
    { id: 1, title: "Completar todos os módulos DMAIC", completed: true, progress: 100 },
    { id: 2, title: "Usar pelo menos 5 ferramentas estatísticas", completed: true, progress: 100 },
    { id: 3, title: "Criar um Project Charter", completed: false, progress: 60 },
    { id: 4, title: "Realizar análise MSA", completed: false, progress: 30 },
    { id: 5, title: "Passar no exame final (70% mínimo)", completed: false, progress: 0 },
  ]

  const examQuestions = [
    {
      question: "Qual é o primeiro passo da metodologia DMAIC?",
      options: ["Measure", "Define", "Analyze", "Improve"],
      correct: 1,
    },
    {
      question: "O que significa Cp em análise de capacidade?",
      options: [
        "Capacidade potencial do processo",
        "Capacidade real do processo",
        "Controle do processo",
        "Centralização do processo",
      ],
      correct: 0,
    },
    {
      question: "Qual é o objetivo principal dos gráficos de controle?",
      options: [
        "Melhorar a qualidade",
        "Reduzir custos",
        "Monitorar a estabilidade do processo",
        "Aumentar a produtividade",
      ],
      correct: 2,
    },
    {
      question: "O que representa a sigla SIPOC?",
      options: [
        "Sistema, Input, Processo, Output, Cliente",
        "Supplier, Input, Process, Output, Customer",
        "Sistema, Indicador, Processo, Objetivo, Controle",
        "Supplier, Indicador, Process, Objetivo, Customer",
      ],
      correct: 1,
    },
    {
      question: "Qual é o valor mínimo aceitável para Cpk?",
      options: ["1.0", "1.33", "2.0", "0.67"],
      correct: 1,
    },
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calcular pontuação
      let correctAnswers = 0
      answers.forEach((answer, index) => {
        if (answer === examQuestions[index].correct) {
          correctAnswers++
        }
      })
      const finalScore = Math.round((correctAnswers / examQuestions.length) * 100)
      setScore(finalScore)
      setExamCompleted(true)
    }
  }

  const overallProgress = Math.round((requirements.filter((req) => req.completed).length / requirements.length) * 100)

  const canTakeExam = requirements.slice(0, 4).every((req) => req.completed)

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
              <h1 className="text-2xl font-bold text-gray-900">Certificação Yellow Belt</h1>
              <p className="text-sm text-gray-600">Conquiste sua certificação em Lean Six Sigma</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!examStarted && !examCompleted && (
          <div className="space-y-8">
            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Progresso para Certificação
                </CardTitle>
                <CardDescription>Complete todos os requisitos para obter sua certificação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progresso Geral</span>
                    <span>{overallProgress}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-3" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">5</div>
                      <div className="text-sm text-blue-800">Requisitos Totais</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {requirements.filter((req) => req.completed).length}
                      </div>
                      <div className="text-sm text-green-800">Completados</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">
                        {requirements.filter((req) => !req.completed).length}
                      </div>
                      <div className="text-sm text-yellow-800">Pendentes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requisitos para Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requirements.map((requirement) => (
                    <div
                      key={requirement.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        requirement.completed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {requirement.completed ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <Clock className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{requirement.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={requirement.progress} className="h-2 flex-1" />
                          <span className="text-sm text-gray-600">{requirement.progress}%</span>
                        </div>
                      </div>
                      <div>
                        {requirement.completed ? (
                          <Badge className="bg-green-100 text-green-800">Completo</Badge>
                        ) : (
                          <Badge variant="outline">Pendente</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exam Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Exame Final
                </CardTitle>
                <CardDescription>Teste seus conhecimentos para obter a certificação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Informações do Exame</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 25 questões de múltipla escolha</li>
                      <li>• Tempo limite: 60 minutos</li>
                      <li>• Pontuação mínima: 70%</li>
                      <li>• 3 tentativas permitidas</li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="lg" disabled={!canTakeExam}>
                          {canTakeExam ? "Iniciar Exame" : "Complete os requisitos primeiro"}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirmar Início do Exame</DialogTitle>
                          <DialogDescription>
                            Você está prestes a iniciar o exame final. Certifique-se de que tem tempo suficiente para
                            completá-lo.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button onClick={() => setExamStarted(true)}>Iniciar Exame</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {examStarted && !examCompleted && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Exame Final - Yellow Belt</CardTitle>
                <Badge variant="outline">
                  Questão {currentQuestion + 1} de {examQuestions.length}
                </Badge>
              </div>
              <Progress value={((currentQuestion + 1) / examQuestions.length) * 100} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">{examQuestions[currentQuestion].question}</h3>
                <div className="space-y-3">
                  {examQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border transition-colors ${
                        answers[currentQuestion] === index
                          ? "bg-blue-50 border-blue-300"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            answers[currentQuestion] === index ? "bg-blue-500 border-blue-500" : "border-gray-300"
                          }`}
                        />
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                  disabled={currentQuestion === 0}
                >
                  Anterior
                </Button>
                <Button onClick={handleNextQuestion} disabled={answers[currentQuestion] === undefined}>
                  {currentQuestion === examQuestions.length - 1 ? "Finalizar Exame" : "Próxima"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {examCompleted && (
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  {score >= 70 ? (
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                  )}
                </div>
                <CardTitle className={score >= 70 ? "text-green-800" : "text-red-800"}>
                  {score >= 70 ? "Parabéns! Você foi aprovado!" : "Não foi dessa vez..."}
                </CardTitle>
                <CardDescription>
                  Sua pontuação: <strong>{score}%</strong> (Mínimo necessário: 70%)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {score >= 70 ? (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Você conquistou sua certificação Yellow Belt em Lean Six Sigma! Seu certificado digital está
                      pronto para download.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Baixar Certificado
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Star className="w-4 h-4" />
                        Compartilhar no LinkedIn
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Você precisa de pelo menos 70% para ser aprovado. Revise o material e tente novamente.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button onClick={() => window.location.reload()}>Tentar Novamente</Button>
                      <Link href="/">
                        <Button variant="outline">Revisar Material</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {score >= 70 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Certificado Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg border-2 border-blue-200">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Certificado de Conclusão</h2>
                      <p className="text-lg text-gray-700">
                        Certificamos que <strong>Usuário Demo</strong> completou com sucesso o curso
                      </p>
                      <h3 className="text-xl font-semibold text-blue-800">Lean Six Sigma Yellow Belt Training</h3>
                      <div className="flex justify-center items-center gap-8 mt-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Data de Conclusão</div>
                          <div className="font-semibold">{new Date().toLocaleDateString("pt-BR")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Pontuação Final</div>
                          <div className="font-semibold">{score}%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">ID do Certificado</div>
                          <div className="font-semibold">LSS-YB-2024-001</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
