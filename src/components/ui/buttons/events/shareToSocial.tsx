'use client';

import { usePathname } from 'next/navigation';
import { IconLink } from '@/components/ui/links/iconLink';
import { useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

// Icons
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ShareToSocialButtonProps {
  /** Optional page title string for */
  title: string;
}
export function ShareToSocialButton({ title }: ShareToSocialButtonProps) {
  // UX variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  // Url params
  const basePath = 'http://localhost:3000';
  const currentPath = usePathname();

  // Available social media platforms with formated href params
  // todo: validate url params
  const socialMediaSites = [
    {
      title: 'Facebook',
      icon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${basePath + currentPath}`,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIcon />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${basePath + currentPath}&title=${title}`,
    },
    {
      title: 'Twitter',
      icon: <TwitterIcon />,
      href: `https://twitter.com/intent/tweet?url=${basePath + currentPath}&text=${title}`,
    },
  ];

  // todo: add a toast system?
  function handleCopyLinkClick() {
    if (navigator) {
      navigator.clipboard.writeText(basePath + currentPath);
    }
  }

  return (
    <span ref={containerRef} className='relative w-full border rounded-md'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex items-center gap-2 p-2 rounded-md text-sm bg-moss-100 hover:bg-moss-200'
      >
        <ShareIcon />
        <p className='truncate'>Del på sosial media</p>
      </button>
      <div
        className={`z-10 absolute left-0 top-full w-full mt-1 px-2 border rounded-md bg-white ${isOpen ? 'h-fit py-2' : 'h-0 opacity-0 pointer-events-none'} overflow-hidden duration-200`}
      >
        {socialMediaSites.map((site) => (
          <IconLink key={site.title} icon={site.icon} link={basePath + currentPath} label={site.title} isExternal />
        ))}
        <button className='group flex gap-2 items-center'>
          <EmailIcon />
          <p className='group-hover:underline'>Email</p>
        </button>
        <button onClick={handleCopyLinkClick} className='group flex gap-2 items-center'>
          <ContentCopyIcon />
          <p className='group-hover:underline'>Kopier link</p>
        </button>
      </div>
    </span>
  );
}
