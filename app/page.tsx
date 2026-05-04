export default function Home() {
  const faqs = [
    {
      q: "How does sentiment analysis work?",
      a: "We use OpenAI to analyze each new review, scoring it for tone and flagging negative themes like poor service, wait times, or product issues."
    },
    {
      q: "How quickly will I be alerted?",
      a: "Our cron job checks for new reviews every hour. You'll receive an email or SMS alert within minutes of a negative review being detected."
    },
    {
      q: "Which businesses are supported?",
      a: "Any business listed on Google Maps with a Google My Business profile. Works for single locations, chains, and franchises."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Reputation Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the moment your Google reviews turn negative
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically monitor your Google My Business reviews, detect sentiment drops, and get instant email or SMS alerts before a bad reputation spreads.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your reputation</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor up to 5 Google Business locations",
              "Hourly review checks via cron",
              "AI sentiment analysis on every review",
              "Email & SMS alerts for negative reviews",
              "Sentiment trend dashboard",
              "Negative theme detection (service, wait, quality)"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[#21262d] pb-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Google Reviews Sentiment Tracker. All rights reserved.
      </footer>
    </main>
  );
}
