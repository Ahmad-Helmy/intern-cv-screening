import "./Title.css";

type TitleProps = {
    type: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'x-small';
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'muted';
};

export default function Title({type = 'medium', children, variant = 'primary'}: TitleProps) {

    return <p className={`default title-${type} variant-${variant}`} >{children}</p>

}
