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

export default function Post3() {
   return (
      <>
         <PostSection id="page-5">
            <TitleContainer>
               <H4 className="big">DEMONIOS</H4>
            </TitleContainer>

            <Separator />
            <Separator />

            <PhraseContainer>
               <Phrase>God loves his children</Phrase>
               <Author>-OK COMPUTER</Author>
            </PhraseContainer>

            <Separator />
            <Separator />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  ¡¡¡LEGIÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓÓN!!!
                  <Break />
                  bailen en el lugar, Legión
                  <Break />
                  ¡y finjan poner atención!
                  <Break />
                  salieron las ninfas de Sión
                  <Break />
                  con que llega el Elegido
                  <Break />
                  con que llega el Elegido
                  <Break />
                  dejarlas sin contestación
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  ¡nos importa un cuerno, perras!
                  <Break />
                  vamos por ahí más vale
                  <Break />
                  a mover bien los rabos y
                  <Break />
                  a olernos bien nuestros culos
                  <Break />
                  nada más no se enamoren…
                  <Break />
                  y ahora bien, la cuestión no es
                  <Break />
                  “si cayera”, sino “cuándo”
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
         </PostSection>
      </>
   );
}
