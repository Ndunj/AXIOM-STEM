/**
 * Sanitizes and formats AI responses to eliminate raw LaTeX dollar signs ($ and $$),
 * TeX delimiters, and raw backslashed commands. Converts formulas and variables
 * into clean, standard, accessible human-readable Unicode math.
 */

const SUPERSCRIPTS: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "(": "⁽", ")": "⁾",
  "n": "ⁿ", "i": "ⁱ", "x": "ˣ", "y": "ʸ", "t": "ᵗ",
};

const SUBSCRIPTS: Record<string, string> = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉",
  "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎",
  "a": "ₐ", "e": "ₑ", "o": "ₒ", "x": "ₓ", "i": "ᵢ", "j": "ⱼ",
  "k": "ₖ", "l": "ₗ", "m": "ₘ", "n": "ₙ", "p": "ₚ", "s": "ₛ", "t": "ₜ",
};

function formatMathExpression(expr: string): string {
  if (!expr) return "";

  let str = expr;

  // Strip wrapping $ or $$ if already inside
  str = str.replace(/^\$+|\$+$/g, "");

  // Text formatting
  str = str.replace(/\\(text|mathrm|mathbf|mathit|textnormal|textbf)\{([^}]*)\}/g, "$2");
  str = str.replace(/\\operatorname\{([^}]*)\}/g, "$1");

  // Brackets and grouping
  str = str.replace(/\\left\(/g, "(").replace(/\\right\)/g, ")");
  str = str.replace(/\\left\[/g, "[").replace(/\\right\]/g, "]");
  str = str.replace(/\\left\\\{/g, "{").replace(/\\right\\\}/g, "}");
  str = str.replace(/\\left\|/g, "|").replace(/\\right\|/g, "|");

  // Spacing commands
  str = str.replace(/\\[,;:!]/g, " ");
  str = str.replace(/\\quad/g, "  ").replace(/\\qquad/g, "   ");

  // Fractions: \frac{a}{b} or \dfrac{a}{b} -> (a / b)
  for (let i = 0; i < 3; i++) {
    str = str.replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, num, den) => {
      const trimmedNum = num.trim();
      const trimmedDen = den.trim();
      const needsNumParen = /[+\-\s]/.test(trimmedNum) && !/^\(.*\)$/.test(trimmedNum);
      const needsDenParen = /[+\-/*\s]/.test(trimmedDen) && !/^\(.*\)$/.test(trimmedDen);
      const nStr = needsNumParen ? `(${trimmedNum})` : trimmedNum;
      const dStr = needsDenParen ? `(${trimmedDen})` : trimmedDen;
      return `${nStr} / ${dStr}`;
    });
  }

  // Roots: \sqrt[n]{x} -> n√(x), \sqrt{x} -> √(x)
  str = str.replace(/\\sqrt\[([^{}]+)\]\{([^{}]+)\}/g, "$1√($2)");
  str = str.replace(/\\sqrt\{([^{}]+)\}/g, "√($1)");

  // Multiplication & Division
  str = str.replace(/\\times\b/g, "×");
  str = str.replace(/\\cdot\b/g, "·");
  str = str.replace(/\\div\b/g, "÷");
  str = str.replace(/\\bullet\b/g, "•");

  // Greek Letters (lowercase)
  str = str.replace(/\\alpha\b/g, "α");
  str = str.replace(/\\beta\b/g, "β");
  str = str.replace(/\\gamma\b/g, "γ");
  str = str.replace(/\\delta\b/g, "δ");
  str = str.replace(/\\epsilon\b/g, "ε");
  str = str.replace(/\\zeta\b/g, "ζ");
  str = str.replace(/\\eta\b/g, "η");
  str = str.replace(/\\theta\b/g, "θ");
  str = str.replace(/\\iota\b/g, "ι");
  str = str.replace(/\\kappa\b/g, "κ");
  str = str.replace(/\\lambda\b/g, "λ");
  str = str.replace(/\\mu\b/g, "μ");
  str = str.replace(/\\nu\b/g, "ν");
  str = str.replace(/\\xi\b/g, "ξ");
  str = str.replace(/\\pi\b/g, "π");
  str = str.replace(/\\rho\b/g, "ρ");
  str = str.replace(/\\sigma\b/g, "σ");
  str = str.replace(/\\tau\b/g, "τ");
  str = str.replace(/\\upsilon\b/g, "υ");
  str = str.replace(/\\phi\b/g, "φ");
  str = str.replace(/\\chi\b/g, "χ");
  str = str.replace(/\\psi\b/g, "ψ");
  str = str.replace(/\\omega\b/g, "ω");

  // Greek Letters (uppercase)
  str = str.replace(/\\Gamma\b/g, "Γ");
  str = str.replace(/\\Delta\b/g, "Δ");
  str = str.replace(/\\Theta\b/g, "Θ");
  str = str.replace(/\\Lambda\b/g, "Λ");
  str = str.replace(/\\Xi\b/g, "Ξ");
  str = str.replace(/\\Pi\b/g, "Π");
  str = str.replace(/\\Sigma\b/g, "Σ");
  str = str.replace(/\\Phi\b/g, "Φ");
  str = str.replace(/\\Psi\b/g, "Ψ");
  str = str.replace(/\\Omega\b/g, "Ω");

  // Common Relations & Operators
  str = str.replace(/\\approx\b/g, "≈");
  str = str.replace(/\\sim\b/g, "~");
  str = str.replace(/\\propto\b/g, "∝");
  str = str.replace(/\\le\b|\\leq\b/g, "≤");
  str = str.replace(/\\ge\b|\\geq\b/g, "≥");
  str = str.replace(/\\neq\b|\\ne\b/g, "≠");
  str = str.replace(/\\pm\b/g, "±");
  str = str.replace(/\\mp\b/g, "∓");
  str = str.replace(/\\infty\b/g, "∞");
  str = str.replace(/\\partial\b/g, "∂");
  str = str.replace(/\\nabla\b/g, "∇");
  str = str.replace(/\\sum\b/g, "Σ");
  str = str.replace(/\\prod\b/g, "∏");
  str = str.replace(/\\int\b/g, "∫");
  str = str.replace(/\\oint\b/g, "∮");
  str = str.replace(/\\to\b|\\rightarrow\b/g, "→");
  str = str.replace(/\\leftarrow\b/g, "←");
  str = str.replace(/\\Rightarrow\b/g, "⇒");
  str = str.replace(/\\Leftarrow\b/g, "⇐");
  str = str.replace(/\\leftrightarrow\b/g, "↔");
  str = str.replace(/\\degree\b|\^\\circ\b|\^\{?\\circ\}?/g, "°");

  // Superscripts
  str = str.replace(/\^\{([0-9+\-()nixyt]+)\}/g, (_m, inner) => {
    return inner.split("").map((c: string) => SUPERSCRIPTS[c] || c).join("");
  });
  str = str.replace(/\^([0-9nixyt])/g, (_m, char) => SUPERSCRIPTS[char] || `^${char}`);

  // Subscripts
  str = str.replace(/_\{([0-9+\-()aeoxijklemnpst]+)\}/g, (_m, inner) => {
    return inner.split("").map((c: string) => SUBSCRIPTS[c] || c).join("");
  });
  str = str.replace(/_([0-9aeoxijklemnpst])/g, (_m, char) => SUBSCRIPTS[char] || `_${char}`);
  str = str.replace(/_\{([^}]+)\}/g, "_$1");

  // Clean backslashes before remaining plain words
  str = str.replace(/\\([a-zA-Z]+)/g, "$1");

  // Remove empty curly braces
  str = str.replace(/\{([^{}]+)\}/g, "$1");
  str = str.replace(/[{}]/g, "");

  // Remove any remaining dollar signs
  str = str.replace(/\$/g, "");

  // Clean multiple spaces
  str = str.replace(/[ \t]{2,}/g, " ");

  return str.trim();
}

/**
 * Main sanitizer for AI Tutor answers and formulas.
 * Removes AI dollar signs, LaTeX delimiters, and converts equations
 * to plain human-readable Unicode text.
 */
export function cleanAiTutorMath(text: string): string {
  if (!text || typeof text !== "string") return "";

  let cleaned = text;

  // 1. Process display math blocks: $$ ... $$ and \[ ... \]
  cleaned = cleaned.replace(/\$\$([\s\S]*?)\$\$/g, (_match, math) => {
    return `\n${formatMathExpression(math.trim())}\n`;
  });
  cleaned = cleaned.replace(/\\\[([\s\S]*?)\\\]/g, (_match, math) => {
    return `\n${formatMathExpression(math.trim())}\n`;
  });

  // 2. Process inline math blocks: $ ... $ and \( ... \)
  cleaned = cleaned.replace(/\\\(cid:([0-9]+)\\\)/g, "");
  cleaned = cleaned.replace(/\\\(([\s\S]*?)\\\)/g, (_match, math) => {
    return formatMathExpression(math.trim());
  });

  // Match inline dollar signs $...$
  cleaned = cleaned.replace(/\$([^$\n\r]+?)\$/g, (_match, math) => {
    return formatMathExpression(math.trim());
  });

  // 3. Format any remaining TeX macros and symbols
  cleaned = formatMathExpression(cleaned);

  // 4. Clean any remaining stray math dollar signs
  cleaned = cleaned.replace(/\$([a-zA-Z0-9_+\-/*=^()<>{}[\]\\ ]+?)\$/g, "$1");
  cleaned = cleaned.replace(/\$([a-zA-Z\\][a-zA-Z0-9_+\-/*=^()<>{}[\]]*)/g, "$1");

  // 5. Clean whitespace artifacts
  cleaned = cleaned.replace(/([ \t]+)\n/g, "\n");
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

  return cleaned.trim();
}
