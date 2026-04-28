import { Image } from "@/components/atoms/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface TemplateCTAProps {
  title: string;
  subtitle: string;
  image?: string;
  buttons: Array<{ text: string; link?: string; target?: string }>;
  variant?: "OneWorld" | "Odoo";
}

export const TemplateCTA = (props: TemplateCTAProps) => {
  const { title, subtitle, image, buttons, variant = "OneWorld" } = props;
  const isOdooVariant = variant === "Odoo";

  return (
    <div className="py-16 relative">
      {image && <Image fill src={image} alt="Image CTA" />}
      <div
        className={cn(
          "absolute top-0 size-full bg-primary mix-blend-multiply",
          {
            "bg-purple dark:bg-purple": isOdooVariant,
          },
        )}
      />
      <div className="container isolate grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-black md:text-3xl text-white">
            {title}
          </h3>
          <p className="mt-4 text-white text-lg max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex gap-3 flex-col lg:ml-auto">
          {buttons.map((item, i) => (
            <Button
              key={i}
              asChild
              size="2xl"
              variant={!i ? "secondary" : "outline"}
              className={cn("lg:min-w-xs", {
                "text-purple": isOdooVariant && !i,
              })}
            >
              <Link href={item.link || "#"} target={item.target}>
                {item.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
