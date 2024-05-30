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
         <PostSection id="page-17">
            <TitleContainer>
               <H4 className="big">MERESER</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>Nosotros, que derrochamos dolores.</Phrase>
               <Author>-ELEGÍAS DE DUINO</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  sólo por nacer
                  <Break />
                  nos merecemos todo
                  <Break />
                  lo que nos pasa
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
