export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = query.matches

    const handleChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion.value = event.matches
    }

    query.addEventListener('change', handleChange)

    onUnmounted(() => {
      query.removeEventListener('change', handleChange)
    })
  })

  return prefersReducedMotion
}
