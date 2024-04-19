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
               <H4 className="big">EPODOS</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  oh, I’m gonna buy this place and start a fire
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  y te digo más: si no se te cae
                  <Break />
                  ¡¡¡empujálo!!! (corea al unísono la legión)
                  <Break />
                  y si hace calor, Él
                  <Break />
                  ¡¡¡que arda!!! (gritan mil demonios)
                  <Break />
                  y que, en la caída de la desintegración, aprenda
                  <Break />
                  que ni subiendo ni naciendo arriba se desaprende nada
                  <Break />
                  solamente cayendo, al mejor estilo Altazor
                  <Break />
                  y sin cesar la danza, oh, Legión
                  <Break />
                  nosotros nos vamos a ir yendo
                  <Break />
                  que, por estos lados, puro blablá
                  <Break />y naditas de acción.
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  enemigo de la pureza y de todo lo inocente en la Tierra
                  <Break />
                  no son buenas las frases con malas palabras
                  <Break />
                  ni sostienen lo que dicen quienes se van en plena réplica
                  <Break />
                  adivino, cobarde, en tu prisa un temor
                  <Break />
                  temblor te provoca la idea de ser mejor
                  <Break />
                  mírenlos, comadres, mírenlos huir
                  <Break />
                  tan felices, sin siquiera imaginarse
                  <Break />
                  que el espía que aún ni arrojamos en su cama
                  <Break />
                  ya tiene ganada su confianza.
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
