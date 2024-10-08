"use client";

import styled from "styled-components";
import { device } from "@/app/lib/breakpoints";

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and ${device.sm} {
  }
`;

export const PostSection = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ParagraphContainer = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;

  &.on-left-side {
    justify-content: flex-start;
  }
  &.on-right-side {
    justify-content: flex-end;
  }
  &.mobile {
    display: none !important;
  }
  &.desktop {
    display: flex !important;
  }
  &.answer {
    max-width: 367px;
    justify-content: end;
  }
  &.cutted {
    margin-top: -32px;
  }

  @media only screen and ${device.sm} {
    &.mobile {
      display: flex !important;
      align-items: baseline;
    }
    &.desktop {
      display: none !important;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PhraseContainer = styled.div`
  text-align: end;
`;

export const Phrase = styled.p`
  font-size: 19px;
`;

export const Author = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 19px;
  margin-top: 2.5rem;

  &.title {
    margin-top: 0;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Impact", sans-serif;

  &.main-title-1 {
    font-size: 83px;
  }
  &.main-title-2 {
    font-size: 114px;
  }
  &.main-title-3 {
    font-size: 140px;
  }
  &.main-title-4 {
    font-size: 132px;
  }

  @media only screen and ${device.sm} {
    &.main-title-1 {
      font-size: 77px;
    }
    &.main-title-2 {
      font-size: 107px;
    }
    &.main-title-3 {
      font-size: 128px;
    }
    &.main-title-4 {
      font-size: 126px;
    }
  }
`;

export const H2 = styled.h2`
  font-family: "Impact", sans-serif;
  font-size: 100px;

  &.mobile {
    display: none;
  }
  &.desktop {
    display: block;
  }

  @media only screen and ${device.sm} {
    font-size: 44px;

    &.big {
      font-size: 58px;
    }

    &.mobile {
      display: block;
    }
    &.desktop {
      display: none;
    }
  }
`;

export const H3 = styled.h3`
  font-family: "Impact", sans-serif;
  font-size: 70px;

  &.subtitle {
    font-size: 80px;
    display: inline;
  }

  @media only screen and ${device.sm} {
    font-size: 34px;

    &.subtitle {
      font-size: 36px;
      display: inline;
    }
  }
`;

export const H4 = styled.h4`
  font-family: "Impact", sans-serif;
  font-size: 50px;

  @media only screen and ${device.sm} {
    &.big {
      font-size: 52px;
    }

    &.small {
      font-size: 30px;
    }
  }
`;

export const H5 = styled.h5`
  font-family: "Impact", sans-serif;
  font-size: 30px;

  @media only screen and ${device.sm} {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-size: 17px;
  line-height: 2.2rem;
  text-align: justify;

  &.align-left {
    text-align: start;
  }
  &.align-center {
    text-align: center;
  }
  &.align-right {
    text-align: end;
  }
  &.align-justify {
    text-align: justify;
  }
  &.mobile {
    display: none;
  }
  &.desktop {
    display: block;
  }

  & span.large {
    font-size: 19px;

    &.space-xs {
      padding-left: 3px;
    }
    &.space-s {
      padding-left: 6px;
    }
    &.space-m {
      padding-left: 9px;
    }
    &.space-l {
      padding-left: 12px;
    }
    &.space-xl {
      padding-left: 16px;
    }
    &.space-xxl {
      padding-left: 20px;
    }
    &.space-b {
      padding-left: 26px;
    }
    &.space-xb {
      padding-left: 32px;
    }
    &.space-xxb {
      padding-left: 38px;
    }
    &.space-g {
      padding-left: 48px;
    }
    &.space-xg {
      padding-left: 54px;
    }
    &.space-xxg {
      padding-left: 54px;
    }
  }

  @media only screen and ${device.sm} {
    font-size: 10px;

    &.mobile {
      display: block;
    }
    &.desktop {
      display: none;
    }

    & span.large {
      font-size: 12px;

      &.space-xs {
        padding-left: 0px;
      }
      &.space-s {
        padding-left: 0px;
      }
      &.space-m {
        padding-left: 0px;
      }
      &.space-l {
        padding-left: 0px;
      }
      &.space-xl {
        padding-left: 0px;
      }
      &.space-xxl {
        padding-left: 0px;
      }
    }
  }
`;

export const Separator = styled.br`
  content: "separator";
  visibility: hidden;
  margin: 5rem 0;

  &.small {
    margin: 1rem 0;
  }

  &.mobile {
    display: none;
  }

  @media only screen and ${device.sm} {
    &.mobile {
      display: block;
    }
  }
`;

export const Break = styled.br`
  &.mobile {
    display: none;
  }
  &.desktop {
    display: block;
  }

  @media only screen and ${device.sm} {
    &.mobile {
      display: block;
    }
    &.desktop {
      display: none;
    }
  }
`;

export const TooltipButton = styled.button`
  width: fit-content;
  padding: 4px 7px;
  margin-top: 6px;
  border: 1px solid black;
  border-radius: 50%;
  align-self: center;
  font-weight: bold;

  @media only screen and ${device.sm} {
    display: none;
  }
`;
