import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, Code, Download, FileCode, Settings, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExtensionPage() {
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

          <div className="grid md:grid-cols-[2fr_1fr] gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Auto-Next</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Next.js development workflow with automatic server startup and browser launch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next" target="_blank">
                  <Button size="lg" className="gap-2">
                    <Download className="h-5 w-5" />
                    Install Extension
                  </Button>
                </Link>
                <Link href="https://github.com/anktw/auto-next" target="_blank">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github className="h-5 w-5" />
                    View Source
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden shadow-lg">
              <Image
                src="/images/vs-code.png"
                width={500}
                height={300}
                alt="NextDev Launcher Extension"
                className="w-full"
              />
            </div>
          </div>

          <Tabs defaultValue="installation" className="mb-12">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 h-auto">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
            </TabsList>
            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Guide</CardTitle>
                  <CardDescription>How to install NextDev Launcher in VS Code</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Method 1: VS Code Marketplace</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Open VS Code</li>
                      <li>Click on the Extensions icon in the Activity Bar</li>
                      <li>Search for "NextDev Launcher"</li>
                      <li>Click "Install"</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Method 2: Quick Install</h3>
                    <p className="mb-2">
                      Press <code className="bg-muted px-1 py-0.5 rounded">Ctrl+P</code> (or{" "}
                      <code className="bg-muted px-1 py-0.5 rounded">Cmd+P</code> on macOS) and paste:
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm">ext install NextDevLauncher</div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Method 3: Manual Installation</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Download the .vsix file from the{" "}
                        <Link
                          href="https://github.com/yourusername/anktw/auto-next"
                          className="text-primary underline"
                          target="_blank"
                        >
                          GitHub releases page
                        </Link>
                      </li>
                      <li>In VS Code, go to Extensions view</li>
                      <li>Click the "..." menu at the top-right of the Extensions view</li>
                      <li>Select "Install from VSIX..."</li>
                      <li>Choose the downloaded .vsix file</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>How to Use</CardTitle>
                  <CardDescription>Getting started with NextDev Launcher</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Automatic Mode</h3>
                    <p className="mb-2">By default, NextDev Launcher will:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          Automatically run <code className="bg-muted px-1 py-0.5 rounded">npm run dev</code> when you
                          open a Next.js project
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Wait for the Next.js server to be ready</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Open your default browser to the correct localhost URL</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Manual Mode</h3>
                    <p className="mb-2">You can also trigger the extension manually:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Open the Command Palette (<code className="bg-muted px-1 py-0.5 rounded">Ctrl+Shift+P</code> or{" "}
                        <code className="bg-muted px-1 py-0.5 rounded">Cmd+Shift+P</code>)
                      </li>
                      <li>Type "NextDev: Start Development Server" and press Enter</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Status Bar</h3>
                    <p>
                      The extension adds a status bar item that shows the current state of your Next.js server and
                      allows quick access to commands.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="configuration" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration Options</CardTitle>
                  <CardDescription>Customize NextDev Launcher to fit your workflow</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Extension Settings</h3>
                    <p className="mb-4">You can customize the extension behavior in your VS Code settings:</p>

                    <div className="space-y-4">
                      <div className="border rounded-md p-4">
                        <div className="flex items-start gap-2">
                          <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">nextdev.autoStart</h4>
                            <p className="text-sm text-muted-foreground">
                              Enable/disable automatic server start when opening a workspace
                            </p>
                            <p className="text-sm mt-1">
                              <span className="font-medium">Default:</span> true
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <div className="flex items-start gap-2">
                          <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">nextdev.openBrowser</h4>
                            <p className="text-sm text-muted-foreground">Enable/disable automatic browser opening</p>
                            <p className="text-sm mt-1">
                              <span className="font-medium">Default:</span> true
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <div className="flex items-start gap-2">
                          <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">nextdev.customCommand</h4>
                            <p className="text-sm text-muted-foreground">
                              Custom command to run instead of "npm run dev"
                            </p>
                            <p className="text-sm mt-1">
                              <span className="font-medium">Default:</span> ""
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-md p-4">
                        <div className="flex items-start gap-2">
                          <Settings className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">nextdev.browserPath</h4>
                            <p className="text-sm text-muted-foreground">
                              Path to browser executable (leave empty for system default)
                            </p>
                            <p className="text-sm mt-1">
                              <span className="font-medium">Default:</span> ""
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Configuration File</h3>
                    <p className="mb-2">
                      You can also create a <code className="bg-muted px-1 py-0.5 rounded">.nextdevrc.json</code> file
                      in your project root for project-specific settings:
                    </p>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                      {`{
  "autoStart": true,
  "openBrowser": true,
  "customCommand": "yarn dev",
  "browserPath": "/path/to/browser"
}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Version 1.2.0</h3>
                  <span className="text-xs text-muted-foreground">Released April 15, 2025</span>
                </div>
              </div>
              <div className="p-4 border-b">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Added support for custom browser selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improved detection of Next.js server ready state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fixed issue with port detection on Windows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Version 1.1.0</h3>
                  <span className="text-xs text-muted-foreground">Released March 1, 2025</span>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Added support for custom commands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improved error handling and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCode className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Added status bar indicator</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to streamline your Next.js workflow?</h2>
            <p className="text-muted-foreground mb-6 max-wxl mx-auto">
              Install NextDev Launcher today and boost your development productivity.
            </p>
            <Link href="https://marketplace.visualstudio.com/items?itemName=unkit.auto-next" target="_blank">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Install Extension
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
