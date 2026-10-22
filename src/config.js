// Contact form delivery, configured in .env (or Netlify's environment settings):
// - VITE_FORMSPREE_ID: Formspree form ID, used first when set
// - VITE_API_URL: Node/Express backend (also used by the admin inbox)
// With neither set in production, the form opens the visitor's email app instead.
export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "";
export const API_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:5000" : "");
