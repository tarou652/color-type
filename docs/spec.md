# 仕様書：パーソナルカラー診断結果サイト

## 1. 概要

| 項目 | 内容 |
|---|---|
| 目的 | 服・プレゼント選びの参考にしてもらう |
| 対象 | 家族みんな（グループLINEで共有） |
| 利用シーン | LINEで送られたリンクをスマホでサッと見る |
| デザイン方針 | モバイル最優先。ファーストビュー＝結論、理論は下部にアコーディオンで格納 |

情報設計・コンテンツの詳細は同ディレクトリの `wireframe.md` / `style-diagnosis.md` を参照。

---

## 2. 技術スタック

- **フレームワーク**：Nuxt 4（`nuxt generate` による静的サイト生成）
- **ホスティング**：GitHub Pages（標準の `<username>.github.io/<repo>` ドメイン）
- **アニメーション**：GSAP
- **言語**：TypeScript
- **コンテンツ管理**：型付きTSデータファイル（後述）

---

## 3. 公開範囲・SEO対策

身近な人しか見ない前提のため、認証等は設けない。検索エンジンに載らないことだけ対策する。

- `public/robots.txt` を設置し、全クローラーの巡回を拒否
  ```
  User-agent: *
  Disallow: /
  ```
- `app.vue` の `useHead` で `<meta name="robots" content="noindex, nofollow">` も併用（robots.txtだけだと拾われるケースがあるため二重で対策）
- OGP（`og:title` / `og:description` / `og:image`）は設定する。LINEでリンクを共有したときのプレビューカードを綺麗に見せるため（検索避けとは別目的）

---

## 4. ホスティング設定

- `nuxt.config.ts` の `app.baseURL` をリポジトリ名に合わせて設定（例：`/color-diagnosis/`）
- ビルド出力（`.output/public`）に `.nojekyll`（空ファイル）を含める
  → GitHub Pagesが `_nuxt` などアンダースコア始まりのフォルダを無視するのを防ぐため
- リポジトリの Settings → Pages → Source を **GitHub Actions** に設定
- デプロイはGitHub Actionsで自動化（`main` へのpushをトリガーに `generate` → デプロイ）

```yaml
# .github/workflows/deploy.yml の骨子
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run generate
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .output/public
      - uses: actions/deploy-pages@v4
```

---

## 5. コンテンツ管理（型付きTSデータファイル）

`data/diagnosis.ts` に集約し、コンポーネントへ直接渡す。中身は `style-diagnosis.md` から移植。

```ts
export interface ColorSwatch {
  no: number
  hex: string
  label: string
}

export interface PersonalColor {
  first: string       // 'ミューテッドサマー'
  second: string      // 'ミューテッドオータム'
  bestColors: ColorSwatch[]
  principles: string[]
  suitColors: string[]
  neckties: string[]
  shirtCollars: string[]
  hairColor: {
    recommended: string[]
    avoid: string[]
  }
}

export interface FaceType {
  name: string         // 'フレッシュソフト'
  summary: string
  good: string[]
  bad: string[]
  pants: string
  brands: string[]
  glasses: { title: string; description: string }[]
  hairstyles: { title: string; description: string }[]
  eyebrows: string
}

export interface BodyType {
  name: string          // 'ウェーブ'
  summary: string
  tops: string[]
  bottoms: string[]
  suit: string[]
  accessories: string[]
}

export interface Perfume {
  name: string
  price: string
  note: string
}

export interface DiagnosisData {
  personalColor: PersonalColor
  faceType: FaceType
  bodyType: BodyType
  perfume: Perfume
}
```

---

## 6. ディレクトリ構成（案）

```
project/
├── .github/workflows/deploy.yml
├── app.vue
├── nuxt.config.ts
├── public/
│   └── robots.txt
├── data/
│   └── diagnosis.ts
├── components/
│   ├── ConclusionBlock.vue      # ファーストビューの結論
│   ├── QuickSummaryCard.vue     # 顔タイプ/骨格の一言サマリー
│   ├── TheoryAccordion.vue      # 理論パート全体
│   ├── AccordionItem.vue        # アコーディオン1項目
│   └── ColorSwatchGrid.vue      # ベストカラーの色見本
└── composables/
    └── useReducedMotion.ts      # prefers-reduced-motion判定
```

---

## 7. アニメーション方針（GSAP）

演出は絞る。全カードにfade-in等を付けず、意味のある2箇所だけに使う。

1. **初回表示**：結論ブロックの色スウォッチを軽くstaggerでふわっと表示（1回だけのロード演出）
2. **アコーディオン開閉**：GSAPで高さをアニメーション（`height: auto` の代わりに `scrollHeight` を使った実装）

共通ルール：
- GSAPの初期化は `onMounted` 内でのみ行う（SSG時のプリレンダーでDOM操作エラーを起こさないため）
- `prefers-reduced-motion: reduce` の場合はアニメーションを省略・簡略化する
- スクロールトリガー演出は今回は使わない（1画面で完結する軽量なページのため、不要な演出を増やさない）

---

## 8. 次のステップ

1. `data/diagnosis.ts` に `style-diagnosis.md` の内容を流し込む
2. コンポーネント実装（wireframe.md の構成順）
3. GitHub Actionsワークフロー設置、Pages設定をGitHub Actionsに変更
4. 本番URLでLINE共有時のOGPプレビュー確認