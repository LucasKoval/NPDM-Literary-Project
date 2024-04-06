'use client';

import styled from 'styled-components';
import { device } from '@/app/lib/breakpoints';

export const PostContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 550px;
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
   display: flex;
   justify-content: center;
   align-items: center;

   &.on-left-side {
      justify-content: flex-start;
   }

   &.on-right-side {
      justify-content: flex-end;
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
   font-size: 26px;
   font-weight: bold;
`;

export const Author = styled.p`
   font-family: 'Times New Roman', Times, serif;
   font-size: 20px;
   margin-top: 1.5rem;
`;

export const MainTitle = styled.h1`
   font-family: 'Impact', sans-serif;

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
         font-size: 75px;
      }
      &.main-title-2 {
         font-size: 106px;
      }
      &.main-title-3 {
         font-size: 132px;
      }
      &.main-title-4 {
         font-size: 126px;
      }
   }
`;

export const H2 = styled.h2`
   font-family: 'Impact', sans-serif;
   font-size: 100px;

   @media only screen and ${device.sm} {
      font-size: 50px;
   }
`;

export const H3 = styled.h3`
   font-family: 'Impact', sans-serif;
   font-size: 70px;

   @media only screen and ${device.sm} {
      font-size: 44px;
   }
`;

export const H4 = styled.h4`
   font-family: 'Impact', sans-serif;
   font-size: 50px;
`;

export const H5 = styled.h5`
   font-family: 'Impact', sans-serif;
   font-size: 30px;

   @media only screen and ${device.sm} {
      font-size: 26px;
   }
`;

export const Paragraph = styled.p`
   font-size: 16px;
   line-height: 2rem;
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
`;

export const Separator = styled.br`
   content: 'separator';
   visibility: hidden;
   margin: 5rem 0;

   &.small {
      margin: 1rem 0;
   }
`;

export const Break = styled.br`
   &.mobile {
      display: none;
   }

   @media only screen and ${device.sm} {
      &.mobile {
         display: block;
      }
   }
`;
