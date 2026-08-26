import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";

type PlaceholderScreenProps = {
  description: string;
  title: string;
  titleId: string;
};

export function PlaceholderScreen({
  description,
  title,
  titleId,
}: PlaceholderScreenProps) {
  return (
    <main className={layoutStyles.page}>
      <section className={layoutStyles.content} aria-labelledby={titleId}>
        <ScreenIntro title={title} titleId={titleId}>
          {description}
        </ScreenIntro>
      </section>
    </main>
  );
}
