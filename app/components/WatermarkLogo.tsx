

"use client";

export function WatermarkLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20 dark:opacity-0">
      <div className="w-[80vw] h-[80vh] max-w-4xl max-h-4xl relative">
        <img
          src="/dux-toledo-logo.png"
          alt=""
          className="w-full h-full object-contain filter grayscale"
          style={{
            filter: 'grayscale(100%) contrast(20%)'
          }}
        />
      </div>
    </div>
  );
}
