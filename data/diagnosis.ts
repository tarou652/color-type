export interface ColorSwatch {
  no: number
  hex: string
  label: string
}

export interface PersonalColor {
  first: string // 'ミューテッドサマー'
  second: string // 'ミューテッドオータム'
  goodAt: string
  badAt: string
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

export interface GlassesStyle {
  title: string
  description: string
}

export interface HairStyle {
  title: string
  description: string
}

export interface FaceType {
  name: string // 'フレッシュソフト'
  summary: string
  good: string[]
  bad: string[]
  pants: string
  brands: string[]
  glasses: GlassesStyle[]
  hairstyles: HairStyle[]
  eyebrows: string
}

export interface BodyType {
  name: string // 'ウェーブ'
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

export const diagnosisData: DiagnosisData = {
  personalColor: {
    first: 'ミューテッドサマー',
    second: 'ミューテッドオータム',
    goodAt: 'くすみ・青みのある色',
    badAt: '白・黒・赤のハイコントラスト配色',
    bestColors: [
      { no: 1, hex: '#A9B4C4', label: 'ダスティパウダーブルー' },
      { no: 3, hex: '#C6A8AA', label: 'ダスティローズ' },
      { no: 5, hex: '#9FA88F', label: 'くすみセージ' },
      { no: 7, hex: '#B7A38C', label: 'ソフトタウプ' },
      { no: 9, hex: '#8B93A8', label: 'ダスティスレートブルー' },
      { no: 10, hex: '#C9B9A0', label: 'くすみサンドベージュ' },
      { no: 13, hex: '#A98E8C', label: 'ダスティモーブ' },
      { no: 15, hex: '#7E8B84', label: 'くすみティールグレー' },
      { no: 18, hex: '#B3A6C4', label: 'ダスティラベンダー' },
      { no: 22, hex: '#8C8563', label: 'くすみオリーブ' },
      { no: 23, hex: '#D9C7B8', label: 'ソフトウォームベージュ' },
      { no: 26, hex: '#6E7A8C', label: 'ソフトネイビーグレー' },
      { no: 29, hex: '#BFA6A0', label: 'くすみテラコッタローズ' },
      { no: 30, hex: '#9A9184', label: 'ウォームグレー' }
    ],
    principles: [
      'トップスのパーソナルカラーが最重要。ボトムスはトップスに合わせて決める。',
      '同じシーズン内の色、または同じブルーベースであれば組み合わせやすい。',
      '白・黒・赤のハイコントラストは避け、くすみ色同士の穏やかな配色でまとめる。',
      'オータム系の小物・ボトムス（例：ベージュパンツ）とサマートップスの組み合わせは浮きやすいので注意。'
    ],
    suitColors: ['グレー系', '柔らかいネイビー'],
    neckties: [
      'ブルーグレー',
      'アッシュグレー',
      'チャコールグレー',
      'ソフトネイビー柄MIX',
      '寒色系カラーをMIXし、柄でごちゃつかせず色でシンプルに'
    ],
    shirtCollars: ['レギュラーカラー', 'セミワイドカラー', 'ボタンダウン'],
    hairColor: {
      recommended: [
        'ピンク系',
        'アッシュブラック',
        'アッシュグレー',
        'ラベンダーアッシュ',
        'レッドブラウン',
        'ブルーアッシュ'
      ],
      avoid: ['黄みのあるカラー']
    }
  },
  faceType: {
    name: 'フレッシュソフト',
    summary: 'カジュアル×きれいめミックス',
    good: [
      'パーカー・トレーナー',
      'ゆるめのロングコート',
      'ショート〜ミドル丈コート',
      '無地中心の配色',
      'ボーダー・ストライプなど直線的な柄'
    ],
    bad: ['カチッとした細身コート（頑張ってる感が出る）', 'スキニーパンツ'],
    pants: 'ストレート、または太すぎず少しゆとりのあるパンツが◎（今はゆとりパンツがトレンド）',
    brands: ['UNITED ARROWS', 'BEAUTY&YOUTH', 'SHIPS', 'A.P.C'],
    glasses: [
      {
        title: '黒フレーム・ブロー型',
        description: '横幅広め・縦幅ありで大人っぽく。赤など主張の強いカラーフレームは色が強すぎて浮きやすい。'
      },
      {
        title: 'べっ甲・幾何学ラウンド',
        description: 'やわらかい曲線で調和。'
      }
    ],
    hairstyles: [
      { title: 'シャドーパーマ', description: 'おでこは少しだけ出すバランスがおすすめ。' },
      { title: 'フェザーパーマ', description: '前髪が目や眉にかかると重く・長く見えるので長さ調整に注意。' },
      { title: '大人センターパーマ', description: '子供顔寄りのパーツに、大人っぽさを少し足せる。' },
      { title: '緩め波巻きパーマ', description: 'カジュアル＋きれいめのミックスに合う柔らかさ。' }
    ],
    eyebrows: 'サロンで平行気味・柔らかい丸みに整える。眉山なだらか・並行ゆるアーチ（キリッとしすぎないもの）。'
  },
  bodyType: {
    name: 'ウェーブ',
    summary: '重心は上に',
    tops: [
      '丈は腰の一番厚い部分より短く',
      '首元は詰まったもの（ハイネック・タートル）。開いていると開けない',
      'セットインスリーブを選ぶ（ドロップショルダーはなで肩が目立つのでNG）',
      '素材は柔らかく・薄く・軽いものが得意（革ジャンやハリのある素材は苦手）',
      '柄は細かく密集したものが得意（大きい柄・スカスカした柄は苦手）',
      'ロゴは線が細いデザインが◎',
      '重ね着（カーディガン・ニット）が得意',
      'コンパクト・ショート丈のサイズ感が似合う'
    ],
    bottoms: [
      'ワイドパンツ：太すぎなければOK、伸縮性のある素材を選ぶ',
      'タックパンツ：入っていても問題なし',
      '腰位置：気持ち高めがおすすめ',
      '苦手：股下がブカブカなもの、張りが強い硬い素材',
      '細身パンツも似合うが、今のトレンド的には太めを推奨'
    ],
    suit: [
      '柔らかい・伸縮性のある素材',
      '肩パッド入りを選ぶ（オーダーの場合は入れてもらう）',
      'ボタン位置は高め（詰まっているタイプ）',
      '襟とネクタイは細め（8cm以下）、柄は細かく密集したものがおすすめ',
      '結婚式などはスリーピース（ベスト付き）＋中にニット'
    ],
    accessories: [
      '靴：ソール細め・つま先上がり・柔らかい素材（ごつい靴・重い靴は苦手）',
      'ベルト：25〜30mmの細め',
      '腕時計：薄型・ごつくないもの',
      'ネックレス：細いシルバー、45cm程度（50cm以上は長すぎ）',
      'バッグ：柔らかい素材・小さめ（カチッと型崩れしないバッグは苦手）'
    ]
  },
  perfume: {
    name: 'ハンバリンズ「カモ」',
    price: '5千〜1万円程度',
    note: '落ち着いた優しい香りが得意。ワイルド系・主張の強いメンズコロンよりも、優しいニュアンスの香りが合う。'
  }
}
