import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'

const C = {
  bg: '#FAF7F2',
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(28,21,16,0.15)',
  gold: '#A17B4F',
  goldHover: '#8B6A40',
  textPrimary: '#1C1510',
  textMuted: '#5C4F45',
  textDim: '#9C8E85',
  border: 'rgba(28,21,16,0.12)',
}

const inputBase = {
  width: '100%',
  padding: '12px 16px',
  background: C.inputBg,
  border: `1px solid ${C.inputBorder}`,
  borderRadius: '0',
  color: C.textPrimary,
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  fontWeight: 400,
  transition: 'border-color 0.15s',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Message from ${data.firstName} ${data.lastName}`)
    const body = encodeURIComponent(`${data.message}`)
    window.location.href = `mailto:matt@leadershipintraining.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="py-36" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* Section header — 2px gold top border */}
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${C.gold}`, paddingTop: '1.1rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: C.gold, letterSpacing: '0.22em' }}>05</span>
            <span style={{ width: '1px', height: '10px', background: C.border, display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textDim }}>Get in Touch</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Short amber accent bar */}
            <div style={{ width: '40px', height: '3px', background: C.gold, marginBottom: '1.25rem' }} />

            <h2 style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 4vw, 3rem)',
              letterSpacing: '-1.5px',
              color: C.textPrimary,
              marginBottom: '0.75rem',
              lineHeight: 1.05,
            }}>
              Questions? Let's Talk.
            </h2>

            {/* Playfair italic pull quote */}
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              fontWeight: 600,
              color: C.gold,
              marginBottom: '1.75rem',
              lineHeight: 1.5,
            }}>
              "Every great coaching relationship starts with a single conversation."
            </p>

            <div style={{ width: '48px', height: '1px', background: C.border, marginBottom: '1.75rem' }} />

            <p style={{ color: C.textMuted, fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '2.5rem' }}>
              Whether you're wondering which tier is right for you, have questions about the curriculum,
              or just want to say hello — drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Mail size={18} color={C.gold} />, label: 'Email', value: 'matt@leadershipintraining.com' },
                { icon: <MapPin size={18} color={C.gold} />, label: 'Based in', value: 'New York, NY (coaching worldwide)' },
                { icon: <Clock size={18} color={C.gold} />, label: 'Response time', value: 'Within 24 business hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(161,123,79,0.07)',
                      border: '1px solid rgba(161,123,79,0.18)',
                      borderRadius: '0',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.8rem', color: C.textDim, marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: C.textPrimary }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="p-8" style={{ background: '#FFFFFF', borderTop: `2px solid ${C.gold}`, border: `1px solid ${C.border}`, borderTopWidth: '2px', borderTopColor: C.gold, borderRadius: '0' }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-4">
                    <Mail size={40} color={C.gold} />
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.4rem', color: C.textPrimary, marginBottom: '0.75rem' }}>
                    Your email app should have opened
                  </h3>
                  <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                    Your message has been pre-filled in your email client. Just hit <strong style={{ color: C.textPrimary }}>Send</strong> to deliver it.
                  </p>
                  <div className="p-4 text-left space-y-2" style={{ background: 'rgba(161,123,79,0.05)', borderLeft: `3px solid ${C.gold}` }}>
                    {['1. Switch to your email app', '2. Check the draft that just opened', '3. Hit Send — done!'].map((step) => (
                      <p key={step} style={{ fontSize: '0.82rem', color: C.textMuted }}>{step}</p>
                    ))}
                  </div>
                  <p style={{ color: C.textDim, fontSize: '0.78rem', marginTop: '1rem' }}>
                    Nothing opened?{' '}
                    <a href="mailto:matt@leadershipintraining.com" style={{ color: C.gold, textDecoration: 'underline' }}>
                      Click here to email directly
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ color: C.gold, marginTop: '1.25rem', fontSize: '0.82rem', textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Fill out the form again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { field: 'firstName', label: 'First Name', placeholder: 'Jane', required: 'First name is required' },
                      { field: 'lastName', label: 'Last Name', placeholder: 'Smith', required: 'Last name is required' },
                    ].map(({ field, label, placeholder, required }) => (
                      <div key={field}>
                        <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: C.textDim }}>
                          {label} <span style={{ color: C.gold }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={placeholder}
                          style={{ ...inputBase, ...(errors[field] ? { borderColor: '#ef4444' } : {}) }}
                          onFocus={(e) => (e.target.style.borderColor = C.gold)}
                          onBlur={(e) => (e.target.style.borderColor = errors[field] ? '#ef4444' : C.inputBorder)}
                          {...register(field, { required })}
                        />
                        {errors[field] && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors[field].message}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '6px', color: C.textDim }}>
                      How can I help? <span style={{ color: C.gold }}>*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="I'm interested in the course and have a few questions about..."
                      style={{ ...inputBase, resize: 'none', ...(errors.message ? { borderColor: '#ef4444' } : {}) }}
                      onFocus={(e) => (e.target.style.borderColor = C.gold)}
                      onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ef4444' : C.inputBorder)}
                      {...register('message', { required: 'Please tell me how I can help' })}
                    />
                    {errors.message && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px' }}>{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full font-black cursor-pointer transition-all duration-150"
                    style={{ background: C.gold, color: '#FAF7F2', borderRadius: '0', border: 'none', padding: '15px 0', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                  >
                    Send Message →
                  </button>

                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.85rem', color: C.textDim, textAlign: 'center' }}>
                    Your information is never shared or sold.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
