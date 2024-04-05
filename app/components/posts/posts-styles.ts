'use client';

import styled from 'styled-components';

export const PostContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 58%;
`;

export const PostSection = styled.article`
   display: flex;
   flex-direction: column;
   margin-bottom: 25rem;
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
   margin-top: 2rem;
`;

export const MainTitle = styled.h1`
   font-family: 'Impact', sans-serif;

   &.main-title-1 {
      font-size: 83px;
      margin-top: 5rem;
      padding-bottom: 1rem;
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
`;

export const H2 = styled.h2`
   font-family: 'Impact', sans-serif;
   font-size: 130px;
   margin-top: 10rem;
   line-height: 9.5rem;
`;

export const H3 = styled.h3`
   font-family: 'Impact', sans-serif;
   font-size: 70px;
   margin-top: 2rem;
   line-height: 2rem;
`;

export const H4 = styled.h4`
   font-family: 'Impact', sans-serif;
   font-size: 50px;
   margin-top: 2rem;
   line-height: 4rem;
   margin-bottom: -1rem;
`;

export const H5 = styled.h5`
   font-family: 'Impact', sans-serif;
   font-size: 30px;
   margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
   font-size: 16px;
   line-height: 2rem;
`;
