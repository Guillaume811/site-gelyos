declare global {
  interface Grecaptcha {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  }

  interface Window {
    gtag?: (...args: unknown[]) => void;
    grecaptcha?: Grecaptcha;
  }
}

export {};
