import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold">Cle-Cat</h1>
      <p>Тёмная и светлая тема работают!</p>
    </div>
  );
}