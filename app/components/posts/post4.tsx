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

export default function Post4() {
   return (
      <>
         <PostSection id="page-6">
            <TitleContainer>
               <H4 className="big">MÁ</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>hacia el abismo</Phrase>
               <Phrase>de sed que no calma el agua</Phrase>
               <Phrase>ni las lágrimas</Phrase>
               <Author>-LA ESQUINA DEL INFINITO</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  yo estaba sentado en el mismo sofá
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  Mamá estaba dolida, iba y venía
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  sentí que tenía que ayudarla
                  <Break />
                  así que pensé
                  <Break />y hablé
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  ni me acuerdo qué le dije, pero
                  <Break />
                  sí entendí, para siempre
                  <Break />
                  que esa vez, le dije una verdad
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  la certeza que tengo de ello
                  <Break />
                  es el sopapo que me dio.
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
