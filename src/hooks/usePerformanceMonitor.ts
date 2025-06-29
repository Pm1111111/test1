import { useEffect } from 'react';

export function usePerformanceMonitor() {
  useEffect(() => {
    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Log performance metrics in development
          if (process.env.NODE_ENV === 'development') {
            console.log(`Performance: ${entry.name} - ${entry.duration}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);
}