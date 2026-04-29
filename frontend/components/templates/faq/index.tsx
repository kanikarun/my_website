import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export interface TemplateFaqProps {
  sectionTitle?: SectionTitleProps;
  data: {
    question: string;
    answer: string;
  }[];
}

export const TemplateFaq = ({ sectionTitle, data }: TemplateFaqProps) => {
  return (
    <div className="not-dark:bg-gray-50 py-8 md:py-16">
      <div className="container space-y-9">
        {sectionTitle && <SectionTitle {...sectionTitle} />}
        <Accordion type="single" collapsible className="space-y-3 md:space-y-4" defaultValue="item-0">
          {data.map((x, i) => {
            return (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card dark:bg-navy-blue/50 border px-4 rounded-md"
              >
                <AccordionTrigger className="text-base  sm:text-lg font-semibold hover:no-underline hover:cursor-pointer">
                  {x.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:text-white/50 prose-base sm:prose-lg" dangerouslySetInnerHTML={{ __html: x.answer }} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};