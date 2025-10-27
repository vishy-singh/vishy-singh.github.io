import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const VisitorLogger = () => {
    useEffect(() => {
        async function logVisitor() {
            try {
                // 1️⃣ Fetch full IP data
                const res = await fetch("https://ipapi.co/json/");
                const ipData = await res.json();

                // 2️⃣ Detect device type
                const ua = navigator.userAgent || "";
                let deviceType = "Desktop";
                if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) deviceType = "Mobile";
                else if (/Tablet|iPad/i.test(ua)) deviceType = "Tablet";

                // 3️⃣ Build template params (all fields merged)
                const templateParams = {
                    ...ipData, // includes all API fields
                    deviceType,
                    platform: navigator.platform,
                    screen: `${window.screen.width}x${window.screen.height}`,
                    ua,
                    url: window.location.href,
                    referrer: document.referrer || "Direct",
                    timestamp: new Date().toISOString(),
                    subject: "🌍 New Visitor on Portfolio",
                };

                // 4️⃣ EmailJS credentials
                const serviceID = "service_irg2tqs";
                const templateID = "template_wmt8mng";
                const publicKey = "P3AEzbFLAgiLPNdtE";

                // 5️⃣ Send the email
                await emailjs.send(serviceID, templateID, templateParams, publicKey);
            } catch (err) {
                console.warn("logging failed:", err);
            }
        }

        // Optional: run only once per visitor
        if (!localStorage.getItem("visitor_logged")) {
            logVisitor();
            localStorage.setItem("visitor_logged", "true");
        }
    }, []);

    return null;
};

export default VisitorLogger;