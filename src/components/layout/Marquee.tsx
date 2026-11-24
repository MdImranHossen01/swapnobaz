'use client';

import FastMarquee from 'react-fast-marquee';
import { useSettings } from '@/components/SettingsProvider';

export function Marquee({ marqueeText: initialText }: { marqueeText?: string }) {
  const settings = useSettings();
  const marqueeText =
    initialText !== undefined
      ? initialText
      : settings?.marqueeText ?? '';

  if (!marqueeText || !marqueeText.trim()) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden flex items-center font-semibold">
      <FastMarquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
      >
        <span className="mx-10 font-medium tracking-wider text-xs sm:text-sm flex items-center">
          {marqueeText}
        </span>
        <span className="mx-10 font-medium tracking-wider text-xs sm:text-sm flex items-center border-l border-primary-foreground/25 pl-10">
          {marqueeText}
        </span>
        <span className="mx-10 font-medium tracking-wider text-xs sm:text-sm flex items-center border-l border-primary-foreground/25 pl-10">
          {marqueeText}
        </span>
        <span className="mx-10 font-medium tracking-wider text-xs sm:text-sm flex items-center border-l border-primary-foreground/25 pl-10">
          {marqueeText}
        </span>
      </FastMarquee>
    </div>
  );
}

