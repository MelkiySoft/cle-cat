import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-auto py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2026 Cle-Cat. Все права защищены.
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">О проекте</Link>
            <Link href="/terms" className="hover:text-foreground">Условия</Link>
            <Link href="/privacy" className="hover:text-foreground">Конфиденциальность</Link>
            <Link href="/contact" className="hover:text-foreground">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}