import "./Title.css";

function getClassName(type: string) {
  switch (type) {
    case "XXlarge":
      return "title-XXlarge";
    case "Xlarge":
      return "title-Xlarge";
    case "large":
      return "title-large";
    case "medium":
      return "title-medium";
    case "small":
      return "title-small";
    case "extra-small":
      return "title-extra-small";
    default:
      return "title-medium";
  }
}

function getVariantClassName(variant: string) {
  switch (variant) {
    case "primary":
      return "variant-primary";
    case "secondary":
      return "variant-secondary";
    case "muted":
      return "variant-muted";
    default:
      return "variant-primary";
  }
}

export default function Title({
  type,
  children,
  variant,
}: {
  type: string;
  children: React.ReactNode;
  variant: string;
}) {
  const className = getClassName(type);
  const variantClassName = getVariantClassName(variant);

  return <p className={` ${className} ${variantClassName}`}>{children}</p>;
}
