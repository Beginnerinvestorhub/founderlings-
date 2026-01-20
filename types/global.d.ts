// types/global.d.ts
declare global {
  interface FounderlingSubmission {
    email: string;
    why?: string;
    timestamp: string;
  }
  
  interface FounderlingStats {
    count: number;
    total: number;
    percentFilled: number;
    spotsRemaining: number;
  }
}

export {};