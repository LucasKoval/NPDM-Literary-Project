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

export default function Post1() {
   return (
      <>
         <PostSection id="page-1">
            <ParagraphContainer className="on-left-side">
               <Paragraph>me despierto</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-right-side">
               <Paragraph>se siente raro, como si</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph>es hoy</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>
                  estoy al palo, y comienzo a echarme la primera paja del día
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>sin embargo, se siente como la cuarta</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>entonces la abandono</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>miro la hora y suspiro</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>me levanto y voy al baño</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>
                  al pasar por la puerta al patio, Mamá me llama, me dice{' '}
                  <em>mirá, son mis amigos</em>
                  <Break />
                  saluda a la avioneta que sobrevuela publicitando al circo que
                  vino a la ciudad
                  <Break />
                  <em>bueno, saludos</em> le digo, alegremente; entro al baño,
                  llaveo y me veo al espejo
                  <Break />
                  meo, me cepillo los dientes, me lavo la cara y, ahora sí, me
                  miro en el espejo
                  <Break />
                  salgo y le pregunto a Mamá si quiere que cocine, y me dice{' '}
                  <em>yo estoy re llena</em>
                  <Break />
                  <em>yo también</em> le digo y agrego que{' '}
                  <em>voy a hacer mis cosas</em>; ella me dice <em>perfecto</em>
                  <Break />
                  <em>hacé feliz lo tuyo, pero ordená tu pieza</em>; enciendo mi
                  equipo; suspiro otra vez
                  <Break />
                  pienso el primer triángulo, y va:{' '}
                  <em>Artaud/Oktubre/Despedazado por mil partes</em>
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>
                  pongo el agua, mientras recuerdo a mi Tía, la mejor, y rezo
                  por mi Prima, la menor (que por suerte tiene a su Padrino), y
                  sé que esto, está dedicado a Ellas
                  <Break />
                  armo el fino, pensando en qué genial es que mi Hermano
                  desarrolle la página, y sé, que es él: el original
                  destinatario de esta frase que ya casi está por salir
                  <Break />
                  armo el mate, agradeciendo a mi Viejo, que se sacrifica para
                  que yo pueda hacer lo que amo y nada más, pudiéndome comprar
                  discos y yerba y alfajores...
                  <Break />
                  voy a la ventana y fumo un par de secas, mientras rememoro el
                  consejo que me dio Mamá una vez: que empiece{' '}
                  <em>con un libro pequeño, sencillo y honesto</em>
                  <Break />
                  me tomo un mate bien verde y espumoso y celebro exageradamente
                  su sabor; y re extraño a la Primada: quiero que pasemos juntos
                  las fiestas, como antes
                  <Break />
                  abro la compu y siento a mi lado a mis ancestros, y tengo una
                  compañera que amo y tengo mis amistades que aguardan por lo
                  mío, mientras cuidan de mí,
                  <Break />
                  y yo me ausento de todos, y siento que todo lo que callo es
                  para luego escribirlo, porque si ya se lo digo a quien tengo
                  que decírselo, ¿para qué escribirlo?
                  <Break />
                  entonces me pellizco y me siento vivo, y digo en voz alta{' '}
                  <em>
                     sueño, sueñoo, estoy soñando, estoy soñandooo,
                     sueñoooooooo, esto es un sueño, estoy soñando
                  </em>
                  <Break />y digo <em>bueno...</em> y suspiro
                  <Break />y doy <em>Gracias</em>, y respiro
                  <Break />y escribo
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <MainTitle className="main-title-1">NUESTROS</MainTitle>
               <MainTitle className="main-title-2">PADRES</MainTitle>
               <MainTitle className="main-title-3">DEBEN</MainTitle>
               <MainTitle className="main-title-4">MORIR</MainTitle>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>los viejos ocultamos nuestro deseo de morirnos</Phrase>
               <Author>-EL CANTO DE AMOR A LA VIDA</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2 className="big">I</H2>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  He rezado para volver a encontrar mi infancia, y ha vuelto, y
                  siento que aún está dura como antes, y que no me ha servido de
                  nada envejecer.
               </Phrase>
               <Author>
                  -LOS CUADERNOS DE
                  <Break className="mobile" />
                  MALTE LAURIDS BRIGGE
               </Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  NIÑEZ
                  <Break />
                  O
                  <Break />
                  EL LIBRO DE LA
                  <Break />
                  CONCEPCIÓN
               </H2>
            </TitleContainer>

            <Separator className="small" />
            <Separator className="small" />
            <Separator className="small" />

            <TitleContainer>
               <H4 className="small">( 2004 )</H4>
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
               <H2>
                  COPULÆN
                  <Break />
                  SONETOS
               </H2>
               <H5>( IN, OUT )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  DIÁCORO
                  <Break />
                  <H3 className="subtitle">
                     ( ENTRE MUSAS
                     <Break /> Y DEMONIOS )
                  </H3>
               </H2>
               <H5>( MUSAS, DEMONIOS, EPODOS )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  CONTACTOS DE
                  <Break />
                  EMERGENCIA
                  <H3 className="subtitle">
                     {' '}
                     ( Ó
                     <Break />
                     TRAUMATOLOGÍA )
                  </H3>
               </H2>

               <H5>( BRO, MÁ, PÁ )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H2>
                  DOS
                  <Break />
                  PARA EL VIAJE
               </H2>
               <H5>( NAVE, PILOTO )</H5>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  Figúrate
                  <Break />
                  que no eres más un hombre
               </Phrase>
               <Author>-ALMENDRA</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />

            <TitleContainer>
               <H4>IN</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  para abandonarme
                  <Break />y renacer
               </Phrase>
               <Author>-AMOR AMARILLO</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  quiero tenerte desde el primer verso
                  <Break />
                  tranqui, relajate ya estás adentro
                  <Break />
                  no importa si no se te para el Alma
                  <Break />
                  dejála muerta, pero, porfa, no salgas
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  mi nombre es Obra
                  <Break />
                  (¿mi nombre sobra?)
                  <Break />
                  y, sí, vos me penetrás a mí
                  <Break />
                  pero yo voy a hacerte parir
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  mi Madre la Poesía; mi Padre, el Creador
                  <Break />
                  fiestón de la palabra expresa y explícita
                  <Break />
                  mete-saca, todo el fakin día y olnailong
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  sé amable, cursi, solemne y simpaticón
                  <Break />
                  toda honesta locura será lícita
                  <Break />y no te olvides: estamos haciendo el Amor.
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />
         </PostSection>

         <PostSection id="page-2">
            <TitleContainer>
               <H4 className="big">NAVE</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  -Este no es un lugar para dar paseos por placer.{' '}
                  <Break className="mobile" />
                  La Zona quiere ser respetada, sino te castigará.
               </Phrase>
               <Author>-STALKER</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  mi piloto me maneja
                  <Break />
                  -yo lo peleo cada vez que puedo, pero, al final, obedezco-
                  <Break />y lo llevo, adonde quiera ir
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  soy su nave
                  <Break />
                  sensible
                  <Break />
                  animal, impersonal
                  <Break />
                  terrible
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  él se enoja, mucho, conmigo
                  <Break />
                  reniega de mis apetitos, de mi sed
                  <Break />
                  y de mi concepto de combustible
                  <Break />y yo, pedigüeña, lo enloquezco
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-right-side">
               <Paragraph className="align-right">
                  igual, me ama
                  <Break />
                  y yo también a él
                  <Break />
                  y es mejor así
                  <Break />
                  al fin y al cabo, somos Uno
                  <Break />
                  ¡hasta que un triste día!
                  <Break />
                  mis motores ya no enciendan
                  <Break />
                  y, entonces, mi piloto, tras un merecido descanso
                  <Break />
                  me reemplace.
               </Paragraph>
            </ParagraphContainer>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />
         </PostSection>

         <PostSection id="page-3">
            <TitleContainer>
               <H4 className="big">MUSAS</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>over the rainbow, he is crazy</Phrase>
               <Author>-THE WALL</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  ¡canten conmigo, comadres!
                  <Break />
                  musas -y no madres- de Sion
                  <Break />
                  canten conmigo la canción
                  <Break />
                  y ábranle paso al Héroe
                  <Break />
                  que la espera ya es llegada
                  <Break />y nuestro canto, recepción
               </Paragraph>
            </ParagraphContainer>

            <Separator className="small" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  ¡ya és! porque será, ya és
                  <Break />
                  ¿entendés, dévil demente?
                  <Break />
                  y preciso saber: ¿si Él
                  <Break />
                  de mis manos se cayera
                  <Break />
                  tenderás o no, demonio
                  <Break />
                  tu garra en su captura?
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
