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

  interface FormspreeResponse {
    ok: boolean;
    next: string;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      VERCEL_URL?: string;
      FORMSPREE_ENDPOINT?: string;
      NEXT_PUBLIC_ANALYTICS_ID?: string;
    }
  }
}

export {};