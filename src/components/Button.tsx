const variantStyles: Record<variantButton, string> = {
  text: 'bg-blue-500 text-white',
  contained: 'bg-blue-600 text-white shadow',
  outlined: 'border border-blue-600 text-blue-600',
};
type variantButton = 'text' | 'contained' | 'outlined';

interface Buttonprops {
  variant: variantButton;
  children: React.ReactNode;
}

const Button = ({ variant, children }: Buttonprops) => {
  return (
    <>
      <button className={variantStyles[variant]}> {children}</button>
    </>
  );
};

export default Button;
