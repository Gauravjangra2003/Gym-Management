'use client';
import { useState } from 'react';

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', phone: '', goal: '' });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
    <div className="w-full">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Left Side box */}
                <div className="space-y-6 flex flex-col justify-center lg:w-1/2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300 md:text-base mb-4">
                      Join The Club
                    </p>
                    <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-6 leading-tight">
                      Ready to transform your fitness journey?
                    </h2>
                    <p className="text-base text-zinc-300 md:text-lg leading-relaxed mb-8">
                      Book your complimentary strategy session. We&apos;ll create a personalized plan
                      covering training, recovery, and performance markers tailored to your goals.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">45-min strategy call</p>
                        <p className="text-sm text-zinc-400">Personalized consultation with expert coaches</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Movement screening</p>
                        <p className="text-sm text-zinc-400">Comprehensive mobility and movement assessment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-400 text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white mb-1">Custom roadmap</p>
                        <p className="text-sm text-zinc-400">Personalized plan with clear next steps</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side box */}

            <div className="lg:flex lg:items-center lg:w-1/2">
            <form onSubmit={handleSubmit} className="w-full space-y-5 rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-zinc-900/60 p-6 md:p-8">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Full name"
                  className="w-full rounded-xl border-0 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:bg-white/10 focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
              </div>

              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Email address"
                  className="w-full rounded-xl border-0 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:bg-white/10 focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
              </div>

              <div>
                <input
                  type="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Phone number"
                  className="w-full rounded-xl border-0 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:bg-white/10 focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
              </div>

              <div>
                <textarea
                  value={formData.goal}
                  onChange={(e) => handleChange('goal', e.target.value)}
                  placeholder="What's your primary fitness goal?"
                  rows="4"
                  className="w-full rounded-xl border-0 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:bg-white/10 focus:ring-2 focus:ring-orange-500/50 transition-all resize-none"
                  />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-base font-bold text-white transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/50 hover:-translate-y-0.5"
                >
                Book Free Session
              </button>
              
              <p className="text-xs text-center text-zinc-400">
                We''ll respond within 24 hours
              </p>
            </form>
          </div>

        </div>
    </div>
       {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-gradient-to-br from-zinc-900 to-black p-8 text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-green-400 text-3xl">✓</span>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300 mb-2">
              Request received
            </p>
            <p className="text-2xl font-bold text-white mb-6">
              Successfully submitted!
            </p>
            <p className="text-sm text-zinc-400 mb-6">
              We''ll get back to you within 24 hours to schedule your session.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-orange-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Form