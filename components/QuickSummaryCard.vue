<script setup lang="ts">
defineProps<{
  label: string
  typeName: string
  summary: string
}>()
</script>

<template>
  <div class="summary-card">
    <p class="summary-card__label">{{ label }}</p>
    <p class="summary-card__type">{{ typeName }}</p>
    <p class="summary-card__summary">{{ summary }}</p>
  </div>
</template>

<style scoped>
.summary-card {
  background: var(--color-surface);
  border-radius: 12px;
  padding: 0.875rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.summary-card__label {
  margin: 0;
  font-size: 0.6875rem;
  color: var(--color-text-muted);
}

.summary-card__type {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.summary-card__summary {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
}
</style>
