import {
  ArrowRight,
  Code2,
  Copy,
  Download,
  Edit,
  Github,
  Heart,
  Monitor,
  Moon,
  Rocket,
  Settings,
  Share,
  Star,
  Sun,
  Trash2,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '~/components/ui/button/Button'
import { Checkbox } from '~/components/ui/checkbox/Checkbox'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '~/components/ui/context-menu/context-menu'
import { Divider } from '~/components/ui/divider/Divider'
import { Input } from '~/components/ui/input/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select/Select'
import { Slider } from '~/components/ui/slider/Slider'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip/Tooltip'
import { useSetTheme, useThemeAtomValue } from '~/hooks/common/useDark'

import { repository } from '../../../package.json'

export const Component = () => {
  const [starCount, setStarCount] = useState(42)
  const [isStarred, setIsStarred] = useState(false)
  const [likesCount, setLikesCount] = useState(127)
  const [isLiked, setIsLiked] = useState(false)
  const [showNotifications, setShowNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(false)

  const theme = useThemeAtomValue()
  const setTheme = useSetTheme()

  const handleStar = () => {
    setIsStarred(!isStarred)
    setStarCount((prev) => (isStarred ? prev - 1 : prev + 1))
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleContextAction = (_action: string) => {
    // You can add actual functionality here
  }

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Built with Vite for instant dev server and optimized builds',
    },
    {
      icon: Code2,
      title: 'Developer Experience',
      description:
        'ESLint, Prettier, Git hooks, and TypeScript configured out of the box',
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description:
        'Optimized builds, automatic code splitting, and modern tooling',
    },
  ]

  const techStack = [
    'Vite 5',
    'React 18',
    'TypeScript',
    'TailwindCSS 4',
    'Framer Motion',
    'React Router',
    'ESLint',
    'Prettier',
  ]

  return (
    <div className="min-h-screen transition-colors">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center">
                <Zap className="w-4 h-4 text-white dark:text-black" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Vite Template
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg">
              {themeOptions.map(({ value, icon: Icon, label }) => (
                <Tooltip key={value}>
                  <TooltipTrigger>
                    <button
                      onClick={() => setTheme(value)}
                      className={`
                        p-1.5 rounded-md transition-all text-xs font-medium
                        ${
                          theme === value
                            ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{label}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Ready for production
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
              Modern React
              <br />
              <span className="text-gray-500 dark:text-gray-400">Template</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              A production-ready template with modern tooling, best practices,
              and beautiful components. Start building immediately.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 border-0 px-8 py-3 h-auto text-base font-medium"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="ghost"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 px-8 py-3 h-auto text-base font-medium"
                onClick={() => window.open(repository.url, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Built with modern tools
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need for a professional development experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Everything you need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A complete development environment ready to go
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <feature.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Interactive Components
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Try out the included UI components
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-950">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Button Examples */}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">
                    Button Variants
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="primary" isLoading>
                        Loading
                      </Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">
                    Interactive Elements
                  </h3>
                  <div className="flex items-center gap-4">
                    <Tooltip>
                      <TooltipTrigger>
                        <button
                          onClick={handleStar}
                          className={`
                            p-2 border border-gray-200 dark:border-gray-800 rounded-lg transition-all
                            ${
                              isStarred
                                ? 'bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400'
                                : 'hover:border-gray-300 dark:hover:border-gray-700 text-gray-400 dark:text-gray-600'
                            }
                          `}
                        >
                          <Star
                            className={`w-4 h-4 ${isStarred ? 'fill-current' : ''}`}
                          />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>
                          <span>{isStarred ? 'Unstar' : 'Star'}</span>{' '}
                          <span>({starCount})</span>
                        </span>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <button
                          onClick={handleLike}
                          className={`
                            p-2 border border-gray-200 dark:border-gray-800 rounded-lg transition-all
                            ${
                              isLiked
                                ? 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
                                : 'hover:border-gray-300 dark:hover:border-gray-700 text-gray-400 dark:text-gray-600'
                            }
                          `}
                        >
                          <Heart
                            className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`}
                          />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>
                          <span>{isLiked ? 'Unlike' : 'Like'}</span>{' '}
                          <span>({likesCount})</span>
                        </span>
                      </TooltipContent>
                    </Tooltip>

                    <button
                      onClick={() =>
                        window.open(
                          'https://github.com/innei-template/vite-react-tailwind-template',
                          '_blank',
                        )
                      }
                      className="p-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Components */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Form Components
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Input Examples */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Input Fields
                    </h4>
                    <Input placeholder="Default input" />
                    <Input type="search" placeholder="Search input" />
                    <Input type="password" placeholder="Password input" />
                    <Input placeholder="Disabled input" disabled />
                  </div>

                  {/* Select Examples */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Select Dropdown
                    </h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                        <SelectItem value="option4" disabled>
                          Option 4 (Disabled)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Divider className="my-8" />

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Checkbox Examples */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Checkboxes
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox defaultChecked />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Checked by default
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Unchecked option
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
                        <Checkbox disabled />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Disabled checkbox
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Slider Examples */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Sliders
                    </h4>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Primary Slider
                        </label>
                        <Slider
                          defaultValue={[50]}
                          max={100}
                          step={1}
                          variant="primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Secondary Slider
                        </label>
                        <Slider
                          defaultValue={[25]}
                          max={100}
                          step={1}
                          variant="secondary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Context Menu Demo */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Context Menu
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Right-click on the card below to see the context menu in
                  action
                </p>

                <ContextMenu>
                  <ContextMenuTrigger>
                    <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer">
                      <div className="text-center">
                        <Settings className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Right-click me!
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Try the context menu functionality
                        </p>
                      </div>
                    </div>
                  </ContextMenuTrigger>

                  <ContextMenuContent className="w-56">
                    <ContextMenuLabel>Actions</ContextMenuLabel>
                    <ContextMenuSeparator />

                    <ContextMenuItem
                      onClick={() => handleContextAction('copy')}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </ContextMenuItem>

                    <ContextMenuItem
                      onClick={() => handleContextAction('edit')}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </ContextMenuItem>

                    <ContextMenuItem
                      onClick={() => handleContextAction('share')}
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </ContextMenuItem>

                    <ContextMenuItem
                      onClick={() => handleContextAction('download')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </ContextMenuItem>

                    <ContextMenuSeparator />

                    <ContextMenuLabel>Preferences</ContextMenuLabel>

                    <ContextMenuCheckboxItem
                      checked={showNotifications}
                      onCheckedChange={setShowNotifications}
                    >
                      Show notifications
                    </ContextMenuCheckboxItem>

                    <ContextMenuCheckboxItem
                      checked={autoSave}
                      onCheckedChange={setAutoSave}
                    >
                      Auto-save changes
                    </ContextMenuCheckboxItem>

                    <ContextMenuSeparator />

                    <ContextMenuItem
                      onClick={() => handleContextAction('delete')}
                      className="text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Start
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get up and running in less than a minute
            </p>

            <div className="p-6 bg-gray-900 dark:bg-gray-950 rounded-xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <span className="text-gray-400 text-sm font-mono">
                  Terminal
                </span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-400"># Clone and install</div>
                <div className="text-green-400">pnpm install</div>
                <div className="text-gray-400 mt-4">
                  # Start development server
                </div>
                <div className="text-green-400">pnpm dev</div>
                <div className="text-gray-400 mt-4"># Build for production</div>
                <div className="text-green-400">pnpm build</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
