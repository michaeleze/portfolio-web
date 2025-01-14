'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactContent } from '@/lib/content';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {contactContent.form.fields.firstName.label}
              </label>
              <input
                type="text"
                required={contactContent.form.fields.firstName.required}
                placeholder={contactContent.form.fields.firstName.placeholder}
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {contactContent.form.fields.lastName.label}
              </label>
              <input
                type="text"
                required={contactContent.form.fields.lastName.required}
                placeholder={contactContent.form.fields.lastName.placeholder}
                className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {contactContent.form.fields.email.label}
            </label>
            <input
              type="email"
              required={contactContent.form.fields.email.required}
              placeholder={contactContent.form.fields.email.placeholder}
              className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {contactContent.form.fields.message.label}
            </label>
            <textarea
              required={contactContent.form.fields.message.required}
              placeholder={contactContent.form.fields.message.placeholder}
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium"
          >
            {contactContent.form.submitButton}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}