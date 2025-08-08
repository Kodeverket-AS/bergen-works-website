import { ComponentProps, ReactNode } from 'react';
import AbcIcon from '@mui/icons-material/Abc';

interface IconTextProps extends ComponentProps<'span'> {
  /** The text you want to use */
  text: string;
  /** Optional field for styling default icon */
  textStyle?: ComponentProps<'p'>['className'];
  /** The Icon you want to use as a React component */
  icon?: ReactNode;
  /** Optional field for styling default icon */
  iconStyle?: ComponentProps<'a'>['className'];
}

/**
 * Small wrapper for creating links with icons
 *
 * Optional fields: textStyle, icon, iconStyle
 */
export function IconText({ text, icon, className, iconStyle, textStyle, ...rest }: IconTextProps) {
  return (
    <span {...rest} className={`flex gap-2 items-center ${className}`}>
      {icon ? icon : <AbcIcon className={`${iconStyle}`} />}
      <p className={`${textStyle}`}>{text}</p>
    </span>
  );
}
