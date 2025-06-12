'use client'

const steps = [
  "Connect your crypto wallet",
  "Select stablecoins to earn on",
  "Connect to our trading bot",
  "Enjoy your profits"
]

export default function PlugAndEarnSection() {
  return (
    <section className="bg-gradient-to-br from-purple-800 to-purple-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* LEFT: Text + Steps */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-snug">
            Plug and Earn in Just a Few Steps
          </h2>

          <ol className="space-y-8">
            {steps.map((text, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-purple-800 font-bold text-lg flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
                <p className="ml-4 text-lg font-medium">{text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* RIGHT: Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/plug-n-earn.png"
            alt="Plug and Earn Illustration"
            className="max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
