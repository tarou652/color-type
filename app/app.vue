<script setup lang="ts">
import { diagnosisData } from '~~/data/diagnosis'

const pageTitle = `${diagnosisData.personalColor.first} × ${diagnosisData.personalColor.second}`
const pageDescription = 'パーソナルカラー・顔タイプ・骨格診断の結果まとめ。服選び・プレゼント選びの参考に。'

useHead({
  title: pageTitle,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:image', content: '/color-type/favicon.ico' }
  ]
})
</script>

<template>
  <div class="page">
    <NuxtRouteAnnouncer />

    <header class="page__header">
      <p class="page__header-type">{{ diagnosisData.personalColor.first }} × {{ diagnosisData.personalColor.second }}</p>
    </header>

    <main class="page__main">
      <ConclusionBlock :personal-color="diagnosisData.personalColor" />

      <div class="page__summary-grid">
        <QuickSummaryCard
          label="顔タイプ"
          :type-name="diagnosisData.faceType.name"
          :summary="diagnosisData.faceType.summary"
        />
        <QuickSummaryCard
          label="骨格"
          :type-name="diagnosisData.bodyType.name"
          :summary="diagnosisData.bodyType.summary"
        />
      </div>

      <TheoryAccordion :data="diagnosisData" />
    </main>
  </div>
</template>

<style>
:root {
  --color-bg: #faf9f7;
  --color-surface: #ffffff;
  --color-accent-bg: #eef1f6;
  --color-text: #2b2b2b;
  --color-text-muted: #767268;
  --color-border: #e4e0d9;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic',
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.page {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
}

.page__header {
  padding: 0.875rem 1rem;
}

.page__header-type {
  margin: 0;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-align: center;
}

.page__main {
  padding: 0 1rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.page__summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
</style>
