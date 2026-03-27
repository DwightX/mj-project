import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'

const C = {
  bg: '#0F172A',
  cardBg: '#1F2937',
  inputBg: '#162032',
  inputBorder: 'rgba(255,255,255,0.1)',
  blue: '#3A82FF',
  gold: '#D4A574',
  goldHover: '#C4915A',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
  textDim: '#4B5568',
}

const inputBase = {
  width: '100%',
  padding: '12px 16px',
  background: C.inputBg,
  border: `1px solid ${C.inputBorder}`,
  borderRadius: '8px',
  color: C.textPrimary,
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  transition: 'border-color 0.15s',
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const subject = encodeURIComponent(`Message from ${data.firstName} ${data.lastName}`)
    const body = encodeURIComponent(`${data.message}`)
    window.location.href = `mailto:carter91jr@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        {/* Numbered section divider */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-14"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}
        >
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.72rem', color: C.gold, letterSpacing: '0.18em', textTransform: 'uppercase' }}>05</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textDim }}>Get in Touch</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1px', color: C.textPrimary, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Questions? Let's Talk.
            </h2>
            <p style={{ color: C.textMuted, fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you're wondering which tier is right for you, have questions about the curriculum,
              or just want to say hello — drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Mail size={18} color={C.gold} />, label: 'Email', value: 'carter91jr@gmail.com' },
                { icon: <MapPin size={18} color={C.gold} />, label: 'Based in', value: 'New York, NY (coaching worldwide)' },
                { icon: <Clock size={18} color={C.gold} />, label: 'Response time', value: 'Within 24 business hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(212,165,116,0.08)',
                      borderRadius: '8px',
                      border: '1px solid rgba(212,165,116,0.2)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.textDim }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500, marginTop: '2px', color: C.textPrimary }}>{item.value}</div>
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
            <div className="p-8 rounded-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-4">
                    <Mail size={40} color={C.gold} />
                  </div>
                  <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '1.4rem', color: C.textPrimary, marginBottom: '0.75rem' }}>
                    Your email app should have opened
                  </h3>
                  <p style={{ color: C.textMuted, fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    Your message has been pre-filled in your email client (Gmail, Outlook, Apple Mail, etc.).
                    Just hit <strong style={{ color: C.textPrimary }}>Send</strong> to deliver it — it takes one click.
                  </p>
                  <div className="rounded-xl p-4 text-left space-y-2" style={{ background: 'rgba(212,165,116,0.07)', border: '1px solid rgba(212,165,116,0.2)' }}>
                    {['1. Switch to your email app', '2. Check the draft that just opened', '3. Hit Send — done!'].map((step) => (
                      <p key={step} style={{ fontSize: '0.82rem', color: C.textMuted }}>{step}</p>
                    ))}
                  </div>
                  <p style={{ color: C.textDim, fontSize: '0.78rem', marginTop: '1rem' }}>
                    Nothing opened?{' '}
                    <a href="mailto:carter91jr@gmail.com" style={{ color: C.gold, textDecoration: 'underline' }}>
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
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: C.textMuted }}>
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
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '6px', color: C.textMuted }}>
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
                    className="w-full py-4 font-bold text-base cursor-pointer transition-all duration-150"
                    style={{ background: C.gold, color: '#0F172A', borderRadius: '6px', border: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                  >
                    Send Message →
                  </button>

                  <p style={{ fontSize: '0.75rem', color: C.textDim, textAlign: 'center' }}>
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
