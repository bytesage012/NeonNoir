import React, { useState, useEffect } from "react";
import {
  Code,
  Cpu,
  Rocket,
  Shield,
  GitBranch,
  Menu,
  X,
  Play,
  Terminal,
  FileCode,
  Zap,
  Star,
  Check,
  Calendar,
  BookOpen,
  FileText,
  HelpCircle,
  Mail,
  Users,
  Settings,
  CreditCard,
  BarChart3,
  Globe,
  Server,
  Workflow,
  Bot,
  Cloud,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

// Mock data for the entire application
const initialData = {
  features: [
    {
      id: 1,
      icon: Zap,
      title: "Lightning Builds",
      description:
        "Sub-second hot reload and optimized bundling for rapid development cycles",
      metrics: "0.3s avg build time",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 2,
      icon: Cpu,
      title: "Smart Caching",
      description:
        "Intelligent dependency tracking and persistent cache across sessions",
      metrics: "92% cache hit rate",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      icon: Shield,
      title: "Zero Config Security",
      description:
        "Automated vulnerability scanning and dependency audit built into the workflow",
      metrics: "99.9% secure deps",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 4,
      icon: GitBranch,
      title: "Seamless Git Integration",
      description:
        "Automatic branch deployment and preview environments for every PR",
      metrics: "Instant previews",
      color: "from-violet-500 to-purple-600",
    },
  ],
  integrations: [
    {
      name: "Vite",
      status: "connected",
      color: "bg-[#646CFF]",
      description: "Lightning-fast build tool and dev server",
      icon: Zap,
    },
    {
      name: "TypeScript",
      status: "connected",
      color: "bg-[#3178C6]",
      description: "Full type safety and intelligent code completion",
      icon: FileCode,
    },
    {
      name: "ESLint",
      status: "connected",
      color: "bg-[#4B32C3]",
      description: "Automated code quality and style enforcement",
      icon: ShieldCheck,
    },
    {
      name: "Jest",
      status: "pending",
      color: "bg-[#C21325]",
      description: "Comprehensive testing framework with coverage",
      icon: Bot,
    },
    {
      name: "Docker",
      status: "connected",
      color: "bg-[#2496ED]",
      description: "Containerized development environments",
      icon: Server,
    },
    {
      name: "GitHub Actions",
      status: "connected",
      color: "bg-[#2088FF]",
      description: "CI/CD pipeline automation",
      icon: Workflow,
    },
  ],
  pricingPlans: [
    {
      name: "Developer",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers and side projects",
      features: [
        "Unlimited personal projects",
        "Basic CI/CD pipelines",
        "Community support",
        "50GB bandwidth/month",
        "Standard build minutes",
      ],
      cta: "Get Started",
      popular: false,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Team",
      price: "$25",
      period: "per user/month",
      description: "Everything teams need to ship collaboratively",
      features: [
        "Everything in Developer",
        "Team workspaces",
        "Advanced CI/CD",
        "Priority support",
        "500GB bandwidth/month",
        "Advanced analytics",
        "SSO integration",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description:
        "For organizations with advanced security and compliance needs",
      features: [
        "Everything in Team",
        "Custom SLAs",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Unlimited bandwidth",
        "Custom integrations",
        "Security audit",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-purple-500 to-pink-600",
    },
  ],
  docsSections: [
    {
      title: "Getting Started",
      description: "Set up your development environment in minutes",
      icon: Rocket,
      pages: ["Quick Start", "Installation", "Configuration", "First Project"],
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      pages: ["REST API", "GraphQL", "Webhooks", "Authentication"],
    },
    {
      title: "Guides",
      description: "Step-by-step tutorials and best practices",
      icon: BookOpen,
      pages: ["Deployment", "Testing", "Performance", "Security"],
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools and services",
      icon: Workflow,
      pages: ["GitHub", "Vercel", "Netlify", "AWS", "Google Cloud"],
    },
  ],
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Typewriter effect for code examples
  useEffect(() => {
    const currentExample = "npm create @neon/dev";
    if (typingIndex < currentExample.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(currentExample.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typingIndex]);

  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-[#0F0F13]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-white font-sora">
              NeonNoir.DX
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { key: "features", label: "Features" },
              { key: "integrations", label: "Integrations" },
              { key: "docs", label: "Docs" },
              { key: "pricing", label: "Pricing" },
            ].map((item) => (
              <button
                key={item.key}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.key
                    ? "text-[#6366F1]"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveSection(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              onClick={() => setDemoModalOpen(true)}
            >
              Schedule Demo
            </button>
            <button
              className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-[#6366F1]/20 transition-all duration-300"
              onClick={() => setActiveSection("get-started")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F13]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {[
              { key: "features", label: "Features" },
              { key: "integrations", label: "Integrations" },
              { key: "docs", label: "Docs" },
              { key: "pricing", label: "Pricing" },
              { key: "get-started", label: "Get Started" },
            ].map((item) => (
              <button
                key={item.key}
                className="block w-full text-left text-gray-300 hover:text-white py-2 font-medium"
                onClick={() => {
                  setActiveSection(item.key);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-3 rounded-lg font-medium"
              onClick={() => setDemoModalOpen(true)}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <div className="min-h-screen bg-[#0F0F13] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20">
                <span className="text-sm text-[#6366F1] font-medium">
                  v2.0 Now Live
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white font-sora leading-tight">
                Developer
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  {" "}
                  Experience{" "}
                </span>
                Reimagined
              </h1>
              <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-2xl">
                The complete toolkit for modern web development. Build faster,
                ship smarter, and focus on what matters—your code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-[#6366F1]/30 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setActiveSection("get-started")}
              >
                <Rocket className="w-5 h-5" />
                <span>Start Building</span>
              </button>
              <button
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setActiveSection("docs")}
              >
                <Terminal className="w-5 h-5" />
                <span>View Documentation</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "0.3s", label: "Avg Build Time" },
                { value: "99.9%", label: "Reliability" },
                { value: "⚡", label: "Performance" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white font-sora">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 font-ibm-plex-mono mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#1A1B23] rounded-2xl border border-white/10 shadow-2xl shadow-[#6366F1]/10 overflow-hidden">
              <div className="flex items-center space-x-2 p-4 border-b border-white/10 bg-[#0F0F13]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-gray-400 font-ibm-plex-mono">
                    terminal
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="font-ibm-plex-mono text-sm">
                  <div className="text-green-400 mb-4">$ {displayedCode}</div>
                  <div className="text-gray-400 animate-pulse">▊</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const FeaturesPage = () => (
    <div className="min-h-screen bg-[#0F0F13] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white font-sora mb-6">
            Powerful <span className="text-[#6366F1]">Features</span>
          </h1>
          <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-3xl mx-auto">
            Everything you need to build, test, and deploy with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {initialData.features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8 hover:border-[#6366F1]/30 transition-all duration-300 group hover:transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#6366F1]/20 transition-all duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white font-sora mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 font-ibm-plex-mono mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-[#10B981] text-lg font-semibold font-ibm-plex-mono">
                {feature.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Feature Sections */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white font-sora mb-6">
              Advanced <span className="text-[#6366F1]">Analytics</span>
            </h2>
            <p className="text-gray-300 font-ibm-plex-mono mb-8 text-lg">
              Real-time insights into your build performance, bundle size, and
              deployment metrics.
            </p>
            <div className="space-y-4">
              {[
                "Build performance tracking",
                "Bundle size analysis",
                "Dependency health monitoring",
                "Real-time error reporting",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#10B981]" />
                  <span className="text-gray-300 font-ibm-plex-mono">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8">
            <div className="font-ibm-plex-mono text-sm text-gray-300 space-y-2">
              <div className="text-green-400">$ neon analytics --build</div>
              <div>📊 Build Performance Report</div>
              <div>├── Average Build Time: 0.3s</div>
              <div>├── Cache Hit Rate: 92%</div>
              <div>├── Bundle Size: 45KB</div>
              <div>└── Performance Score: 98/100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntegrationsPage = () => (
    <div className="min-h-screen bg-[#0F0F13] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white font-sora mb-6">
            Seamless <span className="text-[#6366F1]">Integrations</span>
          </h1>
          <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-3xl mx-auto">
            Connect with your favorite tools and services for a unified workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {initialData.integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="bg-[#1A1B23] rounded-2xl border border-white/10 p-6 hover:border-[#6366F1]/30 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center`}
                >
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-sora">
                    {integration.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      integration.status === "connected"
                        ? "bg-[#10B981]/20 text-[#10B981]"
                        : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {integration.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 font-ibm-plex-mono text-sm">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-12 text-center">
          <h3 className="text-3xl font-bold text-white font-sora mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-gray-300 font-ibm-plex-mono mb-8 text-lg">
            We'll build it for you. Our team can create custom integrations for
            your specific workflow needs.
          </p>
          <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl hover:shadow-[#6366F1]/30 transition-all duration-300">
            Request Integration
          </button>
        </div>
      </div>
    </div>
  );

  const DocsPage = () => (
    <div className="min-h-screen bg-[#0F0F13] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white font-sora mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and examples to get you
            started
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-[#1A1B23] border border-white/10 rounded-xl px-6 py-4 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initialData.docsSections.map((section, index) => (
            <div
              key={section.title}
              className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8 hover:border-[#6366F1]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white font-sora mb-3">
                {section.title}
              </h3>
              <p className="text-gray-300 font-ibm-plex-mono text-sm mb-6">
                {section.description}
              </p>
              <div className="space-y-2">
                {section.pages.map((page, pageIndex) => (
                  <button
                    key={page}
                    className="block w-full text-left text-gray-400 hover:text-white font-ibm-plex-mono text-sm py-2 transition-colors duration-200"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white font-sora mb-6">
              Quick Start
            </h2>
            <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-6 font-ibm-plex-mono text-sm">
              <div className="text-green-400 mb-2"># Install NeonNoir CLI</div>
              <div className="text-gray-300 mb-4">
                npm install -g @neonnoir/cli
              </div>

              <div className="text-green-400 mb-2"># Create new project</div>
              <div className="text-gray-300 mb-4">neon create my-app</div>

              <div className="text-green-400 mb-2"># Start development</div>
              <div className="text-gray-300">cd my-app && neon dev</div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white font-sora mb-6">
              Popular Guides
            </h2>
            <div className="space-y-4">
              {[
                "Getting Started with TypeScript",
                "Deploying to Production",
                "Testing Best Practices",
                "Performance Optimization",
                "Security Guidelines",
              ].map((guide, index) => (
                <button
                  key={guide}
                  className="w-full text-left bg-[#1A1B23] border border-white/10 rounded-xl p-4 hover:border-[#6366F1]/30 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-ibm-plex-mono">
                      {guide}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#6366F1] transition-colors duration-200" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen bg-[#0F0F13] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white font-sora mb-6">
            Simple, <span className="text-[#6366F1]">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-3xl mx-auto">
            Choose the plan that works best for you and your team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initialData.pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-[#1A1B23] rounded-2xl border ${
                plan.popular
                  ? "border-[#6366F1] shadow-xl shadow-[#6366F1]/20"
                  : "border-white/10"
              } p-8 relative transition-all duration-300 hover:transform hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white font-sora mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white font-sora">
                    {plan.price}
                  </span>
                  {plan.period !== "forever" && (
                    <span className="text-gray-400 font-ibm-plex-mono ml-2">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 font-ibm-plex-mono">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-[#10B981]" />
                    <span className="text-gray-300 font-ibm-plex-mono text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-xl hover:shadow-[#6366F1]/30"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
                onClick={() =>
                  plan.name === "Enterprise"
                    ? setDemoModalOpen(true)
                    : setActiveSection("get-started")
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 font-ibm-plex-mono mb-8">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-all duration-300">
              Compare Plans
            </button>
            <button
              className="border border-[#6366F1] text-[#6366F1] px-8 py-4 rounded-lg font-medium hover:bg-[#6366F1]/10 transition-all duration-300"
              onClick={() => setDemoModalOpen(true)}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const GetStartedPage = () => (
    <div className="min-h-screen bg-[#0F0F13] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white font-sora mb-6">
            Get Started in <span className="text-[#6366F1]">Minutes</span>
          </h1>
          <p className="text-xl text-gray-300 font-ibm-plex-mono max-w-2xl mx-auto">
            Start building with NeonNoir today. No complex setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white font-sora mb-4">
                Quick Start
              </h3>
              <div className="font-ibm-plex-mono text-sm space-y-4">
                <div>
                  <div className="text-green-400 mb-1">
                    $ npm create @neon/dev
                  </div>
                  <div className="text-gray-400 text-xs">
                    Create a new project
                  </div>
                </div>
                <div>
                  <div className="text-green-400 mb-1">$ cd my-app</div>
                  <div className="text-gray-400 text-xs">
                    Navigate to project
                  </div>
                </div>
                <div>
                  <div className="text-green-400 mb-1">$ neon dev</div>
                  <div className="text-gray-400 text-xs">
                    Start development server
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white font-sora mb-4">
                What's Next?
              </h3>
              <div className="space-y-3">
                {[
                  "Read the documentation",
                  "Explore example projects",
                  "Join our community",
                  "Set up deployments",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-4 h-4 text-[#6366F1]" />
                    <span className="text-gray-300 font-ibm-plex-mono">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1B23] rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white font-sora mb-6">
                Create Account
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
                />
                <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-xl font-medium hover:shadow-xl hover:shadow-[#6366F1]/30 transition-all duration-300">
                  Create Account
                </button>
              </div>
              <div className="text-center mt-4">
                <span className="text-gray-400 font-ibm-plex-mono text-sm">
                  Already have an account?{" "}
                  <button className="text-[#6366F1] hover:underline">
                    Sign in
                  </button>
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white font-sora mb-4">
                Join Thousands of Developers
              </h3>
              <p className="text-white/80 font-ibm-plex-mono mb-6">
                Start building with the complete developer experience platform
              </p>
              <div className="flex items-center justify-center space-x-1 text-white/60">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <span className="font-ibm-plex-mono text-sm ml-2">
                  4.9/5 from 2,400+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DemoModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#1A1B23] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-white font-sora">
            Schedule a Demo
          </h3>
          <button
            onClick={() => setDemoModalOpen(false)}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono placeholder-gray-400 focus:outline-none focus:border-[#6366F1]"
          />
          <select className="w-full bg-[#0F0F13] border border-white/10 rounded-xl px-4 py-3 text-white font-ibm-plex-mono focus:outline-none focus:border-[#6366F1]">
            <option>Team Size</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>

          <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-xl font-medium hover:shadow-xl hover:shadow-[#6366F1]/30 transition-all duration-300 mt-4">
            Schedule Demo
          </button>
        </div>

        <p className="text-gray-400 font-ibm-plex-mono text-sm mt-4 text-center">
          We'll contact you within 24 hours to schedule your personalized demo
        </p>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#0F0F13] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-white font-sora">
                NeonNoir.DX
              </span>
            </div>
            <p className="text-gray-400 font-ibm-plex-mono text-sm">
              The complete developer experience platform for modern web
              development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-sora font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              {["Features", "Integrations", "Pricing", "Changelog"].map(
                (item) => (
                  <button
                    key={item}
                    className="block text-gray-400 hover:text-white font-ibm-plex-mono text-sm transition-colors duration-200"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-sora font-semibold mb-4">
              Resources
            </h4>
            <div className="space-y-2">
              {["Documentation", "API Reference", "Guides", "Support"].map(
                (item) => (
                  <button
                    key={item}
                    className="block text-gray-400 hover:text-white font-ibm-plex-mono text-sm transition-colors duration-200"
                    onClick={() => setActiveSection("docs")}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-sora font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <button
                  key={item}
                  className="block text-gray-400 hover:text-white font-ibm-plex-mono text-sm transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm font-ibm-plex-mono">
            © 2024 NeonNoir Developer Experience. Built for developers, by
            developers.
          </p>
        </div>
      </div>
    </footer>
  );

  const Search = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const renderCurrentPage = () => {
    switch (activeSection) {
      case "features":
        return <FeaturesPage />;
      case "integrations":
        return <IntegrationsPage />;
      case "docs":
        return <DocsPage />;
      case "pricing":
        return <PricingPage />;
      case "get-started":
        return <GetStartedPage />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F13]">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500&display=swap");

        .font-sora {
          font-family: "Sora", sans-serif;
        }

        .font-ibm-plex-mono {
          font-family: "IBM Plex Mono", monospace;
        }
      `}</style>

      <Navigation />
      {renderCurrentPage()}
      <Footer />
      {demoModalOpen && <DemoModal />}
    </div>
  );
};

export default App;
