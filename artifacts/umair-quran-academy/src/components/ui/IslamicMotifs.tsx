export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full my-8 ${className}`}>
      <div className="h-[1px] flex-1 bg-accent/20"></div>
      <div className="w-2 h-2 rotate-45 bg-accent mx-4"></div>
      <div className="h-[1px] flex-1 bg-accent/20"></div>
    </div>
  );
}

export function CrescentStar({ className = '' }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`text-accent ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C7.03 2 3 6.03 3 11C3 15.97 7.03 20 12 20C12.83 20 13.62 19.89 14.37 19.68C10.74 18.79 8 15.48 8 12C8 8.1 11.2 4.97 15.17 4.14C14.16 3.42 13.12 3 12 3V2ZM16 7L17.26 9.54L20 10L18.06 12L18.42 14.71L16 13.56L13.58 14.71L13.94 12L12 10L14.74 9.54L16 7Z"/>
    </svg>
  );
}

export function ArchMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`text-accent/30 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 110V50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50V110" />
      <path d="M20 110V50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50V110" />
    </svg>
  );
}
