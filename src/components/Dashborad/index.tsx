import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function Dashboard() {
  return (
    <section className="mx-auto flex w-full max-w-6xl lg:px-6">
      <ScrollArea className="-mt-20 w-full whitespace-nowrap">
        <div className="flex w-full justify-between space-x-4 px-6 pb-4 lg:px-0">
          <Card className="w-full max-w-[352px] space-y-3 px-8 py-6">
            <CardHeader className="items-center justify-between ">
              <CardTitle className="text-[#C4C4CC]">Entradas</CardTitle>
              <ArrowCircleUp size={32} color="#00B37E" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#E1E1E6]">R$ 17.400,00</p>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-[#7C7C8A]">
                Última entrada em 13 de abril
              </span>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-[352px] space-y-3 px-8 py-6">
            <CardHeader className="items-center justify-between ">
              <CardTitle className="text-[#C4C4CC]">Entradas</CardTitle>
              <ArrowCircleDown size={32} color="#F75A68" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#E1E1E6]">R$ 1.259,00</p>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-[#7C7C8A]">
                Última saída em 10 de abril
              </span>
            </CardFooter>
          </Card>
          <Card className=" w-full max-w-[352px] space-y-3 bg-primary px-8 py-6">
            <CardHeader className="items-center justify-between ">
              <CardTitle className="text-[#C4C4CC]">Total</CardTitle>
              <CurrencyDollar size={32} />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[#E1E1E6]">R$ 16.141,00</p>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-[#C4C4CC]">
                Última saída em 10 de abril
              </span>
            </CardFooter>
          </Card>
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </section>
  );
}
