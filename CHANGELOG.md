# Changelog

## [1.2.0](https://github.com/toma-okugawa/portfolio/compare/v1.1.0...v1.2.0) (2026-08-27)


### 機能

* 2ペインレイアウトとフローティングパネル化 ([4e5be27](https://github.com/toma-okugawa/portfolio/commit/4e5be2742914bddc40fd5fef4386b508f0b77598))
* Noto Sans JP フォントを導入 ([34055de](https://github.com/toma-okugawa/portfolio/commit/34055dec47d83b5ae7c1113099aaa7050a58ee46))
* Person / WebSite の JSON-LD 構造化データを追加 ([3f149e7](https://github.com/toma-okugawa/portfolio/commit/3f149e7c7cf860042d0ca7dc62558b2f0737461e))
* サイドバーのリンク一覧に Speaker Deck を追加 ([1e6ac0e](https://github.com/toma-okugawa/portfolio/commit/1e6ac0e72001c3bc84c7cf900ecbff0e317b23c9))
* サイドバーのリンク一覧に Speaker Deck を追加 ([b9092f5](https://github.com/toma-okugawa/portfolio/commit/b9092f5be16243e7c15cbd88c950baed94f6d772))
* サイドバーを基調カラー塗りつぶしデザインに刷新 ([c188eaf](https://github.com/toma-okugawa/portfolio/commit/c188eaf59881338757e212ac0034d8eba49d71cd))
* タイムライン・ピル・開示 UI の改善 ([313d55d](https://github.com/toma-okugawa/portfolio/commit/313d55d01bafa1d455ba4ae5bd9ed1431e295dfa))
* 日本語/英語の言語切り替え対応 (i18n) ([11de46d](https://github.com/toma-okugawa/portfolio/commit/11de46d809b11e8c532a5e6b0a491f363688a190))
* 日本語/英語の言語切り替え対応 (i18n) ([381dc02](https://github.com/toma-okugawa/portfolio/commit/381dc02e150d525782521e06afe5b067b58f1f88))
* 日本語/英語の言語切り替え対応 (main への再適用) ([40dc783](https://github.com/toma-okugawa/portfolio/commit/40dc7831d27acb2afc1d372cf50ed3c4704598da))
* 横長画面向けのレスポンシブ対応 ([e601fa1](https://github.com/toma-okugawa/portfolio/commit/e601fa141dadea66ec8384de3f67a98bfc11d8ce))
* 横長画面対応 + サイドバー余白調整 (main への再適用) ([a6b6710](https://github.com/toma-okugawa/portfolio/commit/a6b6710b110af8af7f6c9e4e19327ae97dfd2c5d))
* 比較レビューに基づく UI 改善 (2ペイン化・フローティングパネル・モーダル他) ([091c74d](https://github.com/toma-okugawa/portfolio/commit/091c74d82ca6f268b3e75e674422d84e2e73cff1))
* 瀬尾氏サイトのデザイン要素を取り込み ([4ece91b](https://github.com/toma-okugawa/portfolio/commit/4ece91bf991c74104265ab7c535401aca89343a8))
* 経歴エントリをタイムライン表示に刷新 ([dd2be2b](https://github.com/toma-okugawa/portfolio/commit/dd2be2b64fba4b33c6d7f085b36f3bfedb47ac76))


### 修正

* **a11y:** replace aria-label on &lt;label&gt; elements with visually hidden text ([75d1bd1](https://github.com/toma-okugawa/portfolio/commit/75d1bd138840f180481785f12fa11df413a9e1f9))
* i18n レビュー指摘の修正 ([c968f8d](https://github.com/toma-okugawa/portfolio/commit/c968f8da486650da0d1d61d60868ec115a54084d))
* tsconfig から非推奨の baseUrl と未使用のパスエイリアスを削除 ([41c43be](https://github.com/toma-okugawa/portfolio/commit/41c43be6d287cdb06315055fdca1be1f15acc4aa))
* tsconfig から非推奨の baseUrl と未使用のパスエイリアスを削除 ([fa46792](https://github.com/toma-okugawa/portfolio/commit/fa467929ac54e8d26559f33618ce008ad6afe093))
* UI自己評価に基づくレスポンシブ・a11y・レイアウト改善 ([afe5569](https://github.com/toma-okugawa/portfolio/commit/afe556917f1b01643ab566364d7e88e24231e77b))
* UI自己評価に基づくレスポンシブ・a11y・レイアウト改善 ([cade4a8](https://github.com/toma-okugawa/portfolio/commit/cade4a8f1b4df5a1b6fcde600b5b58bae1586538))
* アブストラクト開示の矢印をラベル直後に移動 ([4b19567](https://github.com/toma-okugawa/portfolio/commit/4b195673a165d1ffe92353f108148e4139682020))
* アブストラクト開示の矢印をラベル直後に移動 ([45e77bd](https://github.com/toma-okugawa/portfolio/commit/45e77bd2df69b92a22ff5801637251e5177847a9))
* ドロワー展開中のオーバーレイをビューポート全体に固定 ([dc2a703](https://github.com/toma-okugawa/portfolio/commit/dc2a703d38183e80f8a9bc1f638ffd5efb2b3e08))
* モバイルでドロワー展開中にヘッダーが明るく浮いて見える問題を修正 ([8960d11](https://github.com/toma-okugawa/portfolio/commit/8960d1192f696e754c1399744698bd7606d567a7))
* モバイルドロワーのオーバーレイ不具合を修正 ([4586d80](https://github.com/toma-okugawa/portfolio/commit/4586d807f50db0d4a5640abb178810b749d07330))
* リリース成果物ワークフローが自動リリースで起動しない問題を修正 ([c8b9115](https://github.com/toma-okugawa/portfolio/commit/c8b91156cc65cfcb9972e934dec767df5f81a4e6))
* リリース成果物ワークフローが自動リリースで起動しない問題を修正 ([85bacbd](https://github.com/toma-okugawa/portfolio/commit/85bacbd7bf88230a1da47f76a1cdefae140fc470))


### スタイル

* サイドバー上部の縦の余白を拡大 ([0dd0464](https://github.com/toma-okugawa/portfolio/commit/0dd046431c86573aa4363553236a9d77184c82e5))


### リファクタリング

* 言語スイッチャーの表記を EN / JA に統一 ([871a5a5](https://github.com/toma-okugawa/portfolio/commit/871a5a508736d7dff2464bb31d4c1b95e1e615f5))


### ドキュメント

* English README with screenshot and Astrofy attribution ([0ff62c7](https://github.com/toma-okugawa/portfolio/commit/0ff62c7db31f1ebee2ffb1ae4ba645923e3e13de))


### その他

* add own copyright notice to LICENSE ([acb7884](https://github.com/toma-okugawa/portfolio/commit/acb78848ca92090ce907e5dfe3a148610fe87aee))
* **ci:** add Dependabot for npm and GitHub Actions ([26e84c6](https://github.com/toma-okugawa/portfolio/commit/26e84c607c1a16074a4fec75df64d302b510bb67))
* Cloudflare Pages デプロイ対応 ([8cf4e24](https://github.com/toma-okugawa/portfolio/commit/8cf4e2404a8fb1dcfee37c7622043770fc158eb6))
* Cloudflare Pages デプロイ対応 ([968e645](https://github.com/toma-okugawa/portfolio/commit/968e645a39a250fa383bc01df188ee778188fc61))
* **main:** release 1.0.1 ([43f771a](https://github.com/toma-okugawa/portfolio/commit/43f771a10770c43cc3bc84adbaeaa26d6ca78c7e))
* **main:** release 1.0.1 ([3728dec](https://github.com/toma-okugawa/portfolio/commit/3728decc389b0485ba4990ba1562e47ccb2a935e))
* **main:** release 1.0.2 ([114aa22](https://github.com/toma-okugawa/portfolio/commit/114aa22d7a677fc5e2051de8f02082aa3a04b1b6))
* **main:** release 1.0.2 ([4be1c8d](https://github.com/toma-okugawa/portfolio/commit/4be1c8dcf7b98128b0ba6ffe4de2ff981078d449))
* **main:** release 1.1.0 ([2559b7d](https://github.com/toma-okugawa/portfolio/commit/2559b7db9dc8b576f4bbfff80da801afda1f0d25))
* **main:** release 1.1.0 ([34b659c](https://github.com/toma-okugawa/portfolio/commit/34b659c04654e0b762fe1acde76b32852f4267a0))
* Releases / Packages の自動管理を導入 ([69cc6dd](https://github.com/toma-okugawa/portfolio/commit/69cc6dd8dc557feef70561a9094853c7330a9773))
* Releases / Packages の自動管理を導入 ([e1987de](https://github.com/toma-okugawa/portfolio/commit/e1987decf2fc6cbadd88388aa2a156f3960f979c))
* site polish — inline CSS, a11y fix, README, Dependabot ([567fd57](https://github.com/toma-okugawa/portfolio/commit/567fd5728933faad78be8c673e1d03802c4ce6d6))
* プロフィールリポジトリのクローンを gitignore に追加 ([8ee5b37](https://github.com/toma-okugawa/portfolio/commit/8ee5b3772a37ddb803389b6215f587949e3d6a11))
* ポートフォリオサイト初期構築 (Astro + Tailwind + daisyUI) ([d87b324](https://github.com/toma-okugawa/portfolio/commit/d87b32458491af81c2ea46690bf834bbc80d4e80))
* 使用技術・テンプレートの露出を最小化 (Closes [#8](https://github.com/toma-okugawa/portfolio/issues/8)) ([b23dbdf](https://github.com/toma-okugawa/portfolio/commit/b23dbdfb6a5a5c5c52e137da54991658c970e77a))
* 使用技術・テンプレートの露出を最小化 (main への再適用) ([e47b624](https://github.com/toma-okugawa/portfolio/commit/e47b624766e8693c0ae50abb0aa3a14dedb5644e))
* 公開URLを t-okugawa.dev に更新 ([bbd62d6](https://github.com/toma-okugawa/portfolio/commit/bbd62d6adfd6371e3434fe83c1a4b4bb2cae5652))

## [1.1.0](https://github.com/toma-okugawa/portfolio/compare/v1.0.2...v1.1.0) (2026-08-15)


### 機能

* サイドバーのリンク一覧に Speaker Deck を追加 ([ff669b3](https://github.com/toma-okugawa/portfolio/commit/ff669b34b17bcfcb9d97b3b4033208dbfdbddf01))
* サイドバーのリンク一覧に Speaker Deck を追加 ([8349e08](https://github.com/toma-okugawa/portfolio/commit/8349e08fd85f0e4de83d455d0350975bab1fa328))


### 修正

* tsconfig から非推奨の baseUrl と未使用のパスエイリアスを削除 ([0c45c2f](https://github.com/toma-okugawa/portfolio/commit/0c45c2f859708be78346916635be8f0caebda337))
* tsconfig から非推奨の baseUrl と未使用のパスエイリアスを削除 ([8f39546](https://github.com/toma-okugawa/portfolio/commit/8f395466c1daee52019f4f04b7a33038ef3020a2))

## [1.0.2](https://github.com/toma-okugawa/portfolio/compare/v1.0.1...v1.0.2) (2026-08-15)


### 修正

* リリース成果物ワークフローが自動リリースで起動しない問題を修正 ([2b1a338](https://github.com/toma-okugawa/portfolio/commit/2b1a338eb4c2b28962eacfdd85df9a831d7b072c))
* リリース成果物ワークフローが自動リリースで起動しない問題を修正 ([f06dd27](https://github.com/toma-okugawa/portfolio/commit/f06dd2747bb37277f9f6fb4014dac0f391553ecd))

## [1.0.1](https://github.com/toma-okugawa/portfolio/compare/v1.0.0...v1.0.1) (2026-08-15)


### その他

* Releases / Packages の自動管理を導入 ([e388d4f](https://github.com/toma-okugawa/portfolio/commit/e388d4f8ff64a1bd08ca2b9411d344abc5eac1bf))
* Releases / Packages の自動管理を導入 ([938df11](https://github.com/toma-okugawa/portfolio/commit/938df11aefe3d5fe943be20ad4027c157126a124))
