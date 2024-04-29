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
                  Permíteles ser niños porque su debilidad es una gran cosa y la
                  fuerza no es nada. Cuando un hombre nace, es débil y flexible.
                  Cuando muere, es rígido e insensible. Cuando un árbol crece,
                  es tierno y dúctil, pero cuando está seco y rígido, muere.
                  Rigidez y fuerza son compañeros de la muerte. Ductilidad y
                  vulnerabilidad son las expresiones de la frescura del ser.
                  Porque lo que se ha endurecido nunca ganará.
               </Phrase>
               <Author>-STALKER</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">voy en mi nave</Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">tranquilo</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">rueda mi nave pero</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">yo vuelo</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  el viento se me regala en la cara
                  <Break />
                  porque yo salgo a buscarlo
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  todo lo demás
                  <Break />
                  simplemente
                  <Break />
                  me acontece
                  <Break />
                  y es tan complejo
                  <Break />
                  que la psiquis se acalambra
                  <Break />
                  al intentar comprenderlo
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  bueno, manos a la Obra
                  <Break />
                  dice la hormiga reina:
                  <Break />
                  quebrantar una norma de tránsito y escribir un texto a partir
                  d… okey
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  intento que se me ocurra
                  <Break />
                  la más inusual en mí
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">no sé</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  intento que se me ocurra
                  <Break />
                  que tenga repercusiones
                  <Break />
                  celestes
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  me distraen estos ruiditos
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  tengo abandonada mi nave
                  <Break />
                  tiene sus cosas (y su piloto…)
                  <Break />
                  pobre
                  <Break />
                  mi nave
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
