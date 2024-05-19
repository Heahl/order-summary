import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'pale-blue' : 'hsl(225, 100%, 94%)',
        'bright-blue' : 'hsl(245, 75%, 52%)',
        'very-pale-blue' : 'hsl(225, 100%, 98%)',
        'desaturated-blue' : 'hsl(224, 23%, 55%)',
        'dark-blue' : 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        sans: ["Red Hat Display", "var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
