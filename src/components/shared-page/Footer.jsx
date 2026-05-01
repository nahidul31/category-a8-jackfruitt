import Link from "next/link";
import {
  ShoppingCart,
  Envelope,
  Smartphone,
  MapPin,
  LogoGithub,
  LogoLinkedin,
  LogoTelegram,
  LogoFacebook,
  FileText,
  Lock,
  ChevronRight,
} from "@gravity-ui/icons";

const SOCIAL_LINKS = [
  { href: "https://facebook.com", Icon: LogoFacebook, label: "Facebook" },
  { href: "https://t.me/suncart", Icon: LogoTelegram, label: "Telegram" },
  { href: "https://linkedin.com", Icon: LogoLinkedin, label: "LinkedIn" },
  { href: "https://github.com", Icon: LogoGithub, label: "GitHub" },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/profile", label: "My Profile" },
  { href: "/orders", label: "My Orders" },
];

const CONTACT_INFO = [
  { Icon: Envelope, text: "support@suncart.com" },
  { Icon: Smartphone, text: "+880 1700-000000" },
  { Icon: MapPin, text: "Dhaka, Bangladesh" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand column ── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 w-fit group no-underline"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-900/30 group-hover:scale-105 group-hover:-rotate-6 transition-all duration-200">
                <ShoppingCart className="w-[18px] h-[18px] text-white" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Sun<span className="text-amber-400">Cart</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your one-stop shop for everything you need. Fast delivery, great
              prices, and trusted service — every single day.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-1">
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-amber-500 hover:text-white transition-all duration-150 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-amber-400 transition-colors no-underline group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/50 group-hover:text-amber-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {CONTACT_INFO.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-slate-800">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                  </span>
                  <span className="text-sm text-slate-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal / Policy ── */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
              Legal
            </h3>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {[
                {
                  href: "/privacy-policy",
                  Icon: Lock,
                  label: "Privacy Policy",
                },
                { href: "/terms", Icon: FileText, label: "Terms of Service" },
                {
                  href: "/cookie-policy",
                  Icon: FileText,
                  label: "Cookie Policy",
                },
                {
                  href: "/refund-policy",
                  Icon: FileText,
                  label: "Refund Policy",
                },
              ].map(({ href, Icon, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors no-underline group"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-500/50 group-hover:text-amber-400 transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-slate-800 my-8" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="m-0">
            © {new Date().getFullYear()}{" "}
            <span className="text-amber-400 font-semibold">SunCart</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-amber-400 transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">·</span>
            <Link
              href="/terms"
              className="hover:text-amber-400 transition-colors no-underline"
            >
              Terms
            </Link>
            <span className="text-slate-700">·</span>
            <Link
              href="/sitemap"
              className="hover:text-amber-400 transition-colors no-underline"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
