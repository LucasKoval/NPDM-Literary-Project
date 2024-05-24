import { Tooltip } from '@nextui-org/tooltip';
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
   TooltipButton,
} from './posts-styles';

export default function Post13() {
   return (
      <>
         <PostSection id="page-15">
            <TitleContainer>
               <H4 className="big">VASECTOMY MEN</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>
                  living here in Babylon is
                  <Break />
                  oh, so dificult
               </Phrase>
               <Author>-DIVIDIDOS POR LA FELICIDAD</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  we are the vasectomy men
                  <Break />
                  man, we don’t understand
                  <Break />
                  why d’you prefer to being
                  <Break />a slave than a free man
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        we are the vasectomy men
                        <Break />
                        man, we don’t understand
                        <Break />
                        why d’you prefer to being
                        <Break />a slave than a free man
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
               css={{
                  background: 'white',
                  color: 'black',
               }}
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  cut your wires, my brother
                  <Break />
                  don’t jeopardize your freedom
                  <Break />
                  live this life like it’s the only one
                  <Break />
                  but knowing deeply that it’s not
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        cut your wires, my brother
                        <Break />
                        don’t jeopardize your freedom
                        <Break />
                        live this life like it’s the only one
                        <Break />
                        but knowing deeply that it’s not
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
               css={{
                  background: 'white',
                  color: 'black',
               }}
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  you will have many many lives
                  <Break />
                  and you already had them so many,
                  <Break />
                  so this life of today, use it to live it
                  <Break />
                  by and for you, and you only
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        you will have many many lives
                        <Break />
                        and you already had them so many,
                        <Break />
                        so this life of today, use it to live it
                        <Break />
                        by and for you, and you only
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
               css={{
                  background: 'white',
                  color: 'black',
               }}
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  you were a terrible dad before
                  <Break />
                  and you will be a great dad after,
                  <Break />
                  but now you need to be yourself:
                  <Break />
                  father of nothing, son of Everything.
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        you were a terrible dad before
                        <Break />
                        and you will be a great dad after,
                        <Break />
                        but now you need to be yourself:
                        <Break />
                        father of nothing, son of Everything.
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
               css={{
                  background: 'white',
                  color: 'black',
               }}
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator />
            <Separator />
            <Separator />
            <Separator className="mobile" />
         </PostSection>
      </>
   );
}
