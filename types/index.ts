import { MouseEvent } from "react";

export interface MockLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}
