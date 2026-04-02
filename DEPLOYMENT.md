# デプロイ手順

## Cloudflare Pagesへのデプロイ

### 前提条件
- GitHubリポジトリが作成されている
- Cloudflare Pagesアカウントがある

### 手順

#### 1. ビルドコマンド
```bash
npm run build
```

#### 2. 出力ディレクトリ
```
out
```

#### 3. Cloudflare Pages設定

**ビルド設定:**
- **フレームワークプリセット:** Next.js (Static HTML Export)
- **ビルドコマンド:** `npm run build`
- **ビルド出力ディレクトリ:** `out`
- **Node.jsバージョン:** 18以上

**環境変数:**
（必要に応じて設定）
- `NODE_VERSION`: 18

#### 4. カスタムドメイン設定

Cloudflare Pagesダッシュボードで:
1. プロジェクトを選択
2. 「Custom domains」タブ
3. ドメインを追加
4. DNSレコードを設定

#### 5. hreflang設定（多言語対応時）

将来的に多言語対応する場合:
- ポーランド語版: `/pl-pl/`
- スウェーデン語版: `/sv-se/`
- ドイツ語版: `/de-de/`
- フランス語版: `/fr-fr/`
- 英語版: `/en-us/`

各ページに以下のhreflangタグを追加:
```html
<link rel="alternate" hreflang="ja" href="https://example.com/" />
<link rel="alternate" hreflang="pl" href="https://example.com/pl-pl/" />
<link rel="alternate" hreflang="sv" href="https://example.com/sv-se/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />
```

## ローカルビルドテスト

```bash
# ビルド
npm run build

# ビルド結果を確認
cd out
python3 -m http.server 8000
# http://localhost:8000 で確認
```

## デプロイ前チェックリスト

- [ ] 全ページが正しく表示される
- [ ] レスポンシブデザインが動作する
- [ ] 診断ツールがインタラクティブに動作する
- [ ] 外部リンク（公式サイト等）が正しく機能する
- [ ] メタタグ（title, description）が各ページに設定されている
- [ ] Open Graphタグが設定されている
- [ ] 免責事項が表示されている
