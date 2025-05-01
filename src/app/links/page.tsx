import Link from "next/link"
import { ArrowLeft, Code, ExternalLink, Github, Globe, Laptop, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LinksPage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Links</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Connect with me and explore more projects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <CardTitle>GitHub Repository</CardTitle>
                </div>
                <CardDescription>View the source code and contribute</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The extension is open source. Feel free to explore the code, report issues, or contribute
                  improvements.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://github.com/anktw/auto-next" target="_blank" className="w-full">
                  <Button className="w-full">
                    Visit Repository
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  <CardTitle>VS Code Marketplace</CardTitle>
                </div>
                <CardDescription>Install the extension</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get the latest version from the official Visual Studio Code Marketplace.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next"
                  target="_blank"
                  className="w-full"
                >
                  <Button className="w-full">
                    Install Extension
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <CardTitle>Portfolio</CardTitle>
                </div>
                <CardDescription>Check out my other projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore my portfolio
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://unkit.vercel.app" target="_blank" className="w-full">
                  <Button className="w-full">
                    Visit Portfolio
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  <CardTitle>Twitter</CardTitle>
                </div>
                <CardDescription>Follow for updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Follow me on Twitter
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://twitter.com/unkittiwari" target="_blank" className="w-full">
                  <Button className="w-full">
                    Follow on Twitter
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <CardTitle>Contact</CardTitle>
                </div>
                <CardDescription>Get in touch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://unkit.vercel.app/contact" className="w-full">
                  <Button className="w-full">
                    Contact me
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5" />
                  <CardTitle>Other Projects</CardTitle>
                </div>
                <CardDescription>Explore more projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Check out my other projects
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://unkit.vercel.app/projects"
                  target="_blank"
                  className="w-full"
                >
                  <Button className="w-full">
                    View Other Projects
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
