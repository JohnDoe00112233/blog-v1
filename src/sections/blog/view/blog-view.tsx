'use client';

import { Container } from "@mui/material";

import { Markdown } from "src/components/markdown";
import { BackToTop, ScrollProgress, useScrollProgress } from "src/components/animate";


type Props = {
  data: {
    metaTitle:string;
    metaDesciption:string;
    content:string;
  }
}

export function BlogView({data}: Props) {
  const pageProgress = useScrollProgress();

  return (
    <Container maxWidth="lg">
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Markdown children={data.content}/>
    </Container>
  );
}
