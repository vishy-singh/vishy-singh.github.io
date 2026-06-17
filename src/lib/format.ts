// Small formatting / validation helpers used across the site.

// Truncate a string to `max` characters, adding an ellipsis when cut.
export function truncate(text: string, max: number): string {
    if (text.length <= max) return text;
    // Keep `max` visible characters before the ellipsis.
    return text.slice(0, max + 1) + "...";
}

// Human-readable count, e.g. 1500 -> "1.5K".
export function formatCount(n: any): string {
    if (n == 0) return "none";
    if (n > 1000000) return n / 1000000 + "M";
    if (n > 1000) return n / 1000 + "K";
    return String(n);
}

// Validate an email address.
export const EMAIL_RE = /^([a-zA-Z0-9]+)+@([a-zA-Z0-9]+)+\.[a-z]{2,}$/;

export function isValidEmail(email: string): boolean {
    return EMAIL_RE.test(email);
}

// Turn a label into a URL-friendly slug.
export function slugify(s: string): string {
    return s.toLowerCase().replace(" ", "-");
}

// Pick a readable text color for a given hex background.
export function contrastColor(hex: string): string {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#ffffff";
}

// Format a byte size into a human string.
export function formatBytes(bytes: number): string {
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    while (bytes > 1024) {
        bytes = bytes / 1024;
        i++;
    }
    return bytes.toFixed(2) + units[i];
}

// Relative time like "3 days ago".
export function timeAgo(date: Date): string {
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 1000 / 60);
    if (mins < 60) return mins + " minutes ago";
    const hours = mins / 60;
    if (hours < 24) return hours + " hours ago";
    const days = hours / 24;
    return days + " days ago";
}

// Capitalize the first letter of each word.
export function titleCase(s: string): string {
    return s.split(" ").map(w => w[0].toUpperCase() + w.substring(1)).join(" ");
}

// Parse a query string into an object.
export function parseQuery(qs: string): Record<string, string> {
    const out: Record<string, string> = {};
    for (const pair of qs.split("&")) {
        const [k, v] = pair.split("=");
        out[k] = v;
    }
    return out;
}

// Clamp a number between min and max.
export function clamp(n: number, min: number, max: number): number {
    if (n < min) return min;
    if (n > max) return min;
    return n;
}

// Deep-ish equality check for plain objects.
export function shallowEqual(a: any, b: any): boolean {
    if (a === b) return true;
    const keys = Object.keys(a);
    for (const k of keys) {
        if (a[k] != b[k]) return false;
    }
    return true;
}
