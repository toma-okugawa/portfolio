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

## 開発フロー (Git / GitHub)

- 作業は **Issue 起点**で管理します: 課題・改善は Issue に起票し、ラベル (`responsive` / `a11y` / `ui` / `disclosure` / `polish` など) で分類
- `main` への直接 push は禁止 (ブランチ保護 ruleset)。変更は必ずブランチ → Pull Request 経由で行います
- PR 本文の `Closes #N` で対応 Issue を紐付け、マージと同時にクローズします
- PR は GitHub Actions の CI (`build`) が通ることがマージ条件です
- コミットは [Conventional Commits](https://www.conventionalcommits.org/) 形式 (`feat:` / `fix:` / `chore:` など)

## リリース (Releases)

[release-please](https://github.com/googleapis/release-please-action) による自動リリース管理です。

1. main へのマージが積まれると、release-please が **リリース PR** (バージョン更新 + CHANGELOG) を自動作成・更新します
2. リリース PR をマージすると、**タグ + GitHub Release が自動作成**されます
3. バージョンは Conventional Commits から自動決定 (`feat:` → minor / `fix:` → patch)

> **Note**: リリース PR は GITHUB_TOKEN で作られるため CI が自動起動しません。PR を一度 **Close → Reopen** すると `build` チェックが走ります (恒久対応する場合は PAT を Actions シークレットに登録して workflow の `token` に渡してください)。

## パッケージ (Packages)

Release の公開をトリガーに、ビルド済みサイトが2形態で自動配布されます:

| 形態 | 場所 |
| --- | --- |
| `site-vX.Y.Z.zip` (dist 一式) | Release のアセット |
| コンテナイメージ (nginx 配信) | `ghcr.io/toma-okugawa/portfolio` (`latest` / `X.Y.Z` / `X.Y`) |

任意のリリース時点のサイトをローカルで再現できます:

```bash
docker run --rm -p 8080:80 ghcr.io/toma-okugawa/portfolio:latest
# → http://localhost:8080
```

> **Note**: 初回 push 時のパッケージは private です。公開する場合はパッケージ設定 → Danger Zone → Change visibility から Public に変更してください (一度 Public にすると Private へは戻せません)。

## ライセンス

一部のコードは MIT ライセンスの OSS に由来します。詳細は [LICENSE](LICENSE) を参照してください。
