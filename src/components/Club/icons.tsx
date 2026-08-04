import { Box } from "@mui/material";

export function ChevronDownIcon({ color = "#9A9A9A", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronUpIcon({ color = "#F26822", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M12 10L8 6L4 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ color = "#9A9A9A", size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M8.5 3L4.5 7L8.5 11" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M15.75 2.25L8.4375 9.5625" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.75 2.25L10.875 15.75L8.4375 9.5625L2.25 7.125L15.75 2.25Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="6" y="6" width="9" height="9" rx="1.5" stroke="white" strokeWidth="1.4" />
      <path d="M12 6V4.5C12 3.67157 11.3284 3 10.5 3H4.5C3.67157 3 3 3.67157 3 4.5V10.5C3 11.3284 3.67157 12 4.5 12H6" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

export function HistoryUserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5.5" r="2.5" stroke="#F26822" strokeWidth="1.3" />
      <path d="M3.5 13.5C3.5 11.0147 5.51472 9 8 9C10.4853 9 12.5 11.0147 12.5 13.5" stroke="#F26822" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function CoinsIcon({ size = 28 }: { size?: number }) {
  return (
    <Box sx={{ width: size, height: size, flexShrink: 0, lineHeight: 0 }}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <ellipse cx="12" cy="20" rx="7" ry="7" fill="#F2B72E" stroke="#D4941A" strokeWidth="1" />
        <ellipse cx="12" cy="20" rx="4.5" ry="4.5" fill="none" stroke="#E8A820" strokeWidth="1" />
        <ellipse cx="20" cy="14" rx="7" ry="7" fill="#F5C84A" stroke="#D4941A" strokeWidth="1" />
        <ellipse cx="20" cy="14" rx="4.5" ry="4.5" fill="none" stroke="#E8A820" strokeWidth="1" />
        <ellipse cx="22" cy="22" rx="6.5" ry="6.5" fill="#E8A820" stroke="#C48410" strokeWidth="1" />
        <ellipse cx="22" cy="22" rx="4" ry="4" fill="none" stroke="#D4941A" strokeWidth="1" />
      </svg>
    </Box>
  );
}

export function PercentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5.5" cy="5.5" r="2" stroke="#F26822" strokeWidth="1.4" />
      <circle cx="12.5" cy="12.5" r="2" stroke="#F26822" strokeWidth="1.4" />
      <path d="M13.5 4.5L4.5 13.5" stroke="#F26822" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LotteryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="#F26822" strokeWidth="1.3" />
      <circle cx="9" cy="9" r="2" fill="#F26822" />
      <path d="M9 2.5V4.5M9 13.5V15.5M2.5 9H4.5M13.5 9H15.5" stroke="#F26822" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function RocketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9.5 2.5C11.5 3.5 13.5 6 14 9.5L11.5 12L9.5 10L7.5 12L5 9.5C5.5 6 7.5 3.5 9.5 2.5Z" stroke="#F26822" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5 12.5L3.5 15.5L6.5 14" stroke="#F26822" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.5" cy="7" r="1" fill="#F26822" />
    </svg>
  );
}

export function BackArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M8.5 3L4.5 7L8.5 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="8" cy="8" r="5.5" stroke="#9A9A9A" strokeWidth="1.4" />
      <path d="M12.5 12.5L15.5 15.5" stroke="#9A9A9A" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SignalIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
      <rect x="0" y="9" width="3" height="5" rx="0.6" fill="#E53935" />
      <rect x="5" y="6" width="3" height="8" rx="0.6" fill="#F26822" />
      <rect x="10" y="3" width="3" height="11" rx="0.6" fill="#F5A623" />
      <rect x="15" y="0" width="3" height="14" rx="0.6" fill="#E8C547" />
    </svg>
  );
}
