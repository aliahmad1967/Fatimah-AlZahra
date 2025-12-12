import { Facebook, Link as LinkIcon, Phone, Send } from "lucide-react";
import React from "react";

interface SocialShareProps {
  url: string;
  title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "واتساب",
      icon: <Phone className="w-5 h-5 rotate-90" />, // Using Phone as proxy for Whatsapp in Lucide if specific icon missing, or just simple generic
      // Actually Lucide has 'MessageCircle' or similar. Let's stick to generic or check available.
      // Standard whatsapp url: https://wa.me/?text=...
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
    },
    {
      name: "تليجرام",
      icon: <Send className="w-5 h-5" />,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#0088cc] hover:bg-[#007db1]",
    },
    {
      name: "فيسبوك",
      icon: <Facebook className="w-5 h-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#166fe5]",
    },
    // TikTok doesn't have a direct web share intent for text/links usually.
    // We will add a "Copy Link" button which is useful for all platforms including TikTok comments/bio.
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("تم نسخ الرابط بنجاح!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-fatima-gold/20 justify-center">
      <span className="w-full text-center text-fatima-teal/70 mb-2 font-kufi text-sm">
        مشاركة الموضوع:
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 shadow-md hover:shadow-lg font-kufi text-sm ${link.color}`}
          title={`مشاركة عبر ${link.name}`}
        >
          {link.icon}
          <span>{link.name}</span>
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg font-kufi text-sm"
        title="نسخ الرابط"
      >
        <LinkIcon className="w-5 h-5" />
        <span>نسخ الرابط</span>
      </button>
    </div>
  );
};
