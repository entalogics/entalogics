import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  description: '',
  budget: '',
  contactTime: '',
};

const contactTimes = [
  '',
  'Morning (9am–12pm)',
  'Afternoon (12pm–5pm)',
  'Evening (5pm–8pm)',
  'Anytime',
];

export default function QuotePage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  function validate() {
    const errs: any = {};
    if (!form.name.trim()) errs.name = 'Full Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.description.trim()) errs.description = 'Project description is required';
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError('');
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        const data = await res.json();
        setServerError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0d0d0d] px-4">
        <div className="max-w-lg w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#512feb]">Thank you!</h2>
          <p className="text-gray-700 dark:text-gray-200 mb-4">We received your quote request and will get in touch soon.</p>
          <a href="/" className="inline-block mt-4 px-6 py-3 bg-[#512feb] text-white rounded-lg font-semibold shadow hover:bg-[#4a2bd4] transition">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0d0d0d] px-4">
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-[#512feb]">Request a Quote</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name *</label>
          <input type="text" id="name" className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-neutral-800 text-black dark:text-white`} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
          <input type="email" id="email" className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-neutral-800 text-black dark:text-white`} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-black dark:text-white" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="description">Project Description / Requirements *</label>
          <textarea id="description" rows={4} className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-neutral-800 text-black dark:text-white`} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
          {errors.description && <span className="text-xs text-red-500">{errors.description}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="budget">Budget</label>
          <input type="text" id="budget" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-black dark:text-white" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="contactTime">Preferred Time to Contact</label>
          <select id="contactTime" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-neutral-800 text-black dark:text-white" value={form.contactTime} onChange={e => setForm(f => ({ ...f, contactTime: e.target.value }))}>
            {contactTimes.map((t, i) => <option key={i} value={t}>{t || 'Select...'}</option>)}
          </select>
        </div>
        {serverError && <div className="text-red-500 text-sm mb-4">{serverError}</div>}
        <button type="submit" className="w-full py-3 px-6 bg-[#512feb] hover:bg-[#4a2bd4] text-white font-semibold rounded-lg transition-all duration-200 text-base border-2 border-[#512feb] focus:outline-none focus:ring-2 focus:ring-[#512feb] dark:bg-[#512feb] dark:hover:bg-[#4a2bd4] dark:text-white dark:border-[#512feb] dark:focus:ring-[#512feb] disabled:opacity-60" disabled={loading}>
          {loading ? 'Submitting...' : 'Request Quote'}
        </button>
      </form>
    </div>
  );
} 