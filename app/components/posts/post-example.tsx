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

export default function PostExample() {
   return (
      <>
         <PostSection id="page-22">
            <TitleContainer>
               <H4 className="big">XXX</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>XXX</Phrase>
               <Author>-xxx</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer className="on-left-side">
               <Paragraph className="align-left">
                  <Break />

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
