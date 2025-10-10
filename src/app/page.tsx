import Hero from "@/components/Hero";
import Home from "@/components/Home";
import ThemeToggle from "@/components/ThemeToggler";

export default function Page() {
  return (
    <div>
      <ThemeToggle />
      <Hero />
      <Home />
    </div>
  );
}
