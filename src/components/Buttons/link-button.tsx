import Link from "next/link";
import { standard } from "./styles";

export default function LinkButton({ children, className, ...props }: any) {
  const linkClassNames = `${standard} ${className || ''}`

  return (
    <Link {...props} className={linkClassNames}>
      {children}
    </Link>
  );
}
