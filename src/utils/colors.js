export const getPalette = (isDark = false) => ({
  background: isDark ? '#0f172a' : '#ffffff',
  primary: isDark ? '#93c5fd' : '#2563eb',
  accent: isDark ? '#fbbf24' : '#f59e0b',
  text: isDark ? '#e5e7eb' : '#111827',
  icons: isDark ? '#9ca3af' : '#6b7280'
});

export const palette = getPalette(false);