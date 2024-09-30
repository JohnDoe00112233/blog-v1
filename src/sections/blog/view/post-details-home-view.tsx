'use client';

import type { IPostItem } from 'src/types/blog';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostItem } from '../post-item';
import { PostDetailsHero } from '../post-details-hero';

// ----------------------------------------------------------------------

type Props = {
  post?: IPostItem;
  latestPosts?: IPostItem[];
};

export function PostDetailsHomeView({ post, latestPosts }: Props) {
  return (
    <>
      <PostDetailsHero
        title={post?.title ?? ''}
        author={post?.author}
        coverUrl={post?.coverUrl ?? ''}
        createdAt={post?.createdAt}
      />

      <Container
        maxWidth={false}
        sx={{ py: 3, mb: 5, borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}` }}
      >
        <CustomBreadcrumbs
          links={[
            { name: 'Trang chủ', href: '/' },
            { name: 'Hướng dẫn', href: paths.tutorial },
            { name: post?.title },
          ]}
          sx={{ maxWidth: 720, mx: 'auto' }}
        />
      </Container>

      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
          <Markdown children={post?.content} />

          <Stack
            spacing={3}
            sx={{
              py: 3,
              borderTop: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
              borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
            }}
          >
            <Stack direction="row" flexWrap="wrap" spacing={1}>
              {post?.tags.map((tag) => <Chip key={tag} label={tag} variant="soft" />)}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {!!latestPosts?.length && (
        <Container sx={{ pb: 15, pt:10 }}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Bài viết gần đây
          </Typography>

          <Grid container spacing={3}>
          {latestPosts?.slice(latestPosts.length - 4).map((latestPost) => (
              <Grid key={latestPost.id} xs={12} sm={6} md={4} lg={3}>
                <PostItem post={latestPost} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
