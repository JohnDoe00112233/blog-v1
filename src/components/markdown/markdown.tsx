
import type { Options } from 'react-markdown';

import { useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { FigcaptionStyled } from 'src/components/markdown/figcaption-styles';

import { Image } from '../image';
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
    return (
      <span>
        <figure
          style={{
            margin: "30px 0",
          }}
        >
          <Image
            ratio="16/9"
            className={markdownClasses.content.image}
            sx={{ borderRadius: 2 }}
            {...other}
          />
          {coverUrlAlt && <FigcaptionStyled>{coverUrlAlt}</FigcaptionStyled>}
        </figure>
      </span>
    )
  },
  a: ({ href, children, ...other }: ComponentTag) => (
    <a style={{textDecoration:"none", fontWeight:"bold", color:"#00A76F", }} href={href} target="_blank" rel="noopener noreferrer" {...other}>
      {children}
    </a>
  ),
};
