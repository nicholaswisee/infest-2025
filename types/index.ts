import { MouseEvent } from "react";

export interface MockLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}
