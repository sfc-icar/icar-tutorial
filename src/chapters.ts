// 章の一覧。上部バー・トップページ・前後リンクはすべてここから作られる。
// 章を増やすときは、ここに1行足して src/pages/ に同じ名前の .md を置く。
export const chapters = [
  { slug: '00-hajimeyou', num: 0, title: 'はじめよう', summary: '何を作るのか、どう進めるのか。Claude Code を準備する。' },
  { slug: '01-git', num: 1, title: 'git とは', summary: '変更の履歴を残す仕組み。commit と push を一周する。' },
  { slug: '02-html-css', num: 2, title: 'Web ページの基礎', summary: 'HTML は構造、CSS は見た目。いまの研究室サイトを手で直してみる。' },
  { slug: '03-framework', num: 3, title: 'フレームワークとは', summary: '繰り返しを部品にし、データと見た目を分ける。同じ作業を新しいサイトでやる。' },
  { slug: '04-jissen', num: 4, title: '仕上げ', summary: '担当ページの情報を新しくして、公開する。' },
];
