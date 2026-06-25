'use client'
import { useState } from 'react'

const inputClass =
  'w-full bg-white/60 border border-white/50 rounded-xl px-4 py-3 text-[#000000] text-sm placeholder:text-[#000000]/40 focus:outline-none focus:ring-2 focus:ring-[#C5CBFA] focus:border-transparent transition'
const labelClass = 'block text-xs tracking-widest uppercase text-[#000000]/70 mb-2'

export default function Apply() {
  const [submitted, setSubmitted] = useState(false)
  const [teamSize, setTeamSize] = useState('solo')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const body: Record<string, string> = {}
    data.forEach((value, key) => {
      body[key] = value.toString()
    })
    try {
      await fetch('https://formspree.io/info@intris.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] py-20 px-6">
      <div className="max-w-2xl mx-auto animate-fade-in">
        {/* Top section */}
        <div className="mb-10">
          <h1 className="text-3xl font-light tracking-widest text-[#000000] mb-6">Apply</h1>
          <p className="text-[#000000] text-base leading-relaxed mb-4">
            Applications are reviewed on a rolling basis. The deadline is August 31st. All decisions are sent by September 4th.
          </p>
          <p className="text-[#000000] text-base leading-relaxed">
            We accept video applications only, recorded on Loom.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-white/40 p-8 md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-[#000000] text-xl font-light tracking-wide leading-relaxed">
                We&apos;ll be in touch within 7 days.<br />Keep building.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className={labelClass} htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>

              {/* Penn Graduation Year */}
              <div>
                <label className={labelClass} htmlFor="gradYear">Penn Graduation Year</label>
                <input id="gradYear" name="gradYear" type="text" required placeholder="e.g. 2026" className={inputClass} />
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className={labelClass} htmlFor="linkedin">LinkedIn URL</label>
                <input id="linkedin" name="linkedin" type="url" required placeholder="https://linkedin.com/in/yourname" className={inputClass} />
              </div>

              {/* X Handle */}
              <div>
                <label className={labelClass} htmlFor="twitter">X (Twitter) Handle</label>
                <input id="twitter" name="twitter" type="text" placeholder="@handle" className={inputClass} />
              </div>

              {/* Team Size */}
              <div>
                <label className={labelClass} htmlFor="teamSize">Team Size</label>
                <select
                  id="teamSize"
                  name="teamSize"
                  className={inputClass}
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                >
                  <option value="solo">Solo Founder</option>
                  <option value="team">Team</option>
                </select>
              </div>

              {/* Co-founder fields — conditional */}
              {teamSize === 'team' && (
                <div className="space-y-4">
                  <div>
                    <label className={labelClass} htmlFor="cofounderNames">Co-founder Names</label>
                    <input id="cofounderNames" name="cofounderNames" type="text" placeholder="Full names of co-founders" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="cofounderEmails">Co-founder Emails</label>
                    <input id="cofounderEmails" name="cofounderEmails" type="text" placeholder="Emails of co-founders" className={inputClass} />
                  </div>
                </div>
              )}

              {/* Video 1 */}
              <div>
                <label className={labelClass} htmlFor="video1">
                  Video 1 — &ldquo;What are you building, who is it for, and why are you the person to build it — 2 minutes max&rdquo;
                </label>
                <input id="video1" name="video1" type="url" required placeholder="https://loom.com/share/..." className={inputClass} />
              </div>

              {/* Video 2 */}
              <div>
                <label className={labelClass} htmlFor="video2">
                  Video 2 — &ldquo;What do you like and dislike about Elon Musk — be specific and honest — 90 seconds max&rdquo;
                </label>
                <input id="video2" name="video2" type="url" required placeholder="https://loom.com/share/..." className={inputClass} />
              </div>

              {/* Video 3 */}
              <div>
                <label className={labelClass} htmlFor="video3">
                  Video 3 — &ldquo;What would you do with $15,000 and one semester of focused time — 90 seconds max&rdquo;
                </label>
                <input id="video3" name="video3" type="url" required placeholder="https://loom.com/share/..." className={inputClass} />
              </div>

              {/* What have you built */}
              <div>
                <label className={labelClass} htmlFor="built">What have you already built, shipped, or done toward this idea</label>
                <textarea
                  id="built"
                  name="built"
                  required
                  rows={5}
                  placeholder="Describe what you've done so far..."
                  className={inputClass}
                />
              </div>

              {/* Reference */}
              <div className="space-y-4">
                <p className={labelClass}>Reference</p>
                <div>
                  <label className={labelClass} htmlFor="refName">Reference Name</label>
                  <input id="refName" name="refName" type="text" placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="refRelationship">Relationship</label>
                  <input id="refRelationship" name="refRelationship" type="text" placeholder="e.g. Professor, Mentor, Colleague" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="refEmail">Reference Email</label>
                  <input id="refEmail" name="refEmail" type="email" placeholder="reference@example.com" className={inputClass} />
                </div>
              </div>

              {/* How did you hear */}
              <div>
                <label className={labelClass} htmlFor="source">How did you hear about Intris (optional)</label>
                <input id="source" name="source" type="text" placeholder="e.g. Friend, Instagram, Penn newsletter..." className={inputClass} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#000000] text-white/90 px-10 py-3.5 rounded-full text-xs tracking-widest uppercase hover:bg-[#000000] transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
