import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-heading)', 'serif'],
      },
      // Add heading defaults
      extend: {
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font-heading)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#374151',
            '--tw-prose-headings': '#111827',
            '--tw-prose-lead': '#4B5563',
            '--tw-prose-links': '#3B82F6',
            '--tw-prose-bold': '#111827',
            '--tw-prose-counters': '#6B7280',
            '--tw-prose-bullets': '#D1D5DB',
            '--tw-prose-hr': '#E5E7EB',
            '--tw-prose-quotes': '#111827',
            '--tw-prose-quote-borders': '#E5E7EB',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-code': '#111827',
            '--tw-prose-pre-code': '#E5E7EB',
            '--tw-prose-pre-bg': '#1F2937',
            '--tw-prose-th-borders': '#D1D5DB',
            '--tw-prose-td-borders': '#E5E7EB',
            
            // Dark mode - using lighter colors for better contrast
            '--tw-prose-invert-body': '#D1D5DB',
            '--tw-prose-invert-headings': '#FFFFFF',
            '--tw-prose-invert-lead': '#9CA3AF',
            '--tw-prose-invert-links': '#60A5FA',
            '--tw-prose-invert-bold': '#FFFFFF',
            '--tw-prose-invert-counters': '#9CA3AF',
            '--tw-prose-invert-bullets': '#4B5563',
            '--tw-prose-invert-hr': '#374151',
            '--tw-prose-invert-quotes': '#F3F4F6',
            '--tw-prose-invert-quote-borders': '#374151',
            '--tw-prose-invert-captions': '#9CA3AF',
            '--tw-prose-invert-code': '#FFFFFF',
            '--tw-prose-invert-pre-code': '#D1D5DB',
            '--tw-prose-invert-pre-bg': '#1F2937',
            '--tw-prose-invert-th-borders': '#4B5563',
            '--tw-prose-invert-td-borders': '#374151',

            maxWidth: 'none',
            color: 'var(--tw-prose-body)',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
            fontFamily: 'var(--font-heading)',

            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginTop: '2rem',
              marginBottom: '1.5rem',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '8rem',
              marginBottom: '1.5rem',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '8rem',
              marginBottom: '1rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            'a.blue-link': {
              color: '#3B82F6',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: '#2563EB',
                textDecoration: 'none',
              },
              '.dark &': {
                color: '#60A5FA',
                '&:hover': {
                  color: '#93C5FD',
                },
              },
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              li: {
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              },
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              li: {
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              },
            },
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
            },
            figure: {
              marginTop: '2rem',
              marginBottom: '2rem',
              '& figcaption': {
                color: 'var(--tw-prose-captions)',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                marginTop: '0.75rem',
                textAlign: 'center',
              },
            },
            blockquote: {
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              paddingLeft: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            sup: {
              fontSize: '0.75rem',
              lineHeight: '0',
            },
            '.not-prose': {
              maxWidth: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase }: PluginAPI) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font-heading)',
        },
      });
    },
  ],
} satisfies Config;
