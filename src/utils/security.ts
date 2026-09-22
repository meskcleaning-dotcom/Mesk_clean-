/**
 * Website Security & Anti-Spam utilities for Mesk Clean
 */

export interface MathChallenge {
  num1: number;
  num2: number;
  questionAr: string;
  questionEn: string;
  expectedAnswer: number;
}

export const generateMathChallenge = (): MathChallenge => {
  const num1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
  const num2 = Math.floor(Math.random() * 7) + 1; // 1 to 7
  return {
    num1,
    num2,
    questionAr: `ما هو ناتج: ${num1} + ${num2} ؟`,
    questionEn: `Security Check: What is ${num1} + ${num2}?`,
    expectedAnswer: num1 + num2,
  };
};

/**
 * Sanitize text inputs against XSS and HTML injection
 */
export const sanitizeInput = (input: string, maxLength: number = 300): string => {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // remove direct tags
    .slice(0, maxLength);
};

/**
 * Validate Saudi mobile phone numbers
 * e.g. 05XXXXXXXX, 9665XXXXXXXX, +9665XXXXXXXX
 */
export const validateSaudiPhone = (phone: string): { isValid: boolean; normalized: string; errorMsgAr: string; errorMsgEn: string } => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');

  // Check valid patterns
  const saudiRegex = /^(05|5|\+9665|009665|9665)[0-9]{8}$/;
  if (!saudiRegex.test(cleaned)) {
    return {
      isValid: false,
      normalized: cleaned,
      errorMsgAr: 'يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام.',
      errorMsgEn: 'Please enter a valid Saudi mobile number (e.g., 05XXXXXXXX).'
    };
  }

  // Normalize to 05XXXXXXXX
  let normalized = cleaned;
  if (normalized.startsWith('+966')) normalized = '0' + normalized.substring(4);
  else if (normalized.startsWith('00966')) normalized = '0' + normalized.substring(5);
  else if (normalized.startsWith('966')) normalized = '0' + normalized.substring(3);
  else if (normalized.startsWith('5')) normalized = '0' + normalized;

  return {
    isValid: true,
    normalized,
    errorMsgAr: '',
    errorMsgEn: ''
  };
};

/**
 * Client-side submission rate limiter (prevents rapid spam blasts within 30s)
 */
export const checkRateLimit = (actionKey: string = 'booking_request', minCooldownSec: number = 30): boolean => {
  try {
    const storageKey = `rate_limit_${actionKey}`;
    const lastTimeStr = localStorage.getItem(storageKey);
    const now = Date.now();

    if (lastTimeStr) {
      const lastTime = parseInt(lastTimeStr, 10);
      const elapsed = (now - lastTime) / 1000;
      if (elapsed < minCooldownSec) {
        return false; // rate limited
      }
    }

    localStorage.setItem(storageKey, now.toString());
    return true;
  } catch {
    return true;
  }
};
