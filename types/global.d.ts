// types/global.d.ts
declare global {
  // Founderlings form submission type
  interface FounderlingSubmission {
    email: string;
    why?: string;
    timestamp: string;
  }

  // Founderlings progress stats
  interface FounderlingStats {
    count: number;
    total: number;
    percentFilled: number;
    spotsRemaining: number;
  }

  // Formspree response
  interface FormspreeResponse {
    ok: boolean;
    next: string;
  }

  // Environment variables (optional but helpful)
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      FORMSPREE_ENDPOINT?: string;
      NEXT_PUBLIC_ANALYTICS_ID?: string;
    }
  }
}

export {}; // Important: This makes it a module