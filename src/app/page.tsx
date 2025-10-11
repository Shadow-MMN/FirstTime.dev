import Hero from "@/components/Hero";
import Home from "@/components/Home";
import ThemeToggle from "@/components/ThemeToggler";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <ThemeToggle />
      <Hero />
      <Home />
    </div>
  );
}
