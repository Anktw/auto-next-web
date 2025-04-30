import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Code, Rocket, Terminal, Zap, Globe, Laptop } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 mx-auto">
        <section className="container py-12 md:py-16">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Auto-Next Automates your Next.js development workflow with these features.
            </p>
          </div>

          <div className="grid gap-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Automatic Development Server</h2>
                <p className="text-muted-foreground mb-4">
                  NextDev Launcher automatically runs <code className="bg-muted px-1 py-0.5 rounded">npm run dev</code>{" "}
                  when VS Code starts if a workspace is open. No more manual terminal commands to start your development
                  server.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Saves time on every development session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Configurable to run on workspace open or on demand</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <Image
                  src="/images/start.png"
                  width={600}
                  height={400}
                  alt="Automatic development server"
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="md:order-1">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Terminal className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Smart Server Detection</h2>
                <p className="text-muted-foreground mb-4">
                  The extension intelligently waits until your Next.js dev server is fully ready before launching the
                  browser. No more "Connection Refused" errors or blank pages.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Monitors server output for ready state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ensures browser only opens when app is ready to serve</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border overflow-hidden shadow-lg md:order-0">
                <Image
                  src="/images/no-more.png"
                  width={600}
                  height={400}
                  alt="Smart server detection"
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Dynamic Port Detection</h2>
                <p className="text-muted-foreground mb-4">
                  Automatically detects and opens the correct URL in your browser, even if Next.js uses a non-standard
                  port due to port conflicts.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Handles port 3000, 3001, or any other port Next.js selects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Works with custom port configurations</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <Image
                  src="/images/bussy.png"
                  width={600}
                  height={400}
                  alt="Dynamic port detection"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
