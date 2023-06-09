/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-focus": "var(--primary-focus)",
        "primary-content": "var(--primary-content)",

        secondary: "var(--secondary)",
        "secondary-focus": "var(--secondary-focus)",
        "secondary-content": "var(--secondary-content)",

        accent: "var(--accent)",
        "accent-focus": "var(--accent-focus)",
        "accent-content": "var(--accent-content)",

        neutral: "var(--neutral)",
        "neutral-focus": "var(--neutral-focus)",
        "neutral-content": "var(--neutral-content)",

        input: "var(--input)",
        "input-focus": "var(--input-focus)",
        "input-placeholder": "var(--input-placeholder)",
        "input-content": "var(--input-content)",

        "input-search": "var(--input-search)",
        "input-search-focus": "var(--input-search-focus)",
        "input-search-placeholder": "var(--input-search-placeholder)",
        "input-search-content": "var(--input-search-content)",

        "input-message": "var(--input-message)",
        "input-message-focus": "var(--input-message-focus)",
        "input-message-placeholder": "var(--input-message-placeholder)",
        "input-message-content": "var(--input-message-content)",

        "card-message": "var(--card-message)",
        "card-message-info": "var(--card-message-info)",
        "card-message-content": "var(--card-message-content)",

        "base-100": "var(--base-100)",
        "base-200": "var(--base-200)",
        "base-300": "var(--base-300)",
        "base-content": "var(--base-content)",

        info: "var(--info)",
        "info-content": "var(--info-content)",

        success: "var(--success)",
        "success-content": "var(--success-content)",

        warning: "var(--warning)",
        "warning-content": "var(--warning-content)",

        error: "var(--error)",
        "error-content": "var(--error-content)",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },

      backgroundImage: {
        "form-bg-blob": "url('/blob-double.svg')",
      },
    },
  },
  plugins: [],
};
