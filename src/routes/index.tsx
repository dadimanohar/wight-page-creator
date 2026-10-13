import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White Page" },
      { name: "description", content: "A clean, blank white page." },
      { property: "og:title", content: "White Page" },
      { property: "og:description", content: "A clean, blank white page." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-svh bg-background" aria-label="White page" />;
}
