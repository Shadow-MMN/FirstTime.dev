import Hero from "@/components/Hero";
import Home from "@/components/Home";
import ThemeToggle from "@/components/ThemeToggler";

export default function Page() {
  return (
    <div className="max-w-[1008px] mx-auto px-4 md:px-8">
      <ThemeToggle />
      <Hero />
      <Home />
    </div>
  );
}
