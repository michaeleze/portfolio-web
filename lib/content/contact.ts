export const contactContent = {
  hero: {
    title: "Let's Work Together",
    subtitle: "I'm always interested in hearing about new projects and opportunities."
  },
  form: {
    fields: {
      firstName: {
        label: 'First Name',
        placeholder: 'Enter your first name',
        required: true
      },
      lastName: {
        label: 'Last Name',
        placeholder: 'Enter your last name',
        required: true
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email address',
        required: true
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me about your project',
        required: true
      }
    },
    submitButton: 'Send Message'
  }
} as const;