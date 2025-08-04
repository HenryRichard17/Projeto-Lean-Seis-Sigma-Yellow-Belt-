"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, LogOut, Trophy, BarChart3 } from "lucide-react"
import Link from "next/link"

interface UserInterface {
  id: number
  name: string
  email: string
  level: number
  xp: number
  completedModules: number
}

export function UserNav() {
  const [user, setUser] = useState<UserInterface | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/auth/login"
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/auth/login">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button size="sm">Cadastrar</Button>
        </Link>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Nível {user.level}</div>
              <div className="text-xs text-muted-foreground">{user.xp} XP</div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <span className="mr-2 h-4 w-4">User Icon</span>
              <span>Perfil</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/gamification">
            <DropdownMenuItem>
              <Trophy className="mr-2 h-4 w-4" />
              <span>Conquistas</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard">
            <DropdownMenuItem>
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
