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

export default function Post11() {
   return (
      <>
         <PostSection id="page-13">
            <TitleContainer>
               <H4 className="big">XXX</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  <Break />
               </Phrase>
               <Author>-XXX</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
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
