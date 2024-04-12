import {
   PostSection,
   ParagraphContainer,
   TitleContainer,
   PhraseContainer,
   Phrase,
   Author,
   MainTitle,
   H2,
   H3,
   H4,
   H5,
   Paragraph,
   Separator,
   Break,
} from './posts-styles';

export default function Post5() {
   return (
      <>
         <PostSection id="page-7">
            <TitleContainer>
               <H4 className="big"></H4>
            </TitleContainer>

            <Separator />
            <Separator />

            <PhraseContainer>
               <Phrase></Phrase>
               <Author></Author>
            </PhraseContainer>

            <Separator />
            <Separator />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
         </PostSection>
      </>
   );
}