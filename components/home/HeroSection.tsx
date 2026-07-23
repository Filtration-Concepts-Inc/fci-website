import { BackgroundPaths } from "@/components/ui/background-paths";

// A/B test: change 'A' to 'B' to switch to black + red paths hero
const HERO_VARIANT: 'A' | 'B' = 'A'

// Words variant: 'A' = original letter-by-letter | 'B' = mixed-size left-aligned | 'C' = new
const WORDS_VARIANT: 'A' | 'B' | 'C' | 'D' = 'B'

export default function HeroSection() {
  return (
    <BackgroundPaths title="Helping You Breathe a Little Easier" variant={HERO_VARIANT} wordsVariant={WORDS_VARIANT} />
  );
}
