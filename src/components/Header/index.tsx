import Logo from "../../assets/Logo.svg";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="h-56 bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-14">
        <img src={Logo} alt="" />
        <Button className="text-zinc-50">Nova Transação</Button>
      </div>
    </header>
  );
}
