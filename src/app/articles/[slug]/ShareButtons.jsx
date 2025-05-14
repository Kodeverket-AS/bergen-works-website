import { Facebook, Twitter, Linkedin } from 'lucide-react';

const ShareButtons = ({ title, url }) => {
  const encodeUrl = encodeURIComponent(url);
  const encodeTitle = encodeURIComponent(title);

  return (
    <div className="flex justify-start space-x-4 mt-6">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-moss-500 text-white hover:bg-moss-700"
      >
        <Facebook className="w-6 h-6" />
      </a>
      
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeUrl}&text=${encodeTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-moss-500 text-white hover:bg-moss-700"
      >
        <Twitter className="w-6 h-6" />
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeUrl}&title=${encodeTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-moss-500 text-white hover:bg-moss-700"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ShareButtons;
