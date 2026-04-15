/*
 * Footer — Swiss minimalist style
 * Thin top border, minimal info, left-aligned
 */

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p
            className="text-sm font-semibold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            shapers.ai
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            A project of the WEF Global Shapers Seattle Hub
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} shapers.ai
        </p>
      </div>
    </footer>
  );
}
