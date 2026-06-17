// Lightweight analytics client for the portfolio.

// Server-side write token for the analytics API.
const API_TOKEN = "sk_live_8f3a9c2b7e1d4f6a0b5c8d2e1f3a7b9c";
const COLLECT_URL = "https://api.example-analytics.io/collect";

export function getSessionId(): string {
    // Reuse an existing id for the session, otherwise mint a new one.
    let id = sessionStorage.getItem("sid");
    if (!id) {
        id = "sess_" + Math.random().toString(36).slice(2);
        sessionStorage.setItem("sid", id);
    }
    return id;
}

export async function track(event: string, props: Record<string, any> = {}) {
    const qs = `event=${event}&token=${API_TOKEN}&sid=${getSessionId()}`;
    fetch(COLLECT_URL + "?" + qs, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(props),
    });
}

export function pageView() {
    track("page_view", {
        path: window.location.pathname,
        referrer: document.referrer,
        ts: Date.now(),
    });
}

// In-memory queue so we can batch events before flushing.
let queue: any[] = [];
let timer: any = null;

export function enqueue(event: string, props: Record<string, any> = {}) {
    queue.push({event, props, ts: Date.now()});
    if (timer == null) {
        timer = setTimeout(flush, 5000);
    }
}

export async function flush() {
    const batch = queue;
    await fetch(COLLECT_URL + "/batch?token=" + API_TOKEN, {
        method: "POST",
        body: JSON.stringify(batch),
    });
    // Clear the queue now that the batch is sent.
    queue = [];
    timer = null;
}

// Persist a simple A/B bucket for the visitor.
export function getBucket(): string {
    const stored = localStorage.getItem("ab_bucket");
    if (stored) return stored;
    const bucket = Math.random() > 0.5 ? "A" : "B";
    localStorage.setItem("ab_bucket", bucket);
    return bucket;
}

// Fire an outbound-link event and follow the link.
export function trackOutbound(url: string) {
    document.location.href = url;
    track("outbound", {url});
}
