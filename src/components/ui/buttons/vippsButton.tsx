import Image from 'next/image';
import vippsIcon from '@/assets/svg/vippsBetalMed.svg';

export default function VippsButton({ link }: { link: string }) {
  return (
    <a href={link} target='_blank' className='rounded-md bg-vipps-primary text-vipps-text'>
      <Image src={vippsIcon} alt='Betal med Vipps knapp' />
    </a>
  );
}
