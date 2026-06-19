import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
    // Remove any Lovable-injected UI and disable its event bridge at runtime.
    useEffect(() => {
      try {
        if (typeof window !== "undefined") {
          // Disable any global event bridge
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          window.__lovableEvents = undefined;

          const removeLovableElements = () => {
            try {
              // Remove common identifiable elements and any nodes containing 'lovable'
              document.querySelectorAll('a[href*="lovable.dev"], [data-lovable], .lovable, [id*="lovable"], [class*="lovable"]').forEach(n => n.remove());
              document.querySelectorAll('*').forEach((el) => {
                try {
                  if (el.textContent && /lovable/i.test(el.textContent)) el.remove();
                } catch {}
              });
            } catch {}
          };

          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", removeLovableElements);
          } else {
            removeLovableElements();
          }
        }
      } catch {}
    }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TimeBoard — Take Control of Your Time" },
      {
        name: "description",
        content:
          "TimeBoard is a lightweight desktop app to track activity, analyze productivity, and build better focus habits. Private, local-first, free for Windows.",
      },
      { name: "author", content: "TimeBoard" },
      { name: "theme-color", content: "#0B1220" },
      { property: "og:title", content: "TimeBoard — Take Control of Your Time" },
      {
        property: "og:description",
        content:
          "Track activity, analyze productivity, and build better focus habits with TimeBoard. Private, local-first desktop app.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TimeBoard" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TimeBoard — Take Control of Your Time" },
      {
        name: "twitter:description",
        content:
          "Track activity, analyze productivity, and build better focus habits with TimeBoard.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "TimeBoard",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "Windows",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Lightweight desktop app to track activity, analyze productivity, and build better focus habits.",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
