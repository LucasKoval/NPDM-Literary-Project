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
} from './posts-styles';

export default function Post1() {
   return (
      <>
         <PostSection id="page-1">
            <ParagraphContainer className="on-left-side">
               <Paragraph>me despierto</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-right-side">
               <Paragraph>se siente raro</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph>como si es hoy</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>
                  estoy al palo, y comienzo a hacerme la primera paja del día
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>sin embargo, se siente como la quinta</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>y entonces la abandono.</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>suspiro</Paragraph>
            </ParagraphContainer>

            <ParagraphContainer className="on-left-side">
               <Paragraph>
                  miro la hora y no está amaneciendo; soñé todo el día; me
                  levanto de un salto
                  <br />
                  en la cocina me cruzo a Mamá, que me dice, contenta,{' '}
                  <em>son mis amigos, mirá </em> y vuelve al patio y, eufórica,
                  saluda, hacia arriba, a un helicóptero que pasa
                  <em> bueno</em> le digo alegremente, y voy al baño, meo, me
                  aseo y me veo al espejo salgo y le pregunto a Mamá si quiere
                  que cocine y me dice <em> yo estoy re llena </em> sigo
                  entonces sin detenerme hasta mi pieza mientras le contesto
                  <em> yo también voy a hacer mis cosas </em> agrego, y ella
                  <em> hacé tus cosas feliz, pero ordená tu pieza </em> elijo la
                  primera tríada; está nublado: va
                  <em> Animals/Disintigration/Ok Computer</em>
                  <br />
                  pongo el agua, mientras recuerdo a mi Tía, la mejor, y rezo
                  por mi Prima (que por suerte tiene a su Padrino), y sé que
                  esto, está dedicado a Ellas
                  <br />
                  armo el fino, mientras pienso en cuan genial es que mi Hermano
                  desarrolle la página, y sé, que es él: el original
                  destinatario de la frase
                  <br />
                  armo el mate y siento que mi Viejo es mi Héroe, por bancarme y
                  proveerme, para que haga lo que tengo que hacer, pudiéndome
                  comprar discos y yerba y alfajores
                  <br />
                  me siento, le doy mecha, páh-páh, y recupero lo que Mamá me
                  dijo, que comience
                  <em> con un libro pequeño, sencillo y honesto</em>
                  <br />
                  me cebo unos bien verdes y espumosos, y celebro exageradamente
                  el sublime sabor de mi mate, y extraño tanto a la primada
                  ¡quiero tanto que pasemos juntos las fiestas, como antes!
                  <br />
                  abro la compu y siento a mi alrededor a los míos, y tengo un
                  amor y amistades que aguardan por lo mío, mientras me cuidan,
                  y es para homenajear eso, que hago esto
                  <br />
                  me pellizco, y entonces digo en voz alta
                  <em>
                     {' '}
                     sueño, sueñoo, estoy soñando, estoy soñando, sueñooooooo…
                  </em>
                  <br />
                  digo <em> bueno </em> y respiro
                  <br />
                  doy <em> Gracias </em> y respiro
                  <br />y escribo
               </Paragraph>
            </ParagraphContainer>

            <TitleContainer>
               <MainTitle className="main-title-1">NUESTROS</MainTitle>
               <MainTitle className="main-title-2">PADRES</MainTitle>
               <MainTitle className="main-title-3">DEBEN</MainTitle>
               <MainTitle className="main-title-4">MORIR</MainTitle>
            </TitleContainer>
         </PostSection>

         <PostSection id="page-2">
            <PhraseContainer>
               <Phrase>Los viejos ocultamos nuestro deseo de morirnos</Phrase>

               <Author>-EL CANTO DE AMOR A LA VIDA</Author>
            </PhraseContainer>

            <TitleContainer>
               <H2>I</H2>
            </TitleContainer>
         </PostSection>

         <PostSection id="page-3">
            <PhraseContainer>
               <Phrase className="phrase-line">
                  He rezado para volver a encontrar mi infancia, y ha vuelto, y
                  siento que aún está dura como antes, y que no me ha servido de
                  nada envejecer.
               </Phrase>

               <Author className="author-line">
                  -LOS CUADERNOS DE MALTE LAURIDS BRIGGE
               </Author>
            </PhraseContainer>

            <PhraseContainer>
               <Phrase className="phrase-line">
                  Figúrate que no eres más un hombre
               </Phrase>
               <Author className="author-line">-ALMENDRA</Author>
            </PhraseContainer>

            <TitleContainer>
               <H2>NIÑEZ</H2>
            </TitleContainer>

            <TitleContainer>
               <H2>O EL LIBRO DE LA CONCEPCIÓN</H2>
            </TitleContainer>

            <TitleContainer>
               <H3>(2004)</H3>
            </TitleContainer>
         </PostSection>

         <PostSection id="page-4">
            <TitleContainer>
               <H4>COPULÆN SONETOS</H4>
               <H5>(IN, OUT)</H5>
            </TitleContainer>

            <TitleContainer>
               <H4>DOS PARA EL VIAJE</H4>
               <H5>(NAVE, PILOTO)</H5>
            </TitleContainer>

            <TitleContainer>
               <H4>
                  DIÁCORO ENTRE MUSAS <br /> Y DEMONIOS
               </H4>
               <H5>(MUSAS, DEMONIOS, EPODOS)</H5>
            </TitleContainer>

            <TitleContainer>
               <H4>
                  CONTACTOS DE <br /> EMERGENCIA O <br /> TRAUMATOLOGÍA
               </H4>
               <H5>(BRO, MÁ, PÁ)</H5>
            </TitleContainer>

            <TitleContainer>
               <H4>IN</H4>
            </TitleContainer>
         </PostSection>

         <PostSection id="page-5">
            <PhraseContainer>
               <Phrase className="phrase-line">
                  Para abandonarme y renacer
               </Phrase>
               <Author className="author-line">-AMOR AMARILLO</Author>
            </PhraseContainer>

            <ParagraphContainer>
               <Paragraph>
                  quiero tenerte desde el primer verso tranqui, relajate ya
                  estás adentro no importa si no se te para el Alma dejála
                  muerta, pero, porfa, no salgas
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph>
                  mi nombre es Obra (¿mi nombre sobra?) y, sí, vos me penetrás a
                  mí pero yo voy a hacerte parir
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph>
                  mi Madre la Poesía; mi Padre, el Creador fiestón de la palabra
                  expresa y explícita mete-saca, todo el fakin día y olnailong
               </Paragraph>
            </ParagraphContainer>

            <ParagraphContainer>
               <Paragraph>
                  sé amable, cursi, solemne y simpaticón toda honesta locura
                  será lícita y no te olvides: estamos haciendo el Amor.
               </Paragraph>
            </ParagraphContainer>
         </PostSection>
      </>
   );
}
