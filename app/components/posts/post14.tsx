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

export default function Post14() {
   return (
      <>
         <PostSection id="page-18">
            <TitleContainer>
               <H4 className="big">EUTHANASIA NOW</H4>
            </TitleContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <PhraseContainer>
               <Phrase>pack up your light</Phrase>
               <Author>-PSYENCE FICTION</Author>
            </PhraseContainer>

            <Separator />
            <Separator />
            <Separator className="mobile" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  euthanasia now
                  <Break />
                  I can show you how
                  <Break />
                  die is supreme law
                  <Break />
                  just like go to sleep
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        euthanasia now
                        <Break />
                        I can show you how
                        <Break />
                        die is supreme law
                        <Break />
                        just like go to sleep
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  euthanasia now
                  <Break />
                  it’s no more than a nap
                  <Break />
                  with nothing you’ll keep
                  <Break />
                  just your soul to restart
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        euthanasia now
                        <Break />
                        it’s no more than a nap
                        <Break />
                        with nothing you’ll keep
                        <Break />
                        just your soul to restart
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
            >
               <TooltipButton>?</TooltipButton>
            </Tooltip>

            <Separator className="small" />

            <ParagraphContainer>
               <Paragraph className="align-center">
                  euthanasia now
                  <Break />
                  how it’s not allowed?
                  <Break />
                  they give you just two choices
                  <Break />
                  pain or hell for suicides.
               </Paragraph>
            </ParagraphContainer>
            <Tooltip
               content={
                  <ParagraphContainer>
                     <Paragraph className="align-center">
                        euthanasia now
                        <Break />
                        how it’s not allowed?
                        <Break />
                        they give you just two choices
                        <Break />
                        pain or hell for suicides.
                     </Paragraph>
                  </ParagraphContainer>
               }
               placement="top"
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
