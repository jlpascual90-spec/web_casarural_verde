

"use client";

export function WatermarkLogo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-50 dark:opacity-0">
      <div className="w-[90vw] h-[90vh] max-w-4xl max-h-4xl relative">
        <img
          src="/dux-toledo-logo.png"
          alt=""
          className="w-full h-full object-contain filter grayscale"
          style={{
            filter: 'grayscale(0%) contrast(5%)'
          }}
        />
      </div>
    </div>
  );
}
