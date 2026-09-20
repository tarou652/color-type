<script setup lang="ts">
import type { DiagnosisData } from '~~/data/diagnosis'

defineProps<{
  data: DiagnosisData
}>()
</script>

<template>
  <div class="theory">
    <AccordionItem title="カラー診断の理論・全パレット">
      <p class="theory__lead">
        {{ data.personalColor.first }} × {{ data.personalColor.second }}。得意：{{ data.personalColor.goodAt }} ／
        苦手：{{ data.personalColor.badAt }}
      </p>

      <h4 class="theory__subheading">ベストカラー全14色</h4>
      <ColorSwatchGrid :swatches="data.personalColor.bestColors" />

      <h4 class="theory__subheading">コーディネートの原則</h4>
      <ul class="theory__list">
        <li v-for="(p, i) in data.personalColor.principles" :key="i">{{ p }}</li>
      </ul>

      <h4 class="theory__subheading">スーツ・ビジネスカラー</h4>
      <p class="theory__text">おすすめ：{{ data.personalColor.suitColors.join('／') }}</p>
      <ul class="theory__list">
        <li v-for="(n, i) in data.personalColor.neckties" :key="i">{{ n }}</li>
      </ul>

      <h4 class="theory__subheading">シャツの襟</h4>
      <p class="theory__text">{{ data.personalColor.shirtCollars.join('／') }}、いずれも◎</p>

      <h4 class="theory__subheading">似合うヘアカラー</h4>
      <p class="theory__text">おすすめ：{{ data.personalColor.hairColor.recommended.join('、') }}</p>
      <p class="theory__text">避ける：{{ data.personalColor.hairColor.avoid.join('、') }}</p>
    </AccordionItem>

    <AccordionItem title="顔タイプ診断の詳細">
      <p class="theory__lead">{{ data.faceType.name }}（{{ data.faceType.summary }}）</p>

      <h4 class="theory__subheading">得意</h4>
      <ul class="theory__list">
        <li v-for="(g, i) in data.faceType.good" :key="i">{{ g }}</li>
      </ul>

      <h4 class="theory__subheading">苦手</h4>
      <ul class="theory__list">
        <li v-for="(b, i) in data.faceType.bad" :key="i">{{ b }}</li>
      </ul>

      <h4 class="theory__subheading">パンツ</h4>
      <p class="theory__text">{{ data.faceType.pants }}</p>

      <h4 class="theory__subheading">おすすめブランド</h4>
      <p class="theory__text">{{ data.faceType.brands.join('、') }}</p>

      <h4 class="theory__subheading">メガネ</h4>
      <ul class="theory__list theory__list--titled">
        <li v-for="(g, i) in data.faceType.glasses" :key="i">
          <strong>{{ g.title }}</strong>：{{ g.description }}
        </li>
      </ul>

      <h4 class="theory__subheading">髪型</h4>
      <ul class="theory__list theory__list--titled">
        <li v-for="(h, i) in data.faceType.hairstyles" :key="i">
          <strong>{{ h.title }}</strong>：{{ h.description }}
        </li>
      </ul>

      <h4 class="theory__subheading">眉毛</h4>
      <p class="theory__text">{{ data.faceType.eyebrows }}</p>
    </AccordionItem>

    <AccordionItem title="骨格診断の詳細">
      <p class="theory__lead">{{ data.bodyType.name }}（{{ data.bodyType.summary }}）</p>

      <h4 class="theory__subheading">トップス</h4>
      <ul class="theory__list">
        <li v-for="(t, i) in data.bodyType.tops" :key="i">{{ t }}</li>
      </ul>

      <h4 class="theory__subheading">ボトムス</h4>
      <ul class="theory__list">
        <li v-for="(b, i) in data.bodyType.bottoms" :key="i">{{ b }}</li>
      </ul>

      <h4 class="theory__subheading">スーツ</h4>
      <ul class="theory__list">
        <li v-for="(s, i) in data.bodyType.suit" :key="i">{{ s }}</li>
      </ul>

      <h4 class="theory__subheading">小物</h4>
      <ul class="theory__list">
        <li v-for="(a, i) in data.bodyType.accessories" :key="i">{{ a }}</li>
      </ul>
    </AccordionItem>

    <AccordionItem title="香水・その他">
      <p class="theory__lead">{{ data.perfume.name }}（{{ data.perfume.price }}）</p>
      <p class="theory__text">{{ data.perfume.note }}</p>
    </AccordionItem>
  </div>
</template>

<style scoped>
.theory {
  border-top: 1px solid var(--color-border);
}

.theory__lead {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
}

.theory__subheading {
  margin: 1rem 0 0.5rem;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.theory__text {
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
}

.theory__list {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
}

.theory__list--titled {
  padding-left: 0;
  list-style: none;
}
</style>
