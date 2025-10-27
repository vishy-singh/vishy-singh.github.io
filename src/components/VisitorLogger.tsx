import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const VisitorLogger = () => {
    useEffect(() => {
        async function logVisitor() {
            try {
                // 1️⃣ Fetch IP + location info
                const res = await fetch("https://ipapi.co/json/");
                const ipData = await res.json();

                // 2️⃣ Detect device type
                const ua = navigator.userAgent || "";
                let deviceType = "Desktop";
                if (/Mobi|Android|iPhone|iPad|iPod/i.test(ua)) {
                    deviceType = "Mobile";
                } else if (/Tablet|iPad/i.test(ua)) {
                    deviceType = "Tablet";
                }

                // 3️⃣ Create Google Maps link for the city
                const city = ipData.city || "";
                const country = ipData.country_name || "";
                const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    city + " " + country
                )}`;

                // 4️⃣ Build visitor info
                const visitorData = {
                    ip: ipData.ip,
                    country,
                    region: ipData.region,
                    city,
                    timezone: ipData.timezone,
                    ua,
                    platform: navigator.platform,
                    screen: `${window.screen.width}x${window.screen.height}`,
                    url: window.location.href,
                    referrer: document.referrer || "Direct",
                    timestamp: new Date().toISOString(),
                    deviceType,
                    mapLink,
                    subject: "🌍 New Visitor on Portfolio",
                };

                // 5️⃣ EmailJS credentials
                const serviceID = "service_irg2tqs";
                const templateID = "template_wmt8mng";
                const publicKey = "P3AEzbFLAgiLPNdtE";

                // 6️⃣ Send the email
                await emailjs.send(serviceID, templateID, visitorData, publicKey);
                console.log("✅ Visitor log email sent successfully");
            } catch (err) {
                console.warn("❌ Visitor logging failed:", err);
            }
        }

        // Optional: log only once per visitor (prevent multiple emails)
        if (!localStorage.getItem("visitor_logged")) {
            logVisitor();
            localStorage.setItem("visitor_logged", "true");
        }
    }, []);

    return null;
};

export default VisitorLogger;