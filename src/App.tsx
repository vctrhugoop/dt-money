import { Dashboard } from "./components/Dashborad";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="bg-fore min-h-screen bg-zinc-900">
      <Header />
      <Dashboard />
    </div>
  );
}
