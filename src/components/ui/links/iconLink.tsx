import { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';

interface IconLinkProps extends ComponentProps<'span'> {
  /** The link you want to use */
  link: string;
  /** Optional label for the link */
  label?: string;
  /** The Icon you want to use as a React component */
  icon?: ReactNode;
  /** Optional field for styling default icon */
  iconStyle?: ComponentProps<'svg'>['className'];
  /** Optional field for defining link text styles */
  linkStyle?: ComponentProps<'a'>['className'];
}

/**
 * Detects if the given link should be treated as external or protocol-based.
 */
function isExternalOrProtocol(link: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(link);
}

/**
 * Normalizes external and protocol links.
 * - Adds https:// if it's missing on external URLs.
 * - Leaves protocol links intact.
 */
function normalizeLink(link: string): string {
  if (/^(mailto:|tel:)/i.test(link)) return link; // already protocol link
  if (/^https?:\/\//i.test(link)) return link; // already full URL
  return `https://${link.replace(/^\/+/, '')}`; // add https:// if missing
}

/**
 * Small wrapper for creating links with icons
 *
 * Optional fields: label, icon, iconStyle & linkStyle
 */
export function IconLink({ icon, iconStyle, link, label, linkStyle, className, ...rest }: IconLinkProps) {
  const externalOrProtocol = isExternalOrProtocol(link);
  return (
    <span {...rest} className={`flex gap-2 items-center ${className}`}>
      {icon ? icon : <LinkIcon className={`${iconStyle}`} />}
      {externalOrProtocol ? (
        <a href={normalizeLink(link)} className={`truncate hover:underline ${linkStyle}`} target='_blank'>
          {label ?? link}
        </a>
      ) : (
        <Link href={link} className={`truncate hover:underline ${linkStyle}`}>
          {label ?? link}
        </Link>
      )}
    </span>
  );
}
