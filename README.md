<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=120&color=gradient&section=header"/>
</div>

<h1 align="center">Masagin｜まさじん</h1>
<p align="center">
  <a href="https://twitter.com/masa_tech_0326">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white"/>
  </a>
</p>

<p align="center">
Ruby on Rails を中心に、フロントエンドも含めたWebアプリケーション開発に取り組んでいます。<br>
課題解決を起点にプロダクトを設計・実装・デプロイまで一貫して手がけています。
</p>

---

## About Me

- Ruby on Rails を中心にWebアプリケーションを個人開発
- MVPリリースから本番環境での運用まで一貫して手がける
- 設計・実装・Docker環境構築・デプロイ・運用まで対応
- 長期運用を前提に、継続的な改善・機能追加を実施

---

## Main Project

### MabaTalk
<p align="center">
  <img src="https://github.com/user-attachments/assets/99e0d087-32cf-4afe-8732-b44878384cc2" width="80%" />
</p>
発声や身体操作が困難な方のためのコミュニケーション支援Webアプリ

開発背景note記事：["伝えたいのに伝えられない"を減らしたい。未完成のまま「MabaTalk」を公開しました。](https://note.com/prime_snail5740/n/n02d9f797d46a)

**Background**

妻の義父が脳卒中で倒れ、まばたき以外で意思を伝える手段がなくなった実体験をもとに課題を設定

**Problem**  
介護現場では意思確認に時間がかかり、家族・スタッフ双方に負担が発生している

**Solution**  
まばたきによる Yes / No をもとに、フロー形式で意思確認と履歴共有を実現

**Features**
- フロー形式での段階的な意思確認（カテゴリ → 項目 → Yes/No）
- カスタムカテゴリ・項目の作成・編集
- 選択結果のログ保存と月次グラフ表示
- **Anthropic Claude HaikuによるAIログ要約**（直近30日の傾向をケアに活用）  
- Docker / Render を用いた本番運用

**URL**

- 🌐 App: [https://mabatalk.com/](https://mabatalk.com/)
- 💻 Repo: [https://github.com/naganobol6212/mabatalk](https://github.com/naganobol6212/mabatalk)

---
### Space Logger
<p align="center">
  <img src="https://i.gyazo.com/3d6c291c36d94ce96a9ccf17f1799b84.png" width="80%" />
</p>
学習記録をGitHubのContribution Graph(草)に自動反映する学習ログアプリ。
GitHub Tokenをサーバーサイド（Supabase Edge Function）に移管し、ブラウザへのトークン露出を排除。

**Problem**

学習を継続しても進捗が見えにくく、モチベーション維持が難しい

**Solution**

学習記録と同時に GitHub リポジトリへ自動コミットし、Contribution Graph（草）で継続を可視化

**Features**
- 学習タイトル・時間・タグ・学習タイプ（input / output）を記録
- GitHub API連携による自動コミット（記録と同時に草が生える）
- 週別・タグ別・インプット/アウトプット比率の分析グラフ
- **GitHub Token を Supabase Edge Function に移管**（ブラウザへのトークン露出を排除）
-  PKCEフローによるOAuth 認証 / RLSによるデータアクセス制御
- ダークモード対応

**URL**
- 🌐 App: [https://space-logger.vercel.app/](https://space-logger.vercel.app/)
- 💻 Repo: [https://github.com/naganobol6212/space_logger](https://github.com/naganobol6212/space_logger)

---
## Tech Stack

<table align="center">
<tr>
<td width="50%" align="center" valign="top">

### Backend
<img src="https://skillicons.dev/icons?i=ruby,rails" />

### Frontend
<img src="https://skillicons.dev/icons?i=html,js,css,react,ts" />

</td>
<td width="50%" align="center" valign="top">

### Database
<img src="https://skillicons.dev/icons?i=postgres,supabase" />

### Tool
<img src="https://skillicons.dev/icons?i=docker,git,github,vercel" />

</td>
</tr>
</table>

---
## GitHub Stats

<div align="center">
  <img height="160" src="https://github-readme-stats-puce-six-20.vercel.app/api?username=naganobol6212&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"/>
  <img height="160" src="https://github-readme-stats-puce-six-20.vercel.app/api/top-langs/?username=naganobol6212&layout=compact&langs_count=8&theme=tokyonight&hide_border=true"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=naganobol6212&theme=tokyonight&hide_border=true"/>
</div>

## Contact
  X: [@masa_tech_0326](https://x.com/masa_tech_0326)
