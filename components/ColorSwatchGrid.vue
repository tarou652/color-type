<script setup lang="ts">
import type { ColorSwatch } from '~~/data/diagnosis'

withDefaults(
  defineProps<{
    swatches: ColorSwatch[]
    size?: 'sm' | 'lg'
  }>(),
  { size: 'sm' }
)
</script>

<template>
  <ul class="swatch-grid" :class="`swatch-grid--${size}`">
    <li v-for="swatch in swatches" :key="swatch.no" class="swatch">
      <span class="swatch__chip" :style="{ backgroundColor: swatch.hex }" />
      <span class="swatch__label">{{ swatch.label }}</span>
    </li>
  </ul>
</template>

<style scoped>
.swatch-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.swatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  width: 4.25rem;
}

.swatch__chip {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 999px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.swatch--lg .swatch__chip,
.swatch-grid--lg .swatch__chip {
  border-radius: 12px;
}

.swatch__label {
  font-size: 0.6875rem;
  line-height: 1.3;
  text-align: center;
  color: var(--color-text-muted);
}

.swatch-grid--lg .swatch {
  width: 5.5rem;
}
</style>
