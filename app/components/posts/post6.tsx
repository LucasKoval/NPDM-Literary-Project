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

export default function Post6() {
   return (
      <>
         <PostSection id="page-8">
            <TitleContainer>
               <H4 className="big"></H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right"></Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  <Break />
                  <Break />
                  <Break />
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  <Break />
                  <Break />
                  <Break />
                  <Break />
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />
         </PostSection>
      </>
   );
}
