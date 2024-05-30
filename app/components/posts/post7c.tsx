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

export default function Post7C() {
   return (
      <>
         <PostSection id="page-11">
            <TitleContainer>
               <H2 className="big">II</H2>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  -¡Eh, usted! -grité.
                  <Break />
                  El hombre empezó a temblar.
                  <Break />
                  -Una gran amenaza pesa sobre la ciudad -le dije cortésmente al
                  pasar.
               </Phrase>
               <Author>-LA NÁUSEA</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  PUBERTAD
                  <Break />
                  O
                  <Break />
                  EL LIBRO DE LA
                  <Break />
                  GESTACIÓN
               </H2>
            </TitleContainer>

            <Separator className="small" />
            <Separator className="small" />
            <Separator className="small" />

            <TitleContainer>
               <H4 className="small">( 2014 )</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H5>presenta</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>CELSIUP</H2>

               <Separator className="small" />
               <Separator className="small" />
               <Separator className="small" />

               <H5>( 37-38°C, 39-40°C, 41-42°C )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  LAS TRES
                  <Break />
                  LEYES
                  <Break />
                  DEL SER
               </H2>

               <Separator className="small" />
               <Separator className="small" />
               <Separator className="small" />

               <H5>( KERESER, MERESER, PERESER )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  BACKWARDS
                  <Break />
                  BABY-TALK
               </H2>

               <Separator className="small" />
               <Separator className="small" />
               <Separator className="small" />

               <H5>( VASECTOMY MEN, EUTHANASIA NOW )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  UNO CON
                  <Break />
                  EL EQUIPO
               </H2>

               <Separator className="small" />
               <Separator className="small" />
               <Separator className="small" />

               <H5>( EGOL, LABANDA )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  no vayas a la escuela
                  <Break />
                  porque San Martín te espera
               </Phrase>
               <Author>-AFTER CHABÓN</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />
         </PostSection>
      </>
   );
}
