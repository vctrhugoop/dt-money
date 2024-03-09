import {
  CalendarBlank,
  MagnifyingGlass,
  TagSimple,
} from "@phosphor-icons/react";
import { Dashboard } from "./components/Dashborad";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";

export function App() {
  return (
    <div className="bg-fore relative min-h-screen bg-zinc-900">
      <Header />
      <Dashboard />

      <div className="mx-auto mt-6 w-full max-w-6xl space-y-4 px-6 md:space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-[#C4C4CC]">Transações</h3>
          <span className="text-[#7C7C8A]">2 itens</span>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Busque uma transação"
            className="h-14 bg-[#121214] p-4 placeholder-[#7C7C8A]"
          />
          <Button
            className="flex h-14 items-center gap-3 p-4 md:px-8"
            variant="outline"
          >
            <MagnifyingGlass size={22} />
            <span className="hidden font-bold md:block">Buscar</span>
          </Button>
        </div>

        <div className="space-y-2">
          <Card className="p-5 md:flex md:items-center md:justify-between">
            <CardHeader className="md:w-[500px]">
              <CardTitle className="font-normal leading-6 text-[#C4C4CC]">
                Desenvolvimento de site
              </CardTitle>
            </CardHeader>
            <CardContent className="md:w-[200px]">
              <span className="text-xl leading-8 text-[#00B37E]">
                R$ 12.000,00
              </span>
            </CardContent>
            <CardFooter className="mt-3 flex items-center justify-between md:mt-0 md:w-[340px]">
              <span className="flex items-center justify-center gap-1 leading-6 text-[#7C7C8A] ">
                <TagSimple />
                Venda
              </span>
              <span className="flex items-center justify-center gap-1 leading-6 text-[#7C7C8A]">
                <CalendarBlank />
                13/04/2024
              </span>
            </CardFooter>
          </Card>
          <Card className="p-5 md:flex md:items-center md:justify-between">
            <CardHeader className="md:w-[500px]">
              <CardTitle className="font-normal leading-6 text-[#C4C4CC]">
                Aluguel do apartamento
              </CardTitle>
            </CardHeader>
            <CardContent className="md:w-[200px]">
              <span className="text-xl leading-8 text-[#F75A68]">
                - R$ 1.200,00
              </span>
            </CardContent>
            <CardFooter className="mt-3 flex items-center justify-between md:mt-0 md:w-[340px]">
              <span className="flex items-center justify-center gap-1 leading-6 text-[#7C7C8A] ">
                <TagSimple />
                Casa
              </span>
              <span className="flex items-center justify-center gap-1 leading-6 text-[#7C7C8A]">
                <CalendarBlank />
                27/03/2024
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
