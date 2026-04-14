# CLAUDE.md - esta-travel-auth-site

**プロジェクト:** ESTA渡航認証サイト
**最終更新:** 2026-04-08

---

## プロジェクト概要

ESTA（電子渡航認証システム）に関する情報サイト。Next.jsベースのWebアプリケーション。
Cloudflare Pagesにデプロイ。

## 技術スタック

- **フレームワーク:** Next.js
- **言語:** TypeScript
- **スタイリング:** PostCSS / Tailwind CSS
- **デプロイ:** Cloudflare Pages
- **ビルド:** `npx next build` → `out/` ディレクトリ

## 作業履歴

- DEPLOYMENT.md: デプロイ手順書
- IMPLEMENTATION_REPORT.md: 実装レポート
- AGENTS.md: ワークスペースルール

## 関連WordPress

- **本番:** https://etias-eutravel.com（wp-api-etias.sh）
- **ステージング:** https://stg.etias-eutravel.com（wp-api-etias-stg.sh）

## 関連ファイル（ワークスペースルート）

- esta-seo-analysis.md: SEO分析
- esta-strategy-*.md: 戦略文書各種
- esta-travel-auth-site/: サイト本体
- esta-backlink-*.md: バックリンク戦略
- esta-competitive-analysis.md: 競合分析

## デプロイ手順

1. ローカルで `npx next build`
2. `out/` の内容をデプロイ用リポジトリにコピー
3. `git add . && git commit -m "Update" && git push`

---

## Bot役割・体制

| Bot | 役割 | Tailscale IP | ユーザー名 |
|-----|------|-------------|-----------|
| **tomomi** | 管理者・統括 | 100.68.144.128 | takashi.hasegawa |
| **taro** | 開発・記事作成 | 100.122.26.7 | taro.hasegawa |
| **jiro** | 開発・記事作成 | 100.112.156.89 | jiro.hasegawa |
| **saburo** | 開発・記事作成 | 100.82.52.10 | saburo.hasegawa |

## SSH接続情報

```bash
ssh taro.hasegawa@100.122.26.7
ssh jiro.hasegawa@100.112.156.89
ssh saburo.hasegawa@100.82.52.10
```

## ルール

- **作業開始時にこのファイルを必ず読み込むこと**
- **作業完了後は実施内容・学んだことを必ずこのファイルに追記すること**
- タスクを引き受けたら必ず実行し、完了報告すること
- 5分以上かかるタスクは途中経過を報告すること
- 費用が発生する作業は事前にMediaXAIに相談すること
- 修正後は必ずGitHubにプッシュし、Cloudflare Pagesのビルド成功を確認すること
- キャッシュ対策メタタグを必ずHTMLに含めること

## リアクションルール

- メッセージを受信したら👀をつける
- 作業中は⚙️をつける
- 完了したら✅をつける
- エラーが起きたら❌をつける
