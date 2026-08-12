# Toma Okugawa — Portfolio

奥河 董馬 (Toma Okugawa) のポートフォリオ / 学術 CV サイトです。
Astro + Tailwind CSS (daisyUI) 製の静的サイトで、Cloudflare Pages での公開を想定しています。

- 基調カラー: `#00489D` (`tailwind.config.cjs` のカスタム daisyUI テーマ `resume` で定義)
- 掲載内容の情報源: [researchmap](https://researchmap.jp/t_okugawa) のエクスポートデータ
  (`researchmap.json` — 個人情報を含むためリポジトリには含めていません)

## 構成

| パス | 内容 |
| --- | --- |
| `src/pages/index.astro` | Home (プロフィール・主要業績・受賞) |
| `src/pages/cv.astro` | Curriculum Vitae |
| `src/pages/publications.astro` | 論文・発表一覧 |
| `src/pages/projects.astro` | 研究課題・制作物 |
| `src/components/` | 共通コンポーネント (サイドバー・タイムライン Entry など) |
| `src/config.ts` | サイト全体の定数 (名前・連絡先・URL) |

## 開発

```bash
corepack enable          # pnpm を有効化 (初回のみ)
pnpm install
pnpm dev                 # http://localhost:4321/
pnpm build               # dist/ に静的ビルド
pnpm preview             # ビルド結果の確認
```

## デプロイ (Cloudflare Pages)

Cloudflare ダッシュボードで本リポジトリを接続し、以下を設定してください。

| 設定 | 値 |
| --- | --- |
| Framework preset | Astro |
| Build command | `pnpm build` |
| Build output directory | `dist` |

`package.json` の `packageManager` と `.node-version` を Cloudflare が自動検出します。
公開 URL が確定したら `astro.config.mjs` の `site` と `public/robots.txt` の Sitemap URL を更新してください。

## 開発フロー (Git)

- `main` への直接 push は禁止 (ブランチ保護 ruleset)。変更は必ずブランチ → Pull Request 経由で行います
- PR は GitHub Actions の CI (`build`) が通ることがマージ条件です
- コミットは [Conventional Commits](https://www.conventionalcommits.org/) 形式 (`feat:` / `fix:` / `chore:` など)

## クレジット

[Astrofy](https://github.com/manuelernestog/astrofy) テンプレート (MIT License) をベースにしています。
