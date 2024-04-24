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

export default function Post7() {
   return (
      <>
         <PostSection id="page-9">
            <TitleContainer>
               <H4 className="big">PILOTO</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  <Break />
               </Phrase>
               <Author></Author>
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
               <Paragraph className="align-center">
                  <Break />
                  <Break />
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
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
