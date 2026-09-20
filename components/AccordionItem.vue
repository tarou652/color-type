<script setup lang="ts">
defineProps<{
  title: string
}>()

const isOpen = ref(false)
const contentEl = ref<HTMLElement | null>(null)
const prefersReducedMotion = useReducedMotion()

async function toggle() {
  if (prefersReducedMotion.value || !contentEl.value) {
    isOpen.value = !isOpen.value
    return
  }

  const { gsap } = await import('gsap')

  if (!isOpen.value) {
    isOpen.value = true
    await nextTick()
    const target = contentEl.value.scrollHeight
    gsap.fromTo(
      contentEl.value,
      { height: 0 },
      {
        height: target,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          if (contentEl.value) contentEl.value.style.height = 'auto'
        }
      }
    )
  } else {
    const current = contentEl.value.scrollHeight
    gsap.fromTo(
      contentEl.value,
      { height: current },
      {
        height: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          isOpen.value = false
        }
      }
    )
  }
}
</script>

<template>
  <div class="accordion-item">
    <button
      class="accordion-item__trigger"
      type="button"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span>{{ title }}</span>
      <span class="accordion-item__icon" :class="{ 'accordion-item__icon--open': isOpen }">▾</span>
    </button>
    <div v-show="isOpen" ref="contentEl" class="accordion-item__content">
      <div class="accordion-item__inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-item {
  border-bottom: 1px solid var(--color-border);
}

.accordion-item__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.9375rem 0.25rem;
  background: none;
  border: none;
  font: inherit;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text);
  text-align: left;
  cursor: pointer;
}

.accordion-item__icon {
  color: var(--color-text-muted);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.accordion-item__icon--open {
  transform: rotate(180deg);
}

.accordion-item__content {
  overflow: hidden;
}

.accordion-item__inner {
  padding: 0 0.25rem 1.25rem;
}
</style>
