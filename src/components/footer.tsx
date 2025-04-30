import Link from "next/link"
import { Code, Github, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <span className="font-bold">Auto-Next</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Automate your Next.js development workflow</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/extension" className="text-muted-foreground transition-colors hover:text-foreground">
                  Extension
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-muted-foreground transition-colors hover:text-foreground">
                  Links
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/anktw/auto-next"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                >
                  VS Code Marketplace
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Social</h3>
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/anktw"
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/unkittiwari"
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://unkit.vercel.app"
                className="text-muted-foreground transition-colors hover:text-foreground items-center justify-center"
                target="_blank"
              >
                <Image src="/vercel.svg" alt={"Portfolio"} width={16} height={16} >
                </Image>
                <span className="sr-only">Porfolio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} unkit.vercel.app. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
