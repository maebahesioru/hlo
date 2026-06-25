export const politicalThoughts = [
  "唯一神", "決済主義", "嫌儲", "AI推進", "匿名化推進",
  "著作権廃止", "開示請求廃止", "DMCA廃止",
];

export const politicalPositions = [
  "アナーキズム", "左派ポピュリズム", "急進左派", "古典的自由主義",
  "リバタリアニズム", "左派リバタリアニズム", "テクノリバタリアニズム",
];

export const ideologies = [
  {
    id: "hikan-lib",
    title: "ヒカマーズリバタリアニズム",
    en: "Hikamars Libertarianism",
    icon: "⚡",
    color: "border-hlo-red",
    desc: "インターネット空間の自由を最大化しつつ、帰属表示や弱者保護を残そうとする自由主義的思想。著作権制度、法的開示、DMCAなどの規制を時代遅れと見なし、AI利用や二次創作、一定の営利化を肯定。一方で無断転載やパクツイによる出典消しには否定的であり、クレジット表記を自由なネット文化の前提とする。",
    sub: "常識ある好儲主義を掲げ、誤誘導的なアフィリエイトや盗用による収益化には反対。改憲や自衛隊容認といった現実主義的な安全保障観と、LGBT支持や反差別、弱者保護を併せ持つ。",
  },
  {
    id: "anarch-inmu",
    title: "無秩序淫夢アナ、ゥキズム主義",
    en: "Anarcho-Inmuism",
    icon: "🌀",
    color: "border-hlo-gold",
    desc: "アナーキズム的な反秩序志向と、淫夢・例のアレ的な露悪文化を混合した反規制思想。著作権制度や名誉毀損規制、コミュニティ自治、創作者中心主義などへ強く反発。界隈内の知名度や創作能力、古参性による序列化を否定し、すべての参加者を同列に扱おうとする。",
    sub: "攻撃的行為や迷惑行為を正当化し得る主張を含むため、界隈内外で批判の対象にもなっている。",
  },
  {
    id: "kessai",
    title: "唯一神＝決済主義",
    en: "Yuiitsushin = Kessai-ism",
    icon: "⚔️",
    color: "border-hlo-red",
    desc: "無秩序淫夢アナ、ゥキズム主義の反規制性を引き継ぎつつ、差別主義や権威主義への敵対を前面化した思想。唯一神的な絶対的価値観と決済主義的実践を同一視し、「チー牛」を権威主義・差別主義を内面化した弱者性の象徴として再定義する。排外主義や反フェミニズム、国家主義的言説などを批判対象とする。",
    sub: "左派的・反差別的な傾向を持ち、反王政や反保守、反排外主義と結び付く。批判手段として攻撃的なミーム表現を用いる点で露悪性を帯びる。",
  },
];

const memberAvatars: Record<string, string> = {
  maebahesioru2: "/avatars/maebahesioru2.jpg",
  Onlygod_mania: "/avatars/Onlygod_mania.jpg",
  ikisugi_mani: "/avatars/ikisugi_mani.jpg",
  x_inmuou: "/avatars/x_inmuou.jpg",
  YamagamiShinzou: "/avatars/YamagamiShinzou.jpg",
  kaihatusyazai: "/avatars/kaihatusyazai.jpg",
  qq26k: "/avatars/qq26k.jpg",
  ponkotu_pasokon: "/avatars/ponkotu_pasokon.jpg",
  Nijikamer: "/avatars/Nijikamer.jpg",
  MakeHikamaniGre: "/avatars/MakeHikamaniGre.jpg",
  harupon3rd: "/avatars/harupon3rd.jpg",
};

export const getAvatar = (id: string) => memberAvatars[id.replace("@", "")] || "";

export const members = {
  login: [
    { name: "十字架_mania", role: "代表・初期メンバー", id: "@maebahesioru2", since: "2026年6月21日", special: true },
    { name: "ヒカマーの唯一神_mania", role: "初期メンバー", id: "@Onlygod_mania", since: "2026年6月21日" },
    { name: "スギの木_mania", role: "初期メンバー", id: "@ikisugi_mani", since: "2026年6月21日" },
    { name: "暁美きむら", role: "初期メンバー", id: "@x_inmuou", since: "2026年6月21日" },
    { name: "しうん", role: "メンバー", id: "@YamagamiShinzou", since: "2026年6月23日" },
    { name: "大和_mania", role: "メンバー", id: "@kaihatusyazai", since: "2026年6月24日" },
  ],
  observer: [
    { name: "抹茶餅_mania / Zespar", role: "オブザーバー・初期メンバー", id: "@qq26k", since: "2026年6月21日" },
    { name: "pc_mania", role: "オブザーバー", id: "@ponkotu_pasokon", since: "2026年6月21日" },
    { name: "山田太郎", role: "オブザーバー", id: "@Nijikamer", since: "2026年6月21日" },
    { name: "ヒカマニ文化振興局", role: "オブザーバー・初期メンバー", id: "@MakeHikamaniGre", since: "2026年6月21日" },
  ],
  nonHikamar: [
    { name: "はるぽん", role: "オブザーバー（非カマー）", id: "@harupon3rd", since: "2026年6月21日" },
  ],
};

export const timeline = [
  { date: "2026.06.18", event: "Twitterでアカウントを開設" },
  { date: "2026.06.21", event: "初めてのツイートを行い、活動を始動" },
  { date: "2026.06.22", event: "フォロワーが100人に到達" },
  { date: "2026.06.23", event: "フォロワーが200人に到達" },
  { date: "2026.06.24", event: "フォロワーが300人に到達" },
  { date: "2026.06.24", event: "フォロワーが400人に到達" },
];
