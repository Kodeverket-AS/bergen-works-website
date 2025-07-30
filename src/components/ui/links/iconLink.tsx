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
  iconStyle?: ComponentProps<'a'>['className'];
  /** Optional field for defining link text styles */
  linkStyle?: ComponentProps<'a'>['className'];
  /** Optional field for defining link type. Example:  */
  linkType?: 'tel' | 'mailto';
  /** Set this to true if the link is to an external adress */
  isExternal?: boolean;
}

/**
 * Small wrapper for creating links with icons
 *
 * Optional fields: label, icon, iconStyle, linkStyle & isExternal
 */
export function IconLink({
  icon,
  link,
  label,
  linkStyle,
  linkType,
  isExternal = false,
  className,
  ...rest
}: IconLinkProps) {
  return (
    <span {...rest} className={`flex gap-2 ${className}`}>
      {icon ? icon : <LinkIcon />}
      {isExternal || linkType ? (
        <a href={`${linkType ? linkType + ':' : ''}${link}`} className={`truncate hover:underline ${linkStyle}`}>
          {label ? label : link}
        </a>
      ) : (
        <Link href={link} className={`truncate hover:underline ${linkStyle}`}>
          {label ? label : link}
        </Link>
      )}
    </span>
  );
}
