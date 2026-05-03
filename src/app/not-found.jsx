import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="animate-bounce mb-8 text-8xl font-bold text-muted-foreground">
        404
      </div>

      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Page not found
      </p>

      <h1 className="text-3xl font-medium mb-3">Oops! You're lost.</h1>

      <p className="text-muted-foreground mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-80 transition"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
        Back to home
      </Link>
    </div>
  );
}
