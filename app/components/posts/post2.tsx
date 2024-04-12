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

export default function Post2() {
   return (
      <>
         <PostSection id="page-4">
            <TitleContainer>
               <H4 className="big">BRO</H4>
            </TitleContainer>

            <Separator />
            <Separator />

            <PhraseContainer>
               <Phrase>nadie pudo ver que el Tiempo era una herida</Phrase>
               <Author>-FILOSOFÍA BARATA Y ZAPATOS DE GOMA</Author>
            </PhraseContainer>

            <Separator />
            <Separator />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  mamá y papá discutían en la puerta de casa
                  <Break />
                  (se estaban divorciando)
                  <Break />
                  él quería que vayamos con mi hermano a dormir a su nuevo
                  departamento
                  <Break />
                  yo no quería ir, así que me retobé en el sofá
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  mamá argumentaba según mi voluntad
                  <Break />
                  papá insistía, inofensivo pero firme
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  en eso, mi hermano, eléctrico
                  <Break />
                  me da una tremenda patada descendente en la rodilla
                  <Break />
                  y me grita
                  <Break />
                  <em>¡VAMOS, QUE POR TU CULPA ESTÁN PELEANDO!</em>
                  <Break />
                  me quedé en shock, ni siquiera lloraba
                  <Break />
                  (y en esa época hacía falta mucho menos para que yo llorara)
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  al volver en sí, no soporté tener la culpa, y, confundido,
                  cedí
                  <Break />
                  y entonces ahí sí que lloré, y lloré y lloré…
                  <Break />
                  desde el sofá de casa
                  <Break />
                  hasta la cama que papá
                  <Break />
                  me había preparado
                  <Break />
                  en el departamento
                  <Break />
                  mientras intentaba comprender
                  <Break />
                  qué le había pasado a mi hermano.
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
         </PostSection>
      </>
   );
}
