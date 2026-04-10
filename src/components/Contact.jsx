import { useForm } from 'react-hook-form'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'

const GOLD_LIGHT = '#A17B4F'

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

  const contactItems = [
    { icon: <Mail size={18} color={GOLD_LIGHT} />, label: 'Email', value: 'matt@leadershipintraining.com' },
    { icon: <MapPin size={18} color={GOLD_LIGHT} />, label: 'Based in', value: 'New York, NY (coaching worldwide)' },
    { icon: <Clock size={18} color={GOLD_LIGHT} />, label: 'Response time', value: 'Within 24 business hours' },
  ]

  return (
    <section id="contact" className="py-36 bg-cream">
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${GOLD_LIGHT}`, paddingTop: '1.1rem' }}>
            <span className="section-number">05</span>
            <span className="section-pipe-dark" />
            <span className="section-label-dark">Get in Touch</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="divider-gold mb-5" style={{ background: GOLD_LIGHT }} />

            <h2 className="heading-lg-dark mb-3">
              Questions? Let's Talk.
            </h2>

            <p className="pull-quote-light mb-7">
              "Every great coaching relationship starts with a single conversation."
            </p>

            <div style={{ width: '48px', height: '1px', background: 'rgba(28,21,16,0.12)', marginBottom: '1.75rem' }} />

            <p className="body-lead-dark mb-10">
              Whether you're wondering which tier is right for you, have questions about the curriculum,
              or just want to say hello, drop us a message and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(161,123,79,0.07)', border: '1px solid rgba(161,123,79,0.18)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-serif italic text-text-dim" style={{ fontSize: '0.8rem', marginBottom: '2px' }}>{item.label}</div>
                    <div className="font-sans font-semibold text-text" style={{ fontSize: '0.9rem' }}>{item.value}</div>
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
            <div className="p-8" style={{ background: '#FFFFFF', borderTop: `2px solid ${GOLD_LIGHT}`, border: `1px solid rgba(28,21,16,0.12)`, borderTopWidth: '2px', borderTopColor: GOLD_LIGHT }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="flex justify-center mb-4">
                    <Mail size={40} color={GOLD_LIGHT} />
                  </div>
                  <h3 className="font-sans font-bold text-text mb-3" style={{ fontSize: '1.4rem' }}>
                    Your email app should have opened
                  </h3>
                  <p className="text-text-muted mb-5" style={{ fontSize: '0.9rem', lineHeight: 1.75 }}>
                    Your message has been pre-filled in your email client. Just hit <strong className="text-text">Send</strong> to deliver it.
                  </p>
                  <div className="p-4 text-left space-y-2" style={{ background: 'rgba(161,123,79,0.05)', borderLeft: `3px solid ${GOLD_LIGHT}` }}>
                    {['1. Switch to your email app', '2. Check the draft that just opened', '3. Hit Send. Done!'].map((step) => (
                      <p key={step} className="text-text-muted" style={{ fontSize: '0.82rem' }}>{step}</p>
                    ))}
                  </div>
                  <p className="text-text-dim mt-4" style={{ fontSize: '0.78rem' }}>
                    Nothing opened?{' '}
                    <a href="mailto:matt@leadershipintraining.com" className="text-gold-light" style={{ textDecoration: 'underline' }}>
                      Click here to email directly
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold-light mt-5 cursor-pointer"
                    style={{ fontSize: '0.82rem', textDecoration: 'underline' }}
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
                        <label className="form-label">
                          {label} <span className="text-gold-light">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder={placeholder}
                          className="form-input"
                          style={{
                            background: '#FFFFFF',
                            color: '#1C1510',
                            border: `1px solid ${errors[field] ? '#ef4444' : 'rgba(28,21,16,0.15)'}`,
                          }}
                          onFocus={(e) => (e.target.style.borderColor = GOLD_LIGHT)}
                          onBlur={(e) => (e.target.style.borderColor = errors[field] ? '#ef4444' : 'rgba(28,21,16,0.15)')}
                          {...register(field, { required })}
                        />
                        {errors[field] && <p className="text-red-500 mt-1" style={{ fontSize: '0.75rem' }}>{errors[field].message}</p>}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="form-label">
                      How can we help? <span className="text-gold-light">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="I'm interested in the course and have a few questions about..."
                      className="form-input"
                      style={{
                        background: '#FFFFFF',
                        color: '#1C1510',
                        border: `1px solid ${errors.message ? '#ef4444' : 'rgba(28,21,16,0.15)'}`,
                        resize: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = GOLD_LIGHT)}
                      onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(28,21,16,0.15)')}
                      {...register('message', { required: 'Please tell us how we can help' })}
                    />
                    {errors.message && <p className="text-red-500 mt-1" style={{ fontSize: '0.75rem' }}>{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold w-full justify-center font-black"
                  >
                    Send Message →
                  </button>

                  <p className="font-serif italic text-text-dim text-center" style={{ fontSize: '0.85rem' }}>
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
