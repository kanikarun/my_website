import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NextImage from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface CarouselItemProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  image: string | StaticImport;
  buttons?: Array<{ text: string; link: string; target?: "_blank" }>;
  metrics?: MetricProps[];
  theme?: "OneWorld" | "Odoo";
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { tagline, title, subtitle, image, buttons, metrics, theme } = props;
  const isOdooTheme = theme === "Odoo";

  return (
    <div className="relative min-h-dvh">
      <NextImage src={image} alt="Background" fill className="object-cover" />
      <div
        className={cn("absolute bg-navy-blue mix-blend-multiply size-full", {
          "bg-purple": isOdooTheme,
        })}
      />
      <div className="isolate container flex flex-col min-h-dvh pt-24 pb-16 space-y-16">
        <div className="grow flex items-center">
          <div className="space-y-6">
            {Boolean(tagline) && (
              <Badge
                className={cn(
                  "h-fit text-base sm:text-lg px-4 bg-transparent border-primary rounded-sm text-primary whitespace-pre-wrap",
                  { "border-teal text-teal": isOdooTheme },
                )}
              >
                {tagline}
              </Badge>
            )}
            <h1 className="block font-black text-white text-3xl lg:text-5xl lg:leading-tight">
              {title}
            </h1>
            <p className="text-gray-300  sm:text-base md:max-w-2xl md:text-lg">
              {subtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              {buttons?.map((x, i) => (
                <Button
                  key={`button-${i}`}
                  className={cn("grow sm:grow-0", {
                    "bg-white text-purple hover:bg-white/80": isOdooTheme && !i,
                  })}
                  size="2xl"
                  variant={!i ? "default" : "outline"}
                  asChild
                >
                  <Link href={x.link || "#"} target={x.target}>
                    {x.text}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Metrics data={metrics} />
      </div>
    </div>
  );
};

interface MetricProps {
  label: string;
  value: string;
  type: "text" | "image";
}

const Metrics: React.FC<{ data?: MetricProps[] }> = ({ data }) => {
  if (!data?.length) return null;

  return (
    <div className="text-white flex lg:justify-evenly items-end flex-wrap lg:gap-0 gap-y-10">
      {data.map((x) => {
        if (x.type === "image")
          return <StatImage key={x.label} label={x.label} src={x.value} />;
        return <StatText key={x.label} label={x.label} value={x.value} />;
      })}
    </div>
  );
};

interface StatContainerProps extends React.PropsWithChildren {
  label: string;
  className?: string;
}

const StatContainer: React.FC<StatContainerProps> = ({
  children,
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-4 size-full flex flex-col basis-1/2 lg:basis-1/4 [&:nth-child(2n-1):not(:last-child)]:border-r lg:not-last:border-r",
        className,
      )}
    >
      {children}
      <label className="text-sm md:text-lg text-center">{label}</label>
    </div>
  );
};

const StatText: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <StatContainer label={label}>
      <p className="text-3xl sm:text-4xl text-center">{value}</p>
    </StatContainer>
  );
};

const StatImage: React.FC<{ label: string; src: string | StaticImport }> = ({
  label,
  src,
}) => {
  return (
    <StatContainer label={label} className="space-y-2 size-full items-center">
      <NextImage
        className="object-contain"
        src={src}
        alt={label}
        width={120}
        height={90}
      />
    </StatContainer>
  );
};
