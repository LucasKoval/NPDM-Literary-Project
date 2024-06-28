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

export default function TempPost() {
   return (
      <>
         <PostSection id="page-21">
            <TitleContainer>
               <Phrase>mi despreciado y amado lector:</Phrase>
            </TitleContainer>

            <TitleContainer>
               <MainTitle className="main-title-1">NUESTROS</MainTitle>
               <MainTitle className="main-title-2">PADRES</MainTitle>
               <MainTitle className="main-title-3">DEBEN</MainTitle>
               <MainTitle className="main-title-4">MORIR</MainTitle>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  <Break />
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
