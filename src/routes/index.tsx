import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Shield,
  Play,
  ArrowRight,
  WifiOff,
  Radio,
  Smartphone,
  Users,
  Activity,
  Compass,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Heart,
  MapPin,
  Globe2,
  Train,
  Server,
  Database,
  Cloud,
  Layers,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SheShield Mesh — Safety Beyond Connectivity" },
      {
        name: "description",
        content:
          "Offline-first emergency communication. SheShield Mesh keeps SOS alerts alive through mesh relay when networks fail.",
      },
      { property: "og:title", content: "SheShield Mesh — Safety Beyond Connectivity" },
      {
        property: "og:description",
        content:
          "When internet and mobile networks fail, SheShield Mesh ensures emergency SOS alerts survive, travel, and reach help.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <MVP />
      <TechStack />
      <Architecture />
      <Impact />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
            <Shield className="h-4 w-4" />
          </div>
          <span className="text-base font-semibold tracking-tight">
            SheShield <span className="text-primary">Mesh</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Problem", "#problem"],
            ["Solution", "#solution"],
            ["Features", "#features"],
            ["Tech", "#tech"],
            ["Impact", "#impact"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Prototype <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24">
      <BackgroundGrid />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground shadow-ring">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Hackathon Project · Offline-First
          </span>
          <h1 className="font-display mt-6 text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Safety Beyond <br />
            <span className="italic text-primary">Connectivity.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            When internet and mobile networks fail, SheShield Mesh ensures emergency SOS alerts
            survive, travel, and reach help.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/80">
            Traditional safety apps stop working during network shutdowns, disasters, and remote-area
            emergencies. SheShield Mesh uses offline storage and mesh relay technology to keep
            emergency signals alive until connectivity is restored.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Explore Features <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><WifiOff className="h-3.5 w-3.5" /> Works Offline</div>
            <div className="flex items-center gap-1.5"><Radio className="h-3.5 w-3.5" /> Mesh Relay</div>
            <div className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Encrypted</div>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,27,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
    </>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:120ms]">
      <div className="absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative rounded-[2.75rem] border border-border bg-gradient-to-b from-white to-muted p-3 shadow-soft animate-float">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-ink text-white">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60" />
          <div className="px-6 pb-8 pt-12">
            <div className="flex items-center justify-between text-[10px] text-white/60">
              <span>9:41</span>
              <span className="flex items-center gap-1"><WifiOff className="h-3 w-3" /> Offline Mode</span>
            </div>

            <div className="mt-8 text-center">
              <div className="relative mx-auto grid h-32 w-32 place-items-center">
                <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
                <span className="absolute inset-3 rounded-full bg-primary/40 animate-pulse-ring [animation-delay:300ms]" />
                <button className="relative grid h-24 w-24 place-items-center rounded-full bg-primary text-white shadow-glow">
                  <span className="font-display text-xl">SOS</span>
                </button>
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50">Alert Active</p>
              <p className="mt-2 text-sm text-white/90">Relaying through 3 nearby devices…</p>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { icon: CheckCircle2, text: "Alert stored locally", ok: true },
                { icon: Radio, text: "Mesh relay broadcasting", ok: true },
                { icon: Cloud, text: "Awaiting connectivity", ok: false },
              ].map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 text-xs"
                >
                  <r.icon className={`h-4 w-4 ${r.ok ? "text-primary" : "text-white/40"}`} />
                  <span className="text-white/80">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Problem ---------- */
function Problem() {
  const stats = [
    { icon: WifiOff, title: "Network Shutdowns", text: "Internet shutdowns occur during disasters, conflicts, and emergencies." },
    { icon: AlertTriangle, title: "Apps Need Signal", text: "Existing safety apps require connectivity at the exact moment of distress." },
    { icon: Bell, title: "Help Unreachable", text: "Emergency services become unreachable in blackout zones." },
    { icon: Users, title: "Millions Disconnected", text: "Millions of users remain disconnected when they need help most." },
  ];
  return (
    <Section id="problem" eyebrow="The Problem" title="The Moment Safety Apps Fail">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.title}
            className="reveal rounded-2xl border border-border bg-white p-6 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-12 rounded-2xl border border-border bg-gradient-to-br from-white to-muted p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Failure Timeline</p>
        <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          {["Emergency", "No Network", "Traditional Apps Fail"].map((step, i, arr) => (
            <div key={step} className="flex flex-1 items-center gap-4">
              <div className="flex-1 rounded-xl border border-border bg-white px-5 py-4 text-center">
                <p className="text-xs text-muted-foreground">Step {i + 1}</p>
                <p className="mt-1 text-sm font-semibold">{step}</p>
              </div>
              {i < arr.length - 1 && <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Solution ---------- */
function Solution() {
  const steps = [
    { icon: AlertTriangle, label: "User Presses SOS" },
    { icon: Database, label: "Alert Stored Offline" },
    { icon: Radio, label: "Nearby Device Relay" },
    { icon: Cloud, label: "Connectivity Restored" },
    { icon: CheckCircle2, label: "Alert Delivered" },
  ];
  return (
    <Section id="solution" eyebrow="Our Solution" title="Introducing SheShield Mesh">
      <p className="reveal mx-auto -mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        An offline-first emergency communication system that stores SOS alerts locally, relays them
        through nearby devices, and delivers them once connectivity becomes available.
      </p>

      <div className="reveal mt-14 rounded-3xl border border-border bg-gradient-to-b from-white to-primary-soft/60 p-8 sm:p-12">
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.label} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-soft">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium">{s.label}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute right-0 top-5 hidden h-4 w-4 translate-x-1/2 text-primary/40 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const features = [
    { icon: WifiOff, title: "Offline SOS", text: "Create emergency alerts without internet or cellular connectivity." },
    { icon: Radio, title: "Mesh Relay Network", text: "Relay emergency signals through nearby devices." },
    { icon: Smartphone, title: "Shake-to-SOS", text: "Activate emergency mode instantly by shaking the phone." },
    { icon: Users, title: "Trusted Contacts", text: "Automatically notify selected contacts once connectivity is restored." },
    { icon: Activity, title: "Safe Beacon Mode", text: "Create a proactive safety session before entering risky environments." },
    { icon: Compass, title: "Community Rescue Network", text: "Nearby users can help relay alerts through a decentralized safety network." },
  ];
  return (
    <Section id="features" eyebrow="Core Features" title="Designed for the worst-case moment.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const steps = [
    "User activates SOS.",
    "Alert is securely stored on the device.",
    "Nearby devices receive and relay the alert.",
    "One device reconnects to the internet.",
    "Alert syncs to responders and trusted contacts.",
  ];
  return (
    <Section id="how" eyebrow="How It Works" title="A signal that refuses to die.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="reveal flex gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-white text-sm font-semibold text-primary shadow-ring">
                0{i + 1}
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-white p-5 shadow-ring">
                <p className="text-sm text-foreground">{s}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- MVP ---------- */
function MVP() {
  const items = [
    "Emergency SOS Generation",
    "Offline Alert Storage",
    "Mesh Relay Simulation",
    "Trusted Contact Management",
    "Shake Detection",
    "Emergency Delivery Workflow",
    "Realistic User Journey",
  ];
  return (
    <Section id="mvp" eyebrow="Hackathon MVP" title="What we shipped.">
      <div className="reveal mx-auto max-w-3xl rounded-3xl border border-border bg-gradient-to-br from-white via-white to-primary-soft/50 p-8 sm:p-10">
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-center gap-3 rounded-xl border border-border/70 bg-white px-4 py-3"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  const stack = [
    { icon: Smartphone, label: "Frontend", value: "Flutter" },
    { icon: Server, label: "Backend", value: "Supabase" },
    { icon: Bell, label: "Notifications", value: "Firebase Cloud Messaging" },
    { icon: Database, label: "Local Storage", value: "Hive" },
    { icon: Radio, label: "Offline Comms", value: "Nearby Connections API" },
    { icon: Layers, label: "Database", value: "PostgreSQL" },
    { icon: Cloud, label: "Hosting", value: "Vercel" },
    { icon: Zap, label: "Architecture", value: "Offline-First Mobile" },
  ];
  return (
    <Section id="tech" eyebrow="Tech Stack" title="Engineered with the right tools.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((s, i) => (
          <div
            key={s.label}
            className="reveal flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="text-sm font-semibold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Architecture ---------- */
function Architecture() {
  const layers = ["Flutter App", "Local Storage", "Mesh Relay Layer", "Supabase Backend", "Emergency Contacts"];
  return (
    <Section id="arch" eyebrow="How We Built It" title="Built for Resilience">
      <p className="reveal mx-auto -mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
        SheShield Mesh follows an offline-first architecture where emergency alerts are never
        dependent on immediate connectivity. Alerts are stored locally, relayed through nearby
        devices, and synchronized automatically when network access becomes available.
      </p>
      <div className="reveal mx-auto mt-14 max-w-xl">
        <div className="space-y-3">
          {layers.map((l, i) => (
            <div key={l} className="flex flex-col items-center">
              <div
                className="w-full rounded-2xl border border-border bg-white px-6 py-4 text-center shadow-ring"
                style={{ width: `${100 - i * 6}%` }}
              >
                <p className="text-sm font-semibold">{l}</p>
              </div>
              {i < layers.length - 1 && (
                <div className="my-1 h-6 w-px bg-gradient-to-b from-primary to-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Impact ---------- */
function Impact() {
  const cards = [
    { icon: Heart, title: "Women Safety" },
    { icon: AlertTriangle, title: "Disaster Response" },
    { icon: MapPin, title: "Remote Areas" },
    { icon: Globe2, title: "Conflict Zones" },
    { icon: WifiOff, title: "Network Shutdowns" },
    { icon: Train, title: "Transit Dead Zones" },
  ];
  return (
    <Section id="impact" eyebrow="Impact" title="Why It Matters">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-ring transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            <c.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-base font-semibold tracking-tight">{c.title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Team ---------- */
function Team() {
  const roles = [
    { title: "Product", desc: "Shaping the vision and user journey." },
    { title: "Development", desc: "Building offline-first mobile systems." },
    { title: "Design", desc: "Crafting calm UI for high-stress moments." },
    { title: "Research", desc: "Field studies on connectivity blackouts." },
  ];
  return (
    <Section id="team" eyebrow="Team" title="Roles that built it.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <div
            key={r.title}
            className="reveal rounded-2xl border border-border bg-white p-6 shadow-ring"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <p className="text-xs uppercase tracking-wider text-primary">{r.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section id="cta" className="px-6 py-28">
      <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ink px-8 py-20 text-center text-white sm:px-16">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Because Emergencies Don't Wait <br />
            for <span className="italic text-primary">Connectivity.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/70">
            Building a future where safety works everywhere.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              View Prototype <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground">
            <Shield className="h-3 w-3" />
          </div>
          <span className="font-medium text-foreground">SheShield Mesh</span>
          <span className="text-muted-foreground">© 2026</span>
        </div>
        <p>Safety Beyond Connectivity</p>
        <p className="text-xs uppercase tracking-wider">Hackathon Project</p>
      </div>
    </footer>
  );
}

/* ---------- Shared Section ---------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
