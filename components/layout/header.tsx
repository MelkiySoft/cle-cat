import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-lg">
            CC
          </div>
          <span className="font-semibold text-xl tracking-tight">Cle-Cat</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/catalog" className="hover:text-primary transition-colors">
            Каталог
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Для дома
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Для бизнеса
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button variant="outline" size="sm" >
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Войти
            </Link>
          </Button>

          <Button size="sm" >
            <Link href="/register">
              <User className="mr-2 h-4 w-4" />
              Регистрация
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}