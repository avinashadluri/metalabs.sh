"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Brain,
  Rocket,
  Target,
  Users,
  ChartBarHorizontal,
  Code,
  Heart,
  Lightbulb,
  CurrencyDollar,
  DeviceMobile,
  ArrowUp,
  Lightning,
} from "phosphor-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const categories = [
  { id: "all", name: "All Apps" },
  { id: "health", name: "Health & Wellness", icon: Heart },
  { id: "productivity", name: "Productivity", icon: Target },
  { id: "ai", name: "Artificial Intelligence", icon: Brain },
  { id: "finance", name: "Finance", icon: CurrencyDollar },
  { id: "software", name: "Software Tools", icon: Code },
  { id: "mobile", name: "Mobile Apps", icon: DeviceMobile },
  { id: "growth", name: "Personal Growth", icon: ArrowUp },
  { id: "marketing", name: "Marketing", icon: ChartBarHorizontal },
  { id: "blog", name: "Blogs & Content", icon: Lightning },
];

const apps = [
  {
    title: "Thinki.sh",
    description: "Strategic thinking and planning tool",
    image: "/apps/thinkish.png",
    category: "health",
    link: "https://thinki.sh",
  },
  {
    title: "Ai Agent",
    description: "AI-powered task management with prioritization",
    image: "/apps/aiagent.png",
    category: "ai",
    link: "https://ai-agent.sh",
  },
  {
    title: "Agentic AI",
    description: "AI-powered task management with prioritization",
    image: "/apps/agenticai.png",
    category: "ai",
    link: "https://agenticai.sh",
  },
  {
    title: "PromptLib",
    description: "Library of AI prompts for various use cases",
    image: "/apps/promptlib.svg",
    category: "ai",
    link: "https://promptlib.metalabs.sh",
  },
  {
    title: "Glucose Pro",
    description: "Glucose related information and insights",
    image: "/apps/glucosepro.png",
    category: "health",
    link: "https://glucosepro.metalabs.sh",
  },
  {
    title: "Action Plan",
    description: "Action plan generator",
    image: "/apps/actionplan.png",
    category: "productivity",
    link: "https://actionplan.metalabs.sh",
  },
  {
    title: "Nishabdham",
    description: "Telugu language based blog",
    image: "/apps/nishabdham.jpg",
    category: "blog",
    link: "https://nishabdham.sh",
  },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description: "Advanced algorithms that understand and enhance  ideas",
  },
  {
    icon: Rocket,
    title: "Rapid Development",
    description:
      "Transform concepts into working applications at lightning speed",
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Work together with experts and enthusiasts worldwide",
  },
  {
    icon: Lightning,
    title: "Instant Deployment",
    description: "Deploy  applications with a single click",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [labRef, labInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || app.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full glass-nav z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket size={32} className="text-blue-400" weight="fill" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              MetaLabs
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="apps"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Apps
            </ScrollLink>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              Features
            </ScrollLink>
            <div className="relative">
              <button
                onClick={() => {
                  const popup = document.getElementById("contact-popup");
                  if (popup) popup.classList.toggle("hidden");
                }}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              >
                Contact
              </button>
              <div
                id="contact-popup"
                className="hidden absolute right-0 mt-2 p-4 bg-gray-800 rounded-lg shadow-lg z-50 w-64"
              >
                <p className="text-sm text-gray-300 mb-3">
                  Get in touch with Developer:
                </p>
                <p className="text-sm text-gray-300 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  avinashadluri@gmail.com
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("avinashadluri@gmail.com");
                      alert("Email copied to clipboard!");
                    }}
                    className="ml-2 text-blue-400 hover:text-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
                </p>
                <a
                  href="mailto:avinashadluri@gmail.com"
                  className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
            <Button className="glow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image - Shows first on mobile */}
            <div className="relative order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/hero.png"
                alt="MetaLabs Platform"
                className="relative w-full h-auto"
                width={1000}
                height={1000}
              />
            </div>

            {/* Content - Shows second on mobile */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Where
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Ideas{" "}
                </span>
                Become Reality
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Transform innovative concepts into powerful applications with
                MetaLabs&apos; cutting-edge development platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollLink
                  to="apps"
                  smooth={true}
                  duration={500}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto glow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0"
                  >
                    Get Started
                  </Button>
                </ScrollLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Section */}
      <section ref={labRef} id="about" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={labInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              The MetaLabs Process
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Lightbulb
                    size={32}
                    className="text-blue-400"
                    weight="fill"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ideation</h3>
                <p className="text-gray-400">
                  MetaLabs is the ultimate idea hub where innovation meets
                  execution. We don&apos;t just analyze concepts - we&apos;re
                  the central platform where groundbreaking ideas connect with
                  the resources needed to bring them to life
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Code size={32} className="text-purple-400" weight="fill" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Development</h3>
                <p className="text-gray-400">
                  Our cutting-edge development process leverages AI-assisted
                  coding, cloud-native architecture, and modern frameworks to
                  transform concepts into functional applications with
                  unprecedented speed and efficiency. We utilize CI/CD pipelines
                  and containerization to ensure seamless delivery of vision.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                  <Rocket size={32} className="text-pink-400" weight="fill" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Launch</h3>
                <p className="text-gray-400">
                  Deploy application to millions of users worldwide with our
                  comprehensive launch strategy. We handle everything from
                  infrastructure scaling and performance optimization to
                  marketing campaigns and user acquisition. Our platform ensures
                  seamless deployment across web, mobile, and desktop
                  environments while providing robust analytics to track growth
                  and engagement from day one.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Discover Our Apps
          </h2>

          <div className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Input
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-accent/50 border-gray-700"
                />
              </div>
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="w-full md:w-[200px] bg-accent/50 border-gray-700">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center">
                        {category.icon && (
                          <category.icon className="mr-2" size={18} />
                        )}
                        {category.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <Card
                key={app.title}
                className="glass-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-row p-4">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={app.image}
                      alt={app.title}
                      className="w-24 h-24 object-cover rounded-lg"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <CardTitle className="text-xl mb-2">{app.title}</CardTitle>
                    <CardDescription className="text-gray-400 mb-4">
                      {app.description}
                    </CardDescription>
                    <Button
                      className="glow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0 mt-auto"
                      onClick={() => window.open(app.link, "_blank")}
                    >
                      Launch App
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose MetaLabs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <feature.icon
                    size={32}
                    className="text-blue-400"
                    weight="fill"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket size={24} className="text-blue-400" weight="fill" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  MetaLabs
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Transforming ideas into reality, one app at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Apps
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} MetaLabs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
