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

export default function Post10() {
   return (
      <>
         <PostSection id="page-12">
            <TitleContainer>
               <H4 className="big">TITLE</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>xxx</Phrase>
               <Author>-XXX</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />

                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center"></Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />

                  <Break />

                  <Break />

                  <Break />

                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
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
