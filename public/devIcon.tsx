export function DeveloperIcon({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle
        cx="100"
        cy="45"
        r="20"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Body */}
      <rect
        x="85"
        y="65"
        width="30"
        height="40"
        rx="15"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Arms */}
      <line
        x1="85"
        y1="75"
        x2="70"
        y2="90"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="115"
        y1="75"
        x2="130"
        y2="90"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Laptop Screen */}
      <rect
        x="60"
        y="120"
        width="80"
        height="50"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Laptop Base */}
      <rect
        x="55"
        y="170"
        width="90"
        height="8"
        rx="4"
        fill="currentColor"
      />
      
      {/* Code on Screen - Opening Bracket */}
      <path
        d="M75 135 L70 145 L75 155"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Code on Screen - Closing Bracket */}
      <path
        d="M125 135 L130 145 L125 155"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Code Lines */}
      <line
        x1="85"
        y1="135"
        x2="105"
        y2="135"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="85"
        y1="145"
        x2="115"
        y2="145"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="85"
        y1="155"
        x2="95"
        y2="155"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Coffee Cup */}
      <rect
        x="150"
        y="50"
        width="12"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M162 58 Q168 58 168 64 Q168 70 162 70"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Steam from coffee */}
      <path
        d="M152 45 Q154 40 152 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M156 45 Q158 40 156 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M160 45 Q162 40 160 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Terminal Symbol */}
      <path
        d="M25 35 L30 40 L25 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="35"
        y1="45"
        x2="45"
        y2="45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}