import { Props as SectionTitleProps, SectionTitle } from '@/components/molecules/section-title';

import { TestimonialItemProps } from './interface';
import { TestimonialList } from './testimonial-list';

export interface TemplateTestimonialProps {
  sectionTitle?: SectionTitleProps;
  items: TestimonialItemProps[];
}

export const TemplateTestimonial = (props: TemplateTestimonialProps) => {
  const { items, sectionTitle } = props;

  return (
    <section className="relative not-dark:bg-gray-50 overflow-hidden py-8 lg:py-16">
      <div className="container flex flex-col space-y-9">
        <div className="flex items-end justify-between gap-6">{sectionTitle && <SectionTitle {...sectionTitle} />}</div>
        <TestimonialList items={items} />
      </div>
    </section>
  );
};