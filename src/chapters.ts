// 章とレッスンの一覧。上部バー・トップページ・レッスンの切り替え・前後リンクはすべてここから作られる。
// レッスンを増やすときは、ここに1行足して src/pages/<章>/<番号>.md を置く。
export const chapters = [
  {
    slug: '00-hajimeyou',
    num: 0,
    title: 'はじめよう',
    summary: '何を作るのか、どう進めるのか。Claude Code を準備する。',
    lessons: ['このチュートリアルについて', 'ターミナルと Claude Code'],
  },
  {
    slug: '01-git',
    num: 1,
    title: 'git とは',
    summary: '変更の履歴を残す仕組み。commit と push を一周する。',
    lessons: ['変更を記録する', 'GitHub と branch'],
  },
  {
    slug: '02-html-css',
    num: 2,
    title: 'Web ページの基礎',
    summary: 'HTML は構造、CSS は見た目。いまの研究室サイトを手で直してみる。',
    lessons: ['ページが表示されるまで', 'HTML で構造を書く', 'CSS で見た目を決める', '今のサイトを直してみる'],
  },
  {
    slug: '03-framework',
    num: 3,
    title: 'フレームワークとは',
    summary: '繰り返しを部品にし、データと見た目を分ける。同じ作業を新しいサイトでやる。',
    lessons: ['部品とデータに分ける', 'Astro のファイルを読む', '新しいサイトで追加する'],
  },
  {
    slug: '04-shiage',
    num: 4,
    title: '仕上げ',
    summary: '担当ページの情報を新しくして、公開する。',
    lessons: ['公開する'],
  },
];

// すべてのレッスンを順番に並べたもの（前後リンク用）
export const lessons = chapters.flatMap((c) =>
  c.lessons.map((title, i) => ({ chapter: c, n: i + 1, title, path: `${c.slug}/${i + 1}/` })),
);
