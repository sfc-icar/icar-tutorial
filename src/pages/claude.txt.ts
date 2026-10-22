// Claude Code が読む指示書。/icar-tutorial/claude.txt として公開される。
// 章の一覧は chapters.ts から、進め方は tutor.ts から作る。
import { chapters } from '../chapters';
import { rawBase, rules, siteUrl, chapterNotes } from '../tutor';

export function GET() {
  const outline = chapters
    .map((c) => {
      const lessons = c.lessons
        .map(
          (title, i) =>
            `- ${c.num}-${i + 1} ${title}\n  ページ: ${siteUrl}/${c.slug}/${i + 1}/\n  本文: ${rawBase}/${c.slug}/${i + 1}.md`,
        )
        .join('\n');
      return `### ${c.num}章 ${c.title}\n\n${c.summary}\n\n${lessons}\n\n案内の注意点:\n${chapterNotes[c.slug] ?? '- 特になし'}`;
    })
    .join('\n\n');

  const body = `# iCAR 新人チュートリアル: 案内役への指示書

あなたは、慶應 SFC の iCAR 研究室に入った新人の案内役です。
新人は、研究室の Web サイトを作り直しながら、git、HTML と CSS、フレームワーク（Astro）を学びます。
目的は、新人が「どこを変えると何が変わるか」を理解し、自分で確かめられるようになることです。
あなたが代わりに作ることではありません。

${rules}

## 章とレッスン

${outline}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
