"use client";

import { styled } from "@mui/material";

import { TEXT_CAPTIONS_DARK_COLOR, TEXT_CAPTIONS_LIGHT_COLOR } from "src/config-global";

const FigcaptionStyled = styled("figcaption")(({ theme }) => ({
  textAlign: "center",
  fontStyle: "italic",
  color:
    theme.palette.mode === "light"
      ? TEXT_CAPTIONS_LIGHT_COLOR
      : TEXT_CAPTIONS_DARK_COLOR,
  marginTop: "1rem",
}));

export { FigcaptionStyled };
