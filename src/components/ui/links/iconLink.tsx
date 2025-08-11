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

const PROTOCOL_RE = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

function isExternalLink(link: string): boolean {
  // Protocol links (http:, https:, mailto:, tel:, etc.)
  if (PROTOCOL_RE.test(link)) return true;

  // Internal: starts with "/" or "#"
  if (link.startsWith('/') || link.startsWith('#')) return false;

  // Internal: single word without a dot (e.g. "events", "artikler")
  if (!link.includes('.')) return false;

  // Otherwise: looks like a external link
  return true;
}

function normalizeExternal(link: string): string {
  // keep existing protocol
  if (PROTOCOL_RE.test(link)) return link;

  // scheme-relative → https
  if (link.startsWith('//')) return `https:${link}`;

  // add https:// to bare domain
  return `https://${link.replace(/^\/+/, '')}`;
}

/**
 * Small wrapper for creating links with icons, automatically detects if links are local or external
 *
 * Optional fields: label, icon, iconStyle & linkStyle
 */
export function IconLink({ icon, iconStyle, link, label, linkStyle, className, ...rest }: IconLinkProps) {
  const isExternal = isExternalLink(link);
  const href = isExternal ? normalizeExternal(link) : link;

  return (
    <span {...rest} className={`flex gap-2 items-center ${className}`}>
      {icon ? icon : <LinkIcon className={`${iconStyle}`} />}
      {isExternal ? (
        <a href={href} className={`truncate hover:underline ${linkStyle}`} target='_blank'>
          {label ?? href}
        </a>
      ) : (
        <Link href={href} className={`truncate hover:underline ${linkStyle}`}>
          {label ?? href}
        </Link>
      )}
    </span>
  );
}
