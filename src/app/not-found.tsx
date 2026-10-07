import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <PageHero eyebrow="Page not found" lines={["This page could not", "be found."]} accent={1} compact>
      <p>The page may have moved. Let us take you back.</p>
      <div className="mt-8">
        <Button href="/">Return Home</Button>
      </div>
    </PageHero>
  );
}
