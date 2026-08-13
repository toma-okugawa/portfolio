export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Map an unprefixed path ("/cv/") to its locale-specific URL. */
export function localizePath(locale: Locale, path: string): string {
  if (locale === 'en') return path;
  return path === '/' ? '/ja/' : `/ja${path}`;
}

/** Strip the locale prefix from a pathname ("/ja/cv/" -> "/cv/"). */
export function basePathOf(pathname: string): string {
  const stripped = pathname.replace(/^\/ja(\/|$)/, '/');
  return stripped === '' ? '/' : stripped;
}

export const ui = {
  en: {
    'site.title': 'Toma Okugawa | Portfolio',
    'site.author': 'Toma Okugawa',
    'site.description':
      'Portfolio and academic CV of Toma Okugawa (奥河 董馬), a student researcher at National Institute of Technology (KOSEN), Yuge College, working on pose estimation, motion analysis, real-time feedback, and low-light image enhancement.',
    'nav.home': 'Home',
    'nav.cv': 'Curriculum Vitae',
    'nav.publications': 'Publications',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'sidebar.tagline': 'Student Researcher',
    'sidebar.college': 'NIT (KOSEN), Yuge College',
    'sidebar.location': 'Ehime, Japan',
    'sidebar.mailLabel': 'Send an email',
    'sidebar.researchmapLabel': 'researchmap profile',
    'sidebar.closeLabel': 'Close sidebar',
    'header.menuLabel': 'Open menu',
    'header.drawerLabel': 'Open navigation menu',
    'hero.role': 'Student Researcher',
    'hero.affiliation1': 'Department of Information Science and Technology,',
    'hero.affiliation2': 'National Institute of Technology (KOSEN), Yuge College',
    'hero.contactMe': 'Contact Me',
    'home.selectedPublications': 'Selected Publications',
    'home.recentAwards': 'Recent Awards',
    'home.viewAllPublications': 'View all publications',
    'home.viewAllAwards': 'View all awards',
    'cv.title': 'Curriculum Vitae',
    'cv.profile': 'Profile',
    'cv.education': 'Education',
    'cv.research': 'Research',
    'cv.interests': 'Interests',
    'cv.areas': 'Areas',
    'cv.researchProjects': 'Research Projects',
    'cv.awards': 'Awards & Honors',
    'cv.certsMemberships': 'Certifications & Memberships',
    'cv.certifications': 'Certifications',
    'cv.memberships': 'Professional Memberships',
    'cv.media': 'Media Coverage',
    'cv.others': 'Other Activities',
    'pubs.title': 'Publications',
    'pubs.refereed': 'Refereed Papers',
    'pubs.preprints': 'Preprints',
    'pubs.presentations': 'Presentations',
    'projects.title': 'Projects',
    'projects.funded': 'Funded Research',
    'projects.works': 'Works',
    'entry.abstract': 'Abstract',
    'entry.ongoing': 'Ongoing',
    'modal.title': 'Contact',
    'modal.sendTo': 'Send an email to:',
    'modal.cancel': 'Cancel',
    'modal.copy': 'Copy address',
    'modal.open': 'Open mail app',
    'modal.copied': 'Address copied!',
    'modal.copyFailed': 'Copy failed',
    'notfound.title': '404: Not Found',
    'notfound.heading': 'Page Not Found',
    'notfound.message': "The page you're looking for doesn't exist or has been moved.",
    'notfound.back': 'Back to Home',
    'switcher.label': 'Language',
  },
  ja: {
    'site.title': '奥河 董馬 | ポートフォリオ',
    'site.author': '奥河 董馬',
    'site.description':
      '弓削商船高等専門学校の学生研究者・奥河 董馬 (Toma Okugawa) のポートフォリオ・経歴サイト。姿勢推定・動作解析・リアルタイムフィードバック・低照度画像強調を研究しています。',
    'nav.home': 'ホーム',
    'nav.cv': '経歴',
    'nav.publications': '研究業績',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',
    'sidebar.tagline': '学生研究者',
    'sidebar.college': '弓削商船高等専門学校',
    'sidebar.location': '愛媛県',
    'sidebar.mailLabel': 'メールを送る',
    'sidebar.researchmapLabel': 'researchmap プロフィール',
    'sidebar.closeLabel': 'サイドバーを閉じる',
    'header.menuLabel': 'メニューを開く',
    'header.drawerLabel': 'ナビゲーションメニューを開く',
    'hero.role': '学生研究者',
    'hero.affiliation1': '弓削商船高等専門学校',
    'hero.affiliation2': '情報工学科',
    'hero.contactMe': 'お問い合わせ',
    'home.selectedPublications': '主要業績',
    'home.recentAwards': '最近の受賞',
    'home.viewAllPublications': '研究業績をすべて見る',
    'home.viewAllAwards': '受賞歴をすべて見る',
    'cv.title': '経歴',
    'cv.profile': 'プロフィール',
    'cv.education': '学歴',
    'cv.research': '研究',
    'cv.interests': 'キーワード',
    'cv.areas': '研究分野',
    'cv.researchProjects': '研究課題',
    'cv.awards': '受賞歴',
    'cv.certsMemberships': '資格・所属学会',
    'cv.certifications': '資格',
    'cv.memberships': '所属学会',
    'cv.media': 'メディア掲載',
    'cv.others': 'その他の活動',
    'pubs.title': '研究業績',
    'pubs.refereed': '査読付き論文',
    'pubs.preprints': 'プレプリント',
    'pubs.presentations': '口頭発表',
    'projects.title': 'プロジェクト',
    'projects.funded': '研究課題（外部資金）',
    'projects.works': '制作物',
    'entry.abstract': '概要',
    'entry.ongoing': '進行中',
    'modal.title': 'お問い合わせ',
    'modal.sendTo': '以下のアドレス宛にメールを送信できます:',
    'modal.cancel': 'キャンセル',
    'modal.copy': 'アドレスをコピー',
    'modal.open': 'メールアプリを起動',
    'modal.copied': 'コピーしました',
    'modal.copyFailed': 'コピーに失敗しました',
    'notfound.title': '404: ページが見つかりません',
    'notfound.heading': 'ページが見つかりません',
    'notfound.message': 'お探しのページは存在しないか、移動しました。',
    'notfound.back': 'ホームに戻る',
    'switcher.label': '言語',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
