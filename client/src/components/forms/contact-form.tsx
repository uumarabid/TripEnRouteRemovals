import { useState, type FormEvent } from 'react'
import { submitContact, type ContactErrorResponse } from '../../lib/api'
import { services } from '../../data/services'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  serviceType: '',
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)
    setFieldErrors({})

    try {
      await submitContact({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        phone: form.phone.trim() || undefined,
        serviceType: form.serviceType || undefined,
      })
      setIsSuccess(true)
      setForm(initialForm)
    } catch (error) {
      const apiError = error as ContactErrorResponse
      if (apiError.errors) {
        const mapped: Record<string, string> = {}
        Object.entries(apiError.errors).forEach(([key, messages]) => {
          if (messages?.[0]) mapped[key] = messages[0]
        })
        setFieldErrors(mapped)
      }
      setErrorMessage(
        apiError.message ??
          'There was an error submitting the form. Please verify all fields and try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center"
        role="status"
      >
        <h3 className="font-display text-xl font-semibold text-teal-900">Thank you</h3>
        <p className="mt-3 text-slate-700">
          Thank you for choosing Trip En Route Removals. Our team will contact you shortly with
          your request.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass = (name: string) =>
    `w-full rounded-xl border px-4 py-3 text-slate-800 transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
      fieldErrors[name] ? 'border-red-400' : 'border-slate-200'
    }`

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-slate-700">
            First name *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            className={inputClass('firstName')}
            aria-invalid={!!fieldErrors.firstName}
            aria-describedby={fieldErrors.firstName ? 'firstName-error' : undefined}
          />
          {fieldErrors.firstName && (
            <p id="firstName-error" className="mt-1 text-sm text-red-600">
              {fieldErrors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-slate-700">
            Last name *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass('lastName')}
            aria-invalid={!!fieldErrors.lastName}
          />
          {fieldErrors.lastName && (
            <p className="mt-1 text-sm text-red-600">{fieldErrors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass('email')}
          aria-invalid={!!fieldErrors.email}
        />
        {fieldErrors.email && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass('phone')}
        />
      </div>

      <div>
        <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-slate-700">
          Service type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={inputClass('serviceType')}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass('message')}
          aria-invalid={!!fieldErrors.message}
          placeholder="Tell us about your move — dates, locations, and what needs moving."
        />
        {fieldErrors.message && (
          <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
        )}
      </div>

      {errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
