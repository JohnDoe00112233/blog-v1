
import type { Options } from 'react-markdown';

import Image from 'next/image';
import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { FigcaptionStyled } from 'src/components/markdown/figcaption-styles';

import { StyledRoot } from './styles';
import { markdownClasses } from './classes';
import { htmlToMarkdown, isMarkdownContent } from './html-to-markdown';

import type { MarkdownProps } from './types';

// ----------------------------------------------------------------------

export function Markdown({ children, sx, ...other }: MarkdownProps) {
  const content = useMemo(() => {
    if (isMarkdownContent(`${children}`)) {
      return children;
    }
    return htmlToMarkdown(`${children}`.trim());
  }, [children]);

  return (
    <StyledRoot
      children={content}
      components={components as Options['components']}
      rehypePlugins={rehypePlugins as Options['rehypePlugins']}
      /* base64-encoded images
       * https://github.com/remarkjs/react-markdown/issues/774
       * urlTransform={(value: string) => value}
       */
      className={markdownClasses.root}
      sx={sx}
      {...other}
    />
  );
}

// ----------------------------------------------------------------------

type ComponentTag = {
  [key: string]: any;
};

const rehypePlugins = [rehypeRaw, [remarkGfm, { singleTilde: false }]];

const components = {
  img: ({ node, ...other }: ComponentTag) => {
    const coverUrlAlt = node?.properties?.alt
    const coverUrl = node?.properties?.src
    return (
      <span>
        <figure
          style={{
            margin: "30px 0",
          }}
        >
          <Image
            alt={coverUrlAlt} src={coverUrl}
            className={markdownClasses.content.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={1024}
            height={720}
            quality={75}
            priority
            {...other} />
          {coverUrlAlt && <FigcaptionStyled>{coverUrlAlt}</FigcaptionStyled>}
        </figure>
      </span>
    )
  },
  a: ({ href, children, ...other }: ComponentTag) => (
    <a style={{ textDecoration: "none", fontWeight: "bold", color: "#00A76F", }} href={href} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  ),
};
