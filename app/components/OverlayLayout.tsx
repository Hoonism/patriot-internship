'use client';

interface OverlayLayoutProps {
  fixedContent: React.ReactNode;
  overlayContent: React.ReactNode;
}

export default function OverlayLayout({ fixedContent, overlayContent }: OverlayLayoutProps) {
  return (
    <div className="relative">
      {/* Fixed background content */}
      <div className="fixed inset-0 h-screen bg-[#1C1C1C]">
        {fixedContent}
      </div>

      {/* Spacer to position overlay content */}
      <div className="h-screen" />

      {/* Overlay content */}
      <div className="relative z-10 bg-white">
        {overlayContent}
      </div>
    </div>
  );
}
