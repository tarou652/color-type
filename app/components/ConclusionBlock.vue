<script setup lang="ts">
import type { PersonalColor } from '~~/data/diagnosis'

const props = defineProps<{
  personalColor: PersonalColor
}>()

// ベストカラー14色から代表色を抜粋（結論ブロックはひと目で見せるため絞る）
const representativeColors = computed(() =>
  props.personalColor.bestColors.filter((c) => [1, 3, 5, 9, 18, 22].includes(c.no))
)

const swatchGridEl = ref<HTMLElement | null>(null)
const prefersReducedMotion = useReducedMotion()

onMounted(async () => {
  if (prefersReducedMotion.value || !swatchGridEl.value) return

  const { gsap } = await import('gsap')
  const chips = swatchGridEl.value.querySelectorAll('.swatch__chip')

  gsap.from(chips, {
    opacity: 0,
    scale: 0.6,
    y: 8,
    duration: 0.5,
    stagger: 0.08,
    ease: 'back.out(1.7)'
  })
})
</script>

<template>
  <section class="conclusion">
    <div ref="swatchGridEl">
      <ColorSwatchGrid :swatches="representativeColors" size="lg" />
    </div>

    <dl class="conclusion__points">
      <div class="conclusion__point">
        <dt>似合う系統</dt>
        <dd>くすみ系全般</dd>
      </div>
      <div class="conclusion__point">
        <dt>避ける配色</dt>
        <dd>白・黒・赤のハイコントラストは避ける</dd>
      </div>
      <div class="conclusion__point">
        <dt>スーツの色</dt>
        <dd>{{ personalColor.suitColors.join('／') }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.conclusion {
  background: var(--color-accent-bg);
  border-radius: 16px;
  padding: 1.25rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.conclusion__points {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
}

.conclusion__point {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.conclusion__point dt {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.conclusion__point dd {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text);
}
</style>
