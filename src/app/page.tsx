import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Rocket, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { Footer } from "@/components/footer"
import HeaderComp from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <section id="features" className="container py-20 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Features</h2>
            <p className="mt-4 text-muted-foreground">
              Automate Next.js development workflow with these powerful capabilities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="Auto-Start Development"
              description="Automatically runs npm run dev when VS Code starts if a workspace is open"
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-primary" />}
              title="Smart Server Detection"
              description="Waits until your Next.js dev server is ready before launching the browser"
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-primary" />}
              title="Dynamic Port Detection"
              description="Automatically opens the correct URL (e.g., http://localhost:3000, http://localhost:3001, etc.)"
            />
          </div>
        </section>

        <section id="links" className="container py-20 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Links</h2>
            <p className="mt-4 text-muted-foreground">Connect with me and install the extension</p>
          </div>

          <div className="mx-auto grid max-w-xl gap-8">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Github className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">GitHub Repository</h3>
                  <p className="text-sm text-muted-foreground">View the source code and contribute</p>
                </div>
                <a href="https://github.com/anktw/auto-next" className="ml-auto" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Code className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">VS Code Marketplace</h3>
                  <p className="text-sm text-muted-foreground">Install the extension</p>
                </div>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next"
                  className="ml-auto"
                  target="_blank"
                >
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Install
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <ExternalLink className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Portfolio</h3>
                  <p className="text-sm text-muted-foreground">Check out my other projects</p>
                </div>
                <a href="https://unkit.vercel.app" className="ml-auto" target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="container py-16 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Automate your Next.js workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-primary-foreground/90">
              Install the extension today and boost your development productivity
            </p>
            <div className="mt-8">
              <Link href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next" target="_blank">
                <Button size="lg" variant="secondary">
                  Install Extension
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
