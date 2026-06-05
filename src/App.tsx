import './App.css'
import type { ReactNode } from 'react'
import lystviaIcon from './assets/lystvia-icon.png'

type RouteKey = 'home' | 'privacy' | 'support' | 'terms'

type NavItem = {
  href: string
  label: string
  route: RouteKey
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', route: 'home' },
  { href: '/privacy', label: 'Privacy', route: 'privacy' },
  { href: '/support', label: 'Support', route: 'support' },
  { href: '/terms', label: 'Terms', route: 'terms' },
]

const features = [
  {
    tone: 'grocery',
    eyebrow: 'Grocery lists',
    title: 'Build shopping lists that stay easy to scan.',
    text: 'Track pending items, completed items, quantities, categories, stores, and estimated totals in one calm list.',
  },
  {
    tone: 'recipes',
    eyebrow: 'Recipes',
    title: 'Turn meals into useful ingredients.',
    text: 'Save recipe notes and ingredients so weekly planning can feed directly into grocery prep.',
  },
  {
    tone: 'meal',
    eyebrow: 'Weekly plan',
    title: 'Plan the week before the store run.',
    text: 'Map meals across the week and generate a practical list from what you plan to cook.',
  },
  {
    tone: 'household',
    eyebrow: 'Household lists',
    title: 'Coordinate shared shopping without clutter.',
    text: 'Prepare for household list sharing while keeping the everyday app focused on groceries and meals.',
  },
]

const legalUpdated = 'June 2026'

function getRoute(): RouteKey {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/privacy') return 'privacy'
  if (path === '/support') return 'support'
  if (path === '/terms') return 'terms'
  return 'home'
}

function Header({ route }: { route: RouteKey }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Lystvia home">
        <span className="brand-mark">
          <img src={lystviaIcon} alt="Lystvia logo" />
        </span>
        <span className="brand-copy">
          <strong>Lystvia</strong>
          <small>Plan meals. Build lists.</small>
        </span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            aria-current={route === item.route ? 'page' : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Lystvia</strong>
        <p>© 2026 Lystvia. All rights reserved.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/privacy">Privacy</a>
        <a href="/support">Support</a>
        <a href="/terms">Terms</a>
      </nav>
    </footer>
  )
}

function AppPreview() {
  return (
    <section className="preview-stack" aria-label="Lystvia app preview">
      <article className="preview-card preview-week">
        <div className="preview-card-header">
          <div>
            <span className="pill">This week</span>
            <h2>Plan meals. Build lists. Shop smarter.</h2>
          </div>
          <div className="signal">
            <strong>4</strong>
            <span>planned meals</span>
          </div>
        </div>
        <p>4 meals planned. 12 pending items.</p>
      </article>

      <article className="preview-card preview-shopping">
        <div className="preview-card-header">
          <div>
            <span className="eyebrow">Active list</span>
            <h3>Weekly Shop</h3>
            <p>Neighborhood Market</p>
          </div>
          <span className="badge">Private</span>
        </div>
        <div className="metric-grid">
          <div>
            <strong>12</strong>
            <span>Pending</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Done</span>
          </div>
          <div className="store-total">
            <strong>$38.40</strong>
            <span>Est. total</span>
          </div>
        </div>
        <div className="item-row">
          <span className="checkbox" aria-hidden="true" />
          <div>
            <strong>Bananas</strong>
            <span>1 bunch - Produce - Aisle 2</span>
          </div>
        </div>
      </article>

      <div className="mini-grid">
        <article className="mini-card recipe">
          <span className="eyebrow">Recipes</span>
          <h3>Chicken tacos</h3>
          <p>8 ingredients</p>
        </article>
        <article className="mini-card store">
          <span className="eyebrow">Store</span>
          <h3>Route by aisle</h3>
          <p>Produce, dairy, pantry</p>
        </article>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="section-kicker">Local-first grocery planning</span>
          <h1>Lystvia keeps meals, recipes, and shopping lists in one calm mobile workflow.</h1>
          <p>
            Plan a week of meals, save recipes, build grocery lists, and coordinate household
            shopping without turning everyday errands into a project.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="primary-link" href="#features">Explore features</a>
            <a className="secondary-link" href="/support">Get support</a>
          </div>
        </div>
        <AppPreview />
      </section>

      <section className="section" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <span className="section-kicker">What Lystvia does</span>
          <h2 id="features-title">Practical tools for the grocery loop.</h2>
          <p>
            The web presence mirrors the app identity while the product itself stays focused on
            mobile, local-first shopping and meal planning.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className={`feature-card ${feature.tone}`} key={feature.title}>
              <span className="eyebrow">{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" aria-labelledby="local-first-title">
        <div>
          <span className="section-kicker">Built for real grocery use</span>
          <h2 id="local-first-title">Fast to read while planning, cooking, or shopping.</h2>
          <p>
            Lystvia uses compact cards, clear item states, and module colors so lists, recipes,
            weekly planning, and store context are easy to tell apart at a glance.
          </p>
        </div>
        <div className="workflow-card">
          <div className="workflow-step">
            <span>1</span>
            <strong>Save recipes</strong>
            <p>Capture ingredients and meal notes.</p>
          </div>
          <div className="workflow-step">
            <span>2</span>
            <strong>Plan the week</strong>
            <p>Choose meals before the shopping trip.</p>
          </div>
          <div className="workflow-step">
            <span>3</span>
            <strong>Shop the list</strong>
            <p>Review pending items and estimated totals.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" kicker="Google Play policy draft">
      <p>Last updated: {legalUpdated}</p>
      <p>
        Lystvia is a mobile app for grocery lists, recipes, meal planning, and household shopping
        coordination. This draft explains how the app is intended to handle information.
      </p>
      <h2>Information Lystvia Stores</h2>
      <p>
        Lystvia stores the grocery lists, recipe details, weekly plan entries, store labels,
        quantities, notes, and household-related information that you enter into the app.
      </p>
      <h2>Local-First Use</h2>
      <p>
        Lystvia is designed around local-first mobile use. Your everyday grocery and planning data
        is used to provide app features such as list management, recipe planning, and shopping
        preparation.
      </p>
      <h2>No Analytics, Cookies, Payments, or Advertising</h2>
      <p>
        This website does not use analytics, cookies, login, payments, advertising trackers, or a
        Supabase connection. Billing is not active yet.
      </p>
      <h2>Support Requests</h2>
      <p>
        If you email support@lystvia.app, the information you provide in that message is used only
        to respond to your request and maintain support records.
      </p>
      <h2>Children</h2>
      <p>
        Lystvia is not intended to collect personal information from children. If you believe a
        child provided personal information through a support request, contact support@lystvia.app.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent to support@lystvia.app.</p>
    </LegalPage>
  )
}

function SupportPage() {
  return (
    <LegalPage title="Support" kicker="Help and contact">
      <p>
        For Lystvia support, email <a href="mailto:support@lystvia.app">support@lystvia.app</a>.
      </p>
      <h2>What to Include</h2>
      <p>
        Please include what you were trying to do, what happened, your device type, and any steps
        that help reproduce the issue. Do not include payment information.
      </p>
      <h2>Current Service Notes</h2>
      <p>
        Lystvia does not currently offer web login, payments, cookies, analytics, or billing.
        Support for the mobile app is handled by email.
      </p>
      <h2>Response Expectations</h2>
      <p>
        Support messages are reviewed as availability allows. Lystvia may request additional
        details if an issue cannot be reproduced from the first report.
      </p>
    </LegalPage>
  )
}

function TermsPage() {
  return (
    <LegalPage title="Terms of Use" kicker="Simple draft">
      <p>Last updated: {legalUpdated}</p>
      <h2>Use of Lystvia</h2>
      <p>
        Lystvia is provided to help manage grocery lists, recipes, weekly meal plans, and household
        shopping coordination. You are responsible for the information you enter and how you use it.
      </p>
      <h2>No Checkout or Payment Service</h2>
      <p>
        Lystvia does not sell groceries, process payments, or guarantee store prices. Estimated
        totals are planning aids only. Billing is not active yet.
      </p>
      <h2>Acceptable Use</h2>
      <p>
        Do not use Lystvia to store unlawful content, attempt to disrupt the service, or misuse
        support channels.
      </p>
      <h2>Availability</h2>
      <p>
        Lystvia may change, pause, or discontinue features as the app evolves. Draft legal text may
        be updated before production release.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to support@lystvia.app.</p>
    </LegalPage>
  )
}

function LegalPage({
  children,
  kicker,
  title,
}: {
  children: ReactNode
  kicker: string
  title: string
}) {
  return (
    <main className="legal-main">
      <article className="legal-card">
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </article>
    </main>
  )
}

function App() {
  const route = getRoute()

  return (
    <>
      <Header route={route} />
      {route === 'privacy' ? <PrivacyPage /> : null}
      {route === 'support' ? <SupportPage /> : null}
      {route === 'terms' ? <TermsPage /> : null}
      {route === 'home' ? <HomePage /> : null}
      <Footer />
    </>
  )
}

export default App
