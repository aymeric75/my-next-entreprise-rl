'use client'

const steps = [
  { number: 1, label: 'Connect your crypto wallet' },
  { number: 2, label: 'Select stablecoins to earn on' },
  { number: 3, label: 'Connect to our trading bot' },
  { number: 4, label: 'Enjoy your profits' }
]

const HowItWorks = () => (
  <section className="py-20 bg-white text-gray-900">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        It Cannot Be More Easy to Use
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center relative">
            <div className="w-24 h-24 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              {step.number}
            </div>
            <p className="mt-4 text-center font-medium w-40">
              {step.label}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-60px] transform -translate-y-1/2">
                <svg width="80" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 20 H80 L70 10 M80 20 L70 30" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
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

