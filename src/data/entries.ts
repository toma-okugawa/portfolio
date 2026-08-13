import type { Locale } from '../i18n/ui';

/** A string localized per page language. */
export type L = { en: string; ja: string };
export const l = (en: string, ja: string): L => ({ en, ja });
/** Same string on both language versions (e.g. a title kept in its original language). */
export const same = (v: string): L => ({ en: v, ja: v });

export type EntryData = {
  id: string;
  title: L;
  /** lang attribute for the title text, per page locale (set when the title language differs from the page language). */
  titleLang?: Partial<Record<Locale, string>>;
  meta?: L;
  date?: L;
  badges?: L[];
  highlightBadges?: L[];
  links?: { label: L; url: string }[];
  url?: string;
  active?: boolean;
  /** Short description below the meta line. Empty string = omit on that language. */
  description?: L;
  /** Collapsible abstract text; its lang attribute follows titleLang. */
  abstract?: L;
};

// ---- badges (shared) ----
const REFEREED = l('Refereed', '査読あり');
const LEAD = l('Lead author', '筆頭著者');
const CORRESPONDING = l('Corresponding author', '責任著者');
const TO_APPEAR = l('To appear', '掲載予定');
const PREPRINT = l('Preprint', 'プレプリント');

// ---- publications ----
export const refereedPapers: EntryData[] = [
  {
    id: 'gcce2026',
    title: same(
      'Re-Defining Vanishing Municipalities in Japan: A Multidimensional Clustering and SLM-Based Policy Insight Framework'
    ),
    titleLang: { ja: 'en' },
    meta: same(
      'Toma Okugawa, Keito Inoshita — Proceedings of the IEEE 15th Global Conference on Consumer Electronics (IEEE GCCE)'
    ),
    date: l('Oct 2026', '2026年10月'),
    badges: [REFEREED, LEAD, TO_APPEAR],
  },
  {
    id: 'pendulum2026',
    title: same('ホイヘンスのサイクロイド振り子時計の製作と大学での教育実践'),
    titleLang: { en: 'ja' },
    meta: l(
      '牧山 隆洋, 石橋 治樹, 奥河 董馬, 久保 康幸 — 日本物理教育学会',
      '牧山 隆洋, 石橋 治樹, 奥河 董馬, 久保 康幸 — 日本物理教育学会'
    ),
    date: l('Apr 2026', '2026年4月'),
    badges: [REFEREED, TO_APPEAR],
    description: l('First-year university education on the isochronism of the cycloidal pendulum.', ''),
  },
  {
    id: 'kiwi2026',
    title: same('KiWi：公的機関における紙書類の安全な電子化を実現する 個人情報管理・請求システムの提案'),
    titleLang: { en: 'ja' },
    meta: same(
      '瀬尾 敦生, 榎本 浩義, 石橋 治樹, 奥河 董馬, 濱田 捷聖 — 情報処理学会第88回全国大会講演論文集 (Proc. 88th National Convention of IPSJ)'
    ),
    date: l('Feb 2026', '2026年2月'),
    badges: [REFEREED],
    description: l(
      'KiWi: a secure information request and management system for public institutions through the digitization of paper-based personal data.',
      ''
    ),
  },
  {
    id: 'kyudo2025',
    title: same('リアルタイム姿勢推定による弓道フォーム評価手法の提案とWeb実装'),
    titleLang: { en: 'ja' },
    meta: same(
      '奥河 董馬, 益崎 智成, 牧山 隆洋 — 令和7年度 電気・電子・情報関係学会四国支部連合大会 講演論文集 (SJCIEE 2025)'
    ),
    date: l('Sep 2025', '2025年9月'),
    badges: [REFEREED, LEAD],
    highlightBadges: [l('Outstanding Presentation Award', '優秀発表賞')],
    description: l(
      'Proposal and web implementation of a Kyudo form evaluation method based on real-time pose estimation.',
      ''
    ),
  },
];

export const preprints: EntryData[] = [
  {
    id: 'sd-retinex',
    title: same(
      'SD-Retinex: A Stable Retinex Method for Low-Light Image Enhancement Designed Around the Sigmoid Derivative'
    ),
    titleLang: { ja: 'en' },
    meta: l('Toma Okugawa — Zenodo', 'Toma Okugawa — Zenodo (プレプリント)'),
    date: l('Jun 2026', '2026年6月'),
    badges: [LEAD, CORRESPONDING, PREPRINT],
    links: [{ label: same('DOI'), url: 'https://doi.org/10.5281/ZENODO.20945211' }],
    description: l(
      'A lightweight, training-free, and deterministic Retinex method built on the derivative of the sigmoid function, targeting real-time low-light image enhancement on edge devices.',
      'シグモイド関数の導関数を設計原理とする、軽量・学習不要・決定的な Retinex 系低照度画像強調手法。エッジデバイス上でのリアルタイム処理を目標としています。'
    ),
    abstract: same(
      'Low-light image enhancement (LLIE) is an important pre-processing step in surveillance, medical, industrial-inspection, and disaster-response settings where cloud transmission is restricted, creating demand for lightweight, training-free, deterministic methods that run in real time on edge devices. We propose a Retinex-based method, SD-Retinex, built on one principle: the derivative of the sigmoid function. We first show that the illumination kernel of our prior method XCR is exactly this derivative sampled on the imaginary axis, and that its instability—in kernel radius and slope, with a saturating reflectance gain—is a direct consequence of the logistic poles lying there. Guided by this diagnosis, SD-Retinex relocates the derivative to where it is stable by construction: a real-axis separable illumination kernel (no poles, O(N) per pixel) and a perceptually motivated bounded sigmoid (Naka–Rushton) tone map that needs no hard clipping. Ablations isolate the contributions: the bounded tone map is the dominant quality factor, while the real-axis kernel matches a scale-matched Gaussian in quality and is adopted for its (a,N) stability. Among training-free CPU methods SD-Retinex is the strongest—surpassing classical Retinex (SSR, MSR, LIME), XCR, and the zero-reference deep methods Zero-DCE and SCI in PSNR and color error ΔE without any training—while the paired-trained URetinex-Net and Retinexformer serve as stronger GPU upper references that quantify the price of training.'
    ),
  },
  {
    id: 'xcr',
    title: same('複素指数カーネルに基づく高速・構造保持型 Retinex手法 XCRの提案'),
    titleLang: { en: 'ja' },
    meta: same('奥河 董馬 — Jxiv'),
    date: l('Nov 2025', '2025年11月'),
    badges: [LEAD, CORRESPONDING],
    links: [{ label: same('DOI'), url: 'https://doi.org/10.51094/jxiv.1961' }],
    description: l('A high-speed and structure-preserving Retinex method based on a complex exponential kernel (XCR).', ''),
    abstract: same(
      '本研究では，低照度画像において構造保持と高速性を両立した新しいRetinexベースの強調手法「eXponential-Cos Retinex（XCR）」を提案する．従来のSingle-Scale Retinex (SSR) や Multi-Scale Retinex (MSR)，およびLIMEなどの手法では，ノイズ増幅やハロー発生，色ずれ，計算コストの高さといった課題が指摘されてきた．XCRは，複素指数関数と余弦関数に基づく新しい分離型カーネルにより，構造の破壊を抑えつつ照明成分を安定的に推定する．また，照明値に応じた適応的な反射成分増幅制御とγ補正により，過度な明部変化を抑えながら自然な画像表現を実現する．提案手法は，従来手法よりも高い構造類似度指数（SSIM）と高速な処理時間を達成し，特にリアルタイム性能に優れている．実験結果より，XCRはRetinex系手法の新たな選択肢として有望であることが示された．'
    ),
  },
  {
    id: 'fssr',
    title: same('Fast Single-Scale Retinexの提案と低照度環境におけるリアルタイム骨格検出性能の評価'),
    titleLang: { en: 'ja' },
    meta: same('奥河 董馬 — Jxiv'),
    date: l('Nov 2025', '2025年11月'),
    badges: [LEAD, CORRESPONDING],
    links: [{ label: same('DOI'), url: 'https://doi.org/10.51094/jxiv.1897' }],
    description: l(
      'Proposal of Fast Single-Scale Retinex and evaluation of real-time human pose estimation performance under low-light conditions.',
      ''
    ),
    abstract: same(
      '本研究では，従来困難であった低照度環境下における骨格検出を実現するため，Single-Scale Retinexを拡張したFast Single-Scale Retinexを提案する．本手法では，画像から輝度成分のみを抽出し，対数空間で照明成分を分離することで明るさの非均一性を補正する．骨格検出にはMediaPipeを使用し，955フレームの映像を対象に評価を行った．その結果，補正後の平均二乗誤差（MSE）は 472.73 となり，暗部の階調が有効に拡張されたことで，従来検出が困難であった指先や関節位置の検出が可能となった．本手法は，低照度下での人物解析や行動認識への応用に有効であることを示す．'
    ),
  },
];

export const presentations: EntryData[] = [
  {
    id: 'kyudo-talk',
    title: same('リアルタイム姿勢推定による弓道フォーム評価手法の提案とWeb実装'),
    titleLang: { en: 'ja' },
    meta: same('奥河 董馬, 益崎 智成, 牧山 隆洋 — 令和7年度 電気・電子・情報関係学会四国支部連合大会 (SJCIEE 2025)'),
    date: l('Sep 2025', '2025年9月'),
    badges: [l('Oral presentation', '口頭発表')],
  },
];

// ---- awards ----
export const awards: EntryData[] = [
  {
    id: 'tongali2026',
    title: l('Tongali Business Plan Contest 2026 (Finalist)', 'Tongaliビジネスプランコンテスト2026 ファイナリスト'),
    meta: l(
      'Tongali Project, Nagoya University / National Institute of Information and Communications Technology (NICT) — with Uryu Den and Keito Inoshita',
      '名古屋大学 Tongaliプロジェクト / 国立研究開発法人情報通信研究機構 (NICT) — 田 雨竜・井下 敬翔と共同受賞'
    ),
    date: l('Jun 2026', '2026年6月'),
    highlightBadges: [
      l('5th Place Tongali Award', 'Tongali賞 5位'),
      l('NICT Award', 'NICT賞'),
      l(
        'Supporter Awards (Beyond Next Ventures Award / JR Central Award)',
        'サポーター賞（Beyond Next Ventures賞 / JR東海賞）'
      ),
    ],
  },
  {
    id: 'sushitech2026',
    title: l('SusHi Tech Teen Challenge 2026 Semifinalist', 'SusHi Tech Teen Challenge 2026 セミファイナリスト'),
    meta: l('SusHi Tech Tokyo 2026 Executive Committee', 'SusHi Tech Tokyo 2026 実行委員会'),
    date: l('Apr 2026', '2026年4月'),
  },
  {
    id: 'procon36',
    title: l(
      'Fighting Spirit Award, The 36th KOSEN Programming Contest',
      '第36回全国高等専門学校プログラミングコンテスト 敢闘賞'
    ),
    meta: l(
      'Japan Association of Colleges of Technology — with Ukyo Okada, Kouki Fukuda, Toya Kimura, and Hurano Hirabayasi',
      '一般社団法人 全国高等専門学校連合会 — 岡田 右京・福田 煌輝・木村 斗哉・平林 楓来野と共同受賞'
    ),
    date: l('Oct 2025', '2025年10月'),
  },
  {
    id: 'sjciee-award',
    title: l('Outstanding Presentation Award', '優秀発表賞'),
    meta: l(
      'Shikoku-section Joint Convention of the Institutes of Electrical and Related Engineers (SJCIEE) — with Tomonari Masuzaki and Takahiro Makiyama',
      '電気・電子・情報関係学会四国支部連合大会 (SJCIEE) — 益崎 智成・牧山 隆洋と共同受賞'
    ),
    date: l('Sep 2025', '2025年9月'),
  },
  {
    id: 'student-award',
    title: l(
      'Outstanding Student Award, The 12th Information Science and Technology Department Student Recognition',
      '第12回情報工学科学生表彰 優秀学生賞'
    ),
    meta: l(
      'Information Science and Technology Department, National Institute of Technology, Yuge College',
      '弓削商船高等専門学校 情報工学科'
    ),
    date: l('Apr 2025', '2025年4月'),
  },
];

// ---- home selections ----
export const selectedPublicationIds = ['gcce2026', 'sd-retinex', 'kyudo2025'];
export const recentAwardIds = ['tongali2026', 'sushitech2026', 'procon36'];

const allPublications = [...refereedPapers, ...preprints, ...presentations];

export function publicationById(id: string): EntryData {
  const found = allPublications.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown publication id: ${id}`);
  return found;
}

export function awardById(id: string): EntryData {
  const found = awards.find((a) => a.id === id);
  if (!found) throw new Error(`Unknown award id: ${id}`);
  return found;
}

/** Home page shows the Tongali entry with a combined one-line title. */
export const tongaliSummaryTitle: L = l(
  'Tongali Business Plan Contest 2026 — 5th Place Tongali Award, NICT Award, and Supporter Awards',
  'Tongaliビジネスプランコンテスト2026 — Tongali賞5位・NICT賞・サポーター賞'
);

// ---- CV ----
export const education: EntryData = {
  id: 'education-yuge',
  title: l('National Institute of Technology (KOSEN), Yuge College', '弓削商船高等専門学校'),
  meta: l('Department of Information Science and Technology · Ehime, Japan', '情報工学科 · 愛媛県'),
  date: l('Apr 2024 – Present', '2024年4月 – 現在'),
  active: true,
};

export const researchProject: EntryData = {
  id: 'akatsuki-robot',
  title: same('夜間環境に特化した360度視覚支援型移動ロボットの開発'),
  titleLang: { en: 'ja' },
  meta: l(
    'AKATSUKI Project / LEADING EDGE Shikoku (Competitive Research Funds), Ministry of Economy, Trade and Industry — National Institute of Technology, Yuge College',
    '経済産業省 地方の若手人材発掘育成支援事業（AKATSUKIプロジェクト / LEADING EDGE 四国、公募型競争的資金）— 弓削商船高等専門学校'
  ),
  date: l('Aug 2025 – Jan 2026', '2025年8月 – 2026年1月'),
  badges: [l('Principal Investigator', '研究代表者')],
  description: l(
    'Development of a 360-degree vision-assisted mobile robot specialized for nighttime environments.',
    ''
  ),
};

export const memberships: EntryData[] = [
  {
    id: 'ieice',
    title: l(
      'The Institute of Electronics, Information and Communication Engineers (IEICE)',
      '電子情報通信学会 (IEICE)'
    ),
    date: l('Aug 2026 – Present', '2026年8月 – 現在'),
    active: true,
  },
  {
    id: 'ipsj',
    title: l('Information Processing Society of Japan (IPSJ)', '情報処理学会 (IPSJ)'),
    date: l('Jun 2025 – Present', '2025年6月 – 現在'),
    active: true,
  },
];

export const mediaCoverage: EntryData[] = [
  {
    id: 'nict-report',
    title: same('Tongaliビジネスプランコンテスト2026 結果報告'),
    titleLang: { en: 'ja' },
    meta: l(
      'National Institute of Information and Communications Technology (NICT) — Web',
      '国立研究開発法人情報通信研究機構 (NICT) — Web'
    ),
    date: l('Jun 2026', '2026年6月'),
    links: [{ label: l('Article', '記事'), url: 'https://www.nict.go.jp/venture/2026_tongali_report.html' }],
  },
  {
    id: 'kosen-monster',
    title: same('プログラミングを始めてわずか一年で研究者の道へ。現役高専生のディープテックと地方創生への挑戦。'),
    titleLang: { en: 'ja' },
    meta: l('KOSEN MONSTER (C-Style Inc.) — Web', 'KOSEN MONSTER (C-Style株式会社) — Web'),
    date: l('May 2026', '2026年5月'),
    links: [{ label: l('Article', '記事'), url: 'https://kosen-monster.com/post/okugawa-toma' }],
  },
  {
    id: 'ehime-np',
    title: same('弓削商船高専生、上島町内初のプログラミング教室起業「子どもたちをサポートしたい」'),
    titleLang: { en: 'ja' },
    meta: l('The Ehime Shimbun — Newspaper', '愛媛新聞 — 新聞'),
    date: l('Mar 2026', '2026年3月'),
    links: [{ label: l('Article', '記事'), url: 'https://www.ehime-np.co.jp/article/news202603270169' }],
  },
];

export const otherActivities: EntryData[] = [
  {
    id: 'roadmap-doc',
    title: same('授業の課題だけで終わらせない！ －高専1・2年で 学外のチャンス を掴み取るロードマップ－'),
    titleLang: { en: 'ja' },
    meta: l('Document (PDF)', '資料 (PDF)'),
    date: l('Aug 2026', '2026年8月'),
    links: [
      { label: same('PDF'), url: 'https://researchmap.jp/t_okugawa/others/54540106/attachment_file.pdf' },
    ],
  },
];

export const researchAreas: L[] = [
  l('Informatics — Human interfaces and interactions', '情報通信 — ヒューマンインタフェース、インタラクション'),
  l('Informatics — Perceptual information processing', '情報通信 — 知覚情報処理'),
  l('Informatics — Intelligent informatics', '情報通信 — 知能情報学'),
];

/** Interest pills: primary language first, the other in parentheses. */
export const researchInterestPills: L[] = [
  l('Pose Estimation (姿勢推定)', '姿勢推定 (Pose Estimation)'),
  l('Motion Analysis (動作解析)', '動作解析 (Motion Analysis)'),
  l('Self-Directed Learning Support System (独習支援システム)', '独習支援システム (Self-Directed Learning Support System)'),
  l('Real-Time Feedback (リアルタイムフィードバック)', 'リアルタイムフィードバック (Real-Time Feedback)'),
  l('Sports Engineering (スポーツ工学)', 'スポーツ工学 (Sports Engineering)'),
];

/** Short interest labels for the sidebar pills. */
export const sidebarInterests: L[] = [
  l('Pose Estimation', '姿勢推定'),
  l('Motion Analysis', '動作解析'),
  l('Self-Directed Learning Support', '独習支援システム'),
  l('Real-Time Feedback', 'リアルタイムフィードバック'),
  l('Sports Engineering', 'スポーツ工学'),
];

export const certifications: L[] = [
  l('Information Technology Passport Examination (ITパスポート)', 'ITパスポート試験'),
];

// ---- projects (works) ----
export const works: EntryData[] = [
  {
    id: 'himeguri',
    title: same('ひめぐり ～バラバラな四国の観光情報を、AIで一枚の地図に重ねる～'),
    titleLang: { en: 'ja' },
    meta: l(
      'Toma Okugawa, Rawat Achintan, Teoh Ming Jie — 地域創生・社会課題解決 AIコンテスト 2026 presentation topic, E:N BASE',
      '奥河 董馬, Rawat Achintan, Teoh Ming Jie — 地域創生・社会課題解決 AIコンテスト 2026 発表テーマ、E:N BASE'
    ),
    date: l('Jul 2026 –', '2026年7月 –'),
    active: true,
    badges: [l('Software', 'ソフトウェア')],
    description: l(
      'An AI-powered map that unifies scattered tourism information across Shikoku into a single view.',
      'バラバラな四国の観光情報を、AIで一枚の地図に重ねるソフトウェア。'
    ),
  },
  {
    id: 'vocalia',
    title: same('Vocalia – find sounds by voice –'),
    titleLang: { ja: 'en' },
    meta: l(
      'Koki Fukuda, Ukyo Okada, Toma Okugawa, Ousuke Ozawa, Riku Murakami — The 37th KOSEN Programming Contest, Preliminary Round Qualifier (Free Style Category), Sunport Hall Takamatsu',
      '福田 煌輝, 岡田 右京, 奥河 董馬, 小沢 桜介, 村上 稟來 — 第37回 全国高等専門学校プログラミングコンテスト 予選通過（自由部門）、サンポートホール高松'
    ),
    date: l('Jun – Oct 2026', '2026年6月 – 10月'),
    active: true,
    badges: [l('Web service', 'Webサービス')],
    description: l(
      'A web service for finding sounds by voice, selected as a preliminary round qualifier in the free style category of the national KOSEN programming contest.',
      '声で音を探すWebサービス。全国高専プログラミングコンテスト自由部門の予選を通過。'
    ),
  },
  {
    id: 'reshipuro',
    title: same('れしぷろえんじん！ ―レシピをプログラミングするエンジン―'),
    titleLang: { en: 'ja' },
    meta: l(
      'Ukyo Okada, Kouki Fukuda, Toma Okugawa, Toya Kimura, Hurano Hirabayasi — The 36th KOSEN Programming Contest, Preliminary Round Qualifier (Free Style Category), Kunibiki Messe',
      '岡田 右京, 福田 煌輝, 奥河 董馬, 木村 斗哉, 平林 楓来野 — 第36回 全国高等専門学校プログラミングコンテスト 予選通過（自由部門）、くにびきメッセ'
    ),
    date: l('Jun – Oct 2025', '2025年6月 – 10月'),
    badges: [l('Web service', 'Webサービス')],
    highlightBadges: [l('Fighting Spirit Award', '敢闘賞')],
    description: l(
      'An engine for "programming" cooking recipes, which received the Fighting Spirit Award at the national KOSEN programming contest.',
      'レシピを「プログラミング」するエンジン。全国高専プログラミングコンテストで敢闘賞を受賞。'
    ),
  },
];
