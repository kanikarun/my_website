import { Image } from '@/components/atoms/image';
import { SectionTitle } from '@/components/atoms/section-title';

export interface TemplateAboutProps {
  Content: string;
  imageLight: string;
  imageDark: string;
  isHide: boolean;
  title: string;
  subtitle: string;
}

export const TemplateAbout: React.FC<TemplateAboutProps> = props => {
  const { Content, imageDark, imageLight, isHide, title, subtitle } = props;
  if (isHide) return null;

  return (
    <section className="relative overflow-hidden bg-white pt-4 dark:bg-gray-900">
      <div className="absolute -bottom-50 -left-50 h-100 w-100 rotate-45 rounded-full bg-primary-500 opacity-25 blur-3xl backdrop-opacity-0"></div>
      <div className="container relative py-10">
        <SectionTitle className="items-center text-center lg:hidden " title={title} subTitle={subtitle} />
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="col-span-1 text-center  lg:w-1/2 lg:text-start">
            <SectionTitle className="hidden lg:block" title={title} subTitle={subtitle} />
            <article
              className="z-30 pt-2 text-lg leading-8 text-gray-700 dark:text-gray-200 "
              dangerouslySetInnerHTML={{ __html: Content }}
            />
          </div>

          <div className="m-auto w-full flex items-center justify-center lg:w-1/2">
            <div className="relative mt-5 block dark:hidden lg:mt-0">
              <div className="block text-center dark:hidden lg:mt-0">
                <Image className="size-112.5 object-contain" src={imageLight} width={450} height={450} alt={title} />
              </div>
            </div>
            {/* dark mode */}
            <div className="relative mt-5 hidden dark:block lg:mt-0">
              <div className="relative hidden text-center dark:block lg:mt-0">
                <Image className="size-112.5 object-contain" src={imageDark} width={450} height={450} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};