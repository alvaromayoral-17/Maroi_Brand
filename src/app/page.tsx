import { Hero } from "@/components/sections/hero";
import { CategoryGrid } from "@/components/sections/category-grid";
import { A3Teaser } from "@/components/sections/a3-teaser";
import { LifestyleGrid } from "@/components/sections/lifestyle-grid";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <A3Teaser />
      <LifestyleGrid />
    </>
  );
}
