import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  Code2,
  Globe,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
  ArrowRight,
  Headphones,
  Layers,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Web Design, Next.js Development & Domain Services',
  description:
    'Professional Next.js website development packages, custom web design, and domain registration services.',
};

const CORE_SERVICES = [
  {
    icon: Code2,
    title: 'Next.js Web Development',
    description:
      'Ultra-fast, SEO-optimized web applications built with Next.js, React, and modern cloud architecture for instant page loads.',
  },
  {
    icon: Palette,
    title: 'Custom Web Design & UI/UX',
    description:
      'Clean, mobile-first, conversion-focused interfaces crafted to elevate your brand identity across desktop and mobile.',
  },
  {
    icon: Globe,
    title: 'Domain & DNS Management',
    description:
      'Hassle-free .com, .net, .shop, and .com.bd domain registration with free SSL, Cloudflare protection, and full ownership.',
  },
];

const WEB_PACKAGES = [
  {
    name: 'Starter Website',
    badge: 'Landing / Business',
    price: '৳3,500',
    period: 'One-Time Setup',
    description:
      'Ideal for personal brands, portfolios, and single-product promotional landing pages.',
    popular: false,
    features: [
      'Built with Next.js Static & ISR Architecture',
      'Mobile-First Responsive UI Design',
      'Custom Contact & Lead Capture Form',
      'Free SSL Certificate & Domain Connection',
      'SEO Meta Tags & Sitemap Configuration',
      'Sub-1 Second Page Load Performance',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business E-Commerce',
    badge: 'Most Popular',
    price: '৳8,999',
    period: 'One-Time Setup',
    description:
      'Complete online store built with Next.js for growing brands and retail businesses.',
    popular: true,
    features: [
      'Full Next.js Storefront & Admin Dashboard',
      'bKash, Nagad, Rocket & SSLCommerz Ready',
      'Pathao, Steadfast & RedX Courier Integration',
      'Facebook Pixel & Server-Side CAPI Tracking',
      'Product Variants, Coupons & Order Tracking',
      'Cloudflare CDN & Speed Optimization',
    ],
    cta: 'Choose Business Plan',
  },
  {
    name: 'Enterprise & Multi-Vendor',
    badge: 'Scale & SaaS',
    price: '৳14,999',
    period: 'One-Time Setup',
    description:
      'Custom multi-tenant or marketplace platform engineered for high-scale operations.',
    popular: false,
    features: [
      'Multi-Tenant / Reseller Store Architecture',
      'Custom Subdomain & Domain Routing',
      'Role-Based Admin, Staff & Vendor Panels',
      'Double-Entry Ledger & Profit Analytics',
      'Push Notifications & Automated Workflows',
      'Priority Technical Support & Training',
    ],
    cta: 'Request Enterprise',
  },
];

const DOMAIN_EXTENSIONS = [
  { ext: '.com', price: '৳1,650', cycle: '/ year', tag: 'Most Popular' },
  { ext: '.net', price: '৳1,850', cycle: '/ year', tag: 'Tech & Network' },
  { ext: '.org', price: '৳1,750', cycle: '/ year', tag: 'Organizations' },
  { ext: '.shop', price: '৳650', cycle: '/ year', tag: 'E-Commerce' },
  { ext: '.com.bd', price: '৳2,200', cycle: '/ 2 years', tag: 'Bangladesh' },
  { ext: '.xyz', price: '৳650', cycle: '/ year', tag: 'Startup' },
];

const WHY_NEXTJS = [
  {
    icon: Zap,
    title: 'Blazing Fast Speed',
    desc: 'Static & edge-cached pages load in under a second for higher conversions.',
  },
  {
    icon: Layers,
    title: 'SEO Ready Structure',
    desc: 'Server-rendered metadata, clean URLs, and structured schema built in.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Protected with HTTPS/SSL, modern headers, and Cloudflare edge security.',
  },
  {
    icon: Headphones,
    title: 'Reliable Support',
    desc: 'Dedicated guidance for domain setup, deployment, and ongoing updates.',
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-muted/30 py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-6">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Web Design, Next.js &amp; Domain Services
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground max-w-3xl mx-auto leading-tight">
            Modern <span className="text-primary">Next.js Websites</span> &amp; Domain Solutions for Your Business
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch a blazing-fast, SEO-friendly website designed to convert visitors into customers — paired with reliable domain registration and cloud setup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="rounded-xl font-bold px-6">
              <a href="#packages">
                View Web Packages
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl font-bold px-6">
              <a href="#domains">Domain Pricing</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Core Services</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Everything you need to establish, design, and scale your online presence under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-colors flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Next.js Web Development Packages */}
      <section id="packages" className="py-12 md:py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-2">
            <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider border-primary/30 text-primary">
              <Rocket className="w-3.5 h-3.5 mr-1.5" />
              Next.js Development Packages
            </Badge>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              Choose the Right Website Package
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Transparent one-time setup pricing. Every website is built from the ground up using Next.js for maximum speed and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {WEB_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border bg-card p-6 md:p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'border-primary shadow-lg ring-1 ring-primary/20 relative'
                    : 'border-border shadow-sm hover:border-primary/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-black text-foreground">{pkg.name}</h3>
                    <Badge
                      variant={pkg.popular ? 'default' : 'secondary'}
                      className="text-[11px] font-bold shrink-0"
                    >
                      {pkg.badge}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-5">{pkg.description}</p>

                  <div className="pb-5 mb-5 border-b border-border flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-black text-primary">{pkg.price}</span>
                    <span className="text-xs font-medium text-muted-foreground">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="mt-0.5 rounded-full bg-primary/10 text-primary p-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant={pkg.popular ? 'default' : 'outline'}
                  size="lg"
                  className="w-full rounded-xl font-bold"
                >
                  <Link href="/contact">
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Registration Section */}
      <section id="domains" className="py-12 md:py-16 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10 space-y-2">
          <Badge variant="outline" className="text-xs font-bold uppercase tracking-wider border-primary/30 text-primary">
            <Globe className="w-3.5 h-3.5 mr-1.5" />
            Domain Registration
          </Badge>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Register Your Brand Domain Today
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Get instant domain registration with free DNS configuration, SSL encryption, and full ownership control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {DOMAIN_EXTENSIONS.map((item) => (
            <div
              key={item.ext}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm hover:border-primary/50 transition-colors flex flex-col justify-between gap-3"
            >
              <div className="space-y-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {item.tag}
                </span>
                <p className="text-2xl font-black text-foreground pt-1">{item.ext}</p>
              </div>
              <div>
                <p className="text-lg font-extrabold text-primary">{item.price}</p>
                <p className="text-[11px] text-muted-foreground">{item.cycle}</p>
              </div>
              <Button asChild size="sm" variant="secondary" className="w-full rounded-lg text-xs font-bold">
                <Link href="/contact">Book Domain</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Next.js */}
      <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_NEXTJS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-5 space-y-2.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 text-center space-y-4 shadow-md">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Ready to Launch Your Website or Book a Domain?
            </h2>
            <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto">
              Reach out to our team to discuss your project requirements, select a package, or register your custom domain name.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button asChild size="lg" variant="secondary" className="rounded-xl font-bold px-7">
                <Link href="/contact">
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl font-bold px-7 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
