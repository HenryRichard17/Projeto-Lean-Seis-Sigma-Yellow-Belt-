"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Award } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simular autenticação
    setTimeout(() => {
      if (formData.email === "demo@leansixsigma.com" && formData.password === "demo123") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: 1,
            name: "Usuário Demo",
            email: formData.email,
            level: 3,
            xp: 1250,
            completedModules: 2,
          }),
        )
        window.location.href = "/"
      } else {
        setError("Email ou senha incorretos")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Lean Six Sigma</h1>
          <p className="text-gray-600">Yellow Belt Training Platform</p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Fazer Login</CardTitle>
            <CardDescription>Entre com suas credenciais para continuar</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Lembrar de mim
                </Label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>

              <div className="text-center space-y-2">
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Esqueceu sua senha?
                </Link>
                <div className="text-sm text-gray-600">
                  Não tem uma conta?{" "}
                  <Link href="/auth/register" className="text-blue-600 hover:underline">
                    Cadastre-se
                  </Link>
                </div>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Conta Demo</h4>
              <p className="text-sm text-blue-800 mb-2">Para testar a plataforma:</p>
              <div className="text-sm font-mono text-blue-700">
                <div>Email: demo@leansixsigma.com</div>
                <div>Senha: demo123</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
