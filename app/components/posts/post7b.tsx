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

export default function Post7B() {
   return (
      <>
         <PostSection id="page-10">
            <TitleContainer>
               <H4 className="big">OUT</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  me cansé de hacer cola
                  <Break />
                  para nacer
               </Phrase>
               <Author>-ACARICIANDO LO ÁSPERO</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  ay, sí, ya estás por terminar
                  <Break />
                  así que esto recién comienza
                  <Break />
                  nuestra cópula, mi poeta
                  <Break />
                  es una experiencia esférica
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  estamos creando mundos
                  <Break />
                  (¿comprendés la gravedad?)
                  <Break />
                  jévy, como tener hijos
                  <Break />
                  para no matar a tus padres
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  ay, sí, porfa, correte
                  <Break />
                  ¡salí de escena, ego!
                  <Break />
                  acá sobra el hombre
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  ay, sí, dale, acabate
                  <Break />
                  abandoná tu nombre
                  <Break />y hagamos una Obra.
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
