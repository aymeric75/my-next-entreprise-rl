'use client'

const steps = [
  { number: 1, label: 'Connect your crypto wallet' },
  { number: 2, label: 'Select stablecoins to earn on' },
  { number: 3, label: 'Connect to our trading bot' },
  { number: 4, label: 'Enjoy your profits' }
]

const HowItWorks = () => (
  <section className="py-24 bg-white text-gray-900">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        It Cannot Be More Easy to Use
      </h2>
      <div className="flex flex-col items-center space-y-12 relative">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center relative">
            <div className="w-24 h-24 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl z-10">
              {step.number}
            </div>
            <p className="mt-4 text-lg font-medium w-64">{step.label}</p>

            {/* Curvy SVG Arrow (not rendered for last step) */}
            {i < steps.length - 1 && (
              <div className="mt-6 mb-2">
                <svg width="64" height="100" viewBox="0 0 64 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 0 C32 30, 0 40, 32 70 C64 100, 32 100, 32 100"
                    stroke="#111827"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default HowItWorks
