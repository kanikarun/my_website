export interface SectionTitleProps {
  title?: string;
  subTitle?: string;
  description?: string;
  className?: string;
  dark?: boolean;
  light?: boolean;
  variant?: 'h1';
}

/**
 * @deprecated
 */
export const SectionTitle: React.FC<SectionTitleProps> = props => {
  const { title, subTitle, description, className, dark, light, variant } = props;

  return (
    <div className={`${className} flex flex-col`}>
      {/* checking for seo h1 */}
      {variant === 'h1' ? (
        <h1 className={`mb-3 text-lg font-bold text-primary-500 lg:text-2xl`}>{title}</h1>
      ) : (
        <h2 className={`mb-3 text-lg font-bold text-primary-500 lg:text-2xl`}>{title}</h2>
      )}
      {/* checking color text  */}
      {dark || light ? (
        <div className={`${dark ? 'text-black' : 'text-white'}`}>
          <h3 className={`mb-3! text-2xl font-bold lg:max-w-4xl lg:text-4xl`}>{subTitle}</h3>
          <span className={`max-w-2xl`}>{description}</span>
        </div>
      ) : (
        <div className="z-20 text-black dark:text-white">
          <h3 className={`mb-3 max-w-4xl text-2xl font-bold lg:text-4xl`}>{subTitle}</h3>
          <span className={`max-w-2xl`}>{description}</span>
        </div>
      )}
    </div>
  );
};