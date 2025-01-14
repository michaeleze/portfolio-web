'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactContent } from '@/lib/content/contact';
import { FormField } from './FormField';

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
            <FormField
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(value) => setFormData({ ...formData, firstName: value })}
              {...contactContent.form.fields.firstName}
            />
            <FormField
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(value) => setFormData({ ...formData, lastName: value })}
              {...contactContent.form.fields.lastName}
            />
          </div>

          <FormField
            type="email"
            name="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            {...contactContent.form.fields.email}
          />

          <FormField
            type="textarea"
            name="message"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            {...contactContent.form.fields.message}
          />

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