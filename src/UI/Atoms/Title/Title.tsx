import "./Title.css";

export default function Title({type, children, variant}) {

    let className = "title-default";
    let variantClassName = "variant-default";
    
    switch (type) {
        case "XXlarge":
            className = "title-XXlarge";
            break;
        case "Xlarge":
            className = "title-Xlarge";
            break;
        case "large":
            className = "title-large";
            break;
        case "medium":
            className = "title-medium";
            break;
        case "small":
            className = "title-small";
            break;
        case "extra-small":
            className = "title-extra-small";
            break;
        default:
            className = "title-medium";
    }

    switch (variant) {
        case "primary":
            variantClassName = "variant-primary";
            break;
        case "secondary":
            variantClassName = "variant-secondary";
            break;
        case "muted":
            variantClassName = "variant-muted";
            break;
        default:
            variantClassName = "variant-primary";
    }

    return <p className={`default ${className} ${variantClassName}`} >{children}</p>


}