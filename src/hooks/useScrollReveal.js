import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — Hook لإظهار العناصر عند التمرير
 *
 * @param {Object} options
 * @param {number} options.threshold - نسبة ظهور العنصر (0 → 1)
 * @param {string} options.rootMargin - هامش إضافي
 * @param {boolean} options.once - هل يعمل مرة واحدة فقط؟
 *
 * @returns {[React.RefObject, boolean]} - ref + isVisible
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // إذا كان المستخدم يفضل تقليل الحركة
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}