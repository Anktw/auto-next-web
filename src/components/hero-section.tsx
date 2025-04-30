import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-20 text-center md:py-32">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Auto-Next</h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A VS Code Extension Which Automatically Detects Next.js Project(with npm currently) -{">"} run "npm run dev" -{">"}Opens the server in default browser
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next" target="_blank">
            <Button size="lg">
              Install Extension
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          
          <Link href="/features">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </div>
        <div className="mt-8 w-full max-w-3xl overflow-hidden rounded-lg border shadow-xl">
          <Image
            src="/images/mainpage.png"
            width={1200}
            height={600}
            alt="NextDev Launcher Extension in action"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
