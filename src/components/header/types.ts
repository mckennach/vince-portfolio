import type {
  LayoutDocument,
  LayoutDocumentData,
  Simplify,
} from "@/prismicio-types";
import type { FieldState, LinkField } from "@prismicio/client";

export type HeaderProps = LayoutDocument<string> & {
  className?: string;
};

export type HeaderPanelProps = {
  data: Simplify<LayoutDocumentData>;
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
};

export type NavItemProps = {
  field: LinkField<string, string, unknown, FieldState, never>;
  label?: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
  index?: number;
};

export type HeaderOverlayProps = {
  isOpen: boolean;
  onClick: () => void;
};

export type HeaderLogoProps = {
  isOpen: boolean;
  onClick: () => void;
};

export type HeaderToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};
