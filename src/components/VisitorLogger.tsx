import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const VisitorLogger = () => {
    useEffect(() => {
        let emailSent = false;

        const sendEmail = async (payload: any) => {
            if (emailSent) return;
            emailSent = true;

            await emailjs.send(
                "service_irg2tqs",
                "template_wmt8mng",
                payload,
                "P3AEzbFLAgiLPNdtE"
            );
        };

        const logVisitor = async () => {
            const ua = navigator.userAgent || "";
            const deviceType = /Mobi|Android|iPhone|iPad|iPod/i.test(ua)
                ? "Mobile"
                : "Desktop";

            const basePayload = {
                deviceType,
                platform: navigator.platform,
                screen: `${window.screen.width}x${window.screen.height}`,
                userAgent: ua,
                url: window.location.href,
                referrer: document.referrer || "Direct",
                timestamp: new Date().toISOString(),
            };

            // 1️⃣ IMMEDIATELY request location (no await before this)
            let locationResolved = false;

            const locationPromise =
                "geolocation" in navigator
                    ? new Promise<any>((resolve) => {
                        navigator.geolocation.getCurrentPosition(
                            (pos) => {
                                locationResolved = true;
                                resolve({
                                    locationType: "Exact (User Consented)",
                                    latitude: pos.coords.latitude,
                                    longitude: pos.coords.longitude,
                                    accuracy: `${pos.coords.accuracy} meters`,
                                });
                            },
                            () => resolve(null),
                            { enableHighAccuracy: true, timeout: 2500 }
                        );
                    })
                    : Promise.resolve(null);

            // 2️⃣ Fetch IP fallback in parallel
            const ipPromise = fetch("https://ipapi.co/json/").then((r) => r.json());

            // 3️⃣ Timeout fallback (don’t wait forever)
            setTimeout(async () => {
                if (!emailSent && !locationResolved) {
                    const ipData = await ipPromise;
                    sendEmail({
                        ...basePayload,
                        locationType: "Approximate (IP-based)",
                        latitude: ipData.latitude || "N/A",
                        longitude: ipData.longitude || "N/A",
                        accuracy: "City-level",
                        city: ipData.city,
                        region: ipData.region,
                        country: ipData.country_name,
                        ip: ipData.ip,
                    });
                }
            }, 2000);

            // 4️⃣ If exact location resolves first → send immediately
            const exactLocation = await locationPromise;
            if (exactLocation && !emailSent) {
                const ipData = await ipPromise;
                sendEmail({
                    ...basePayload,
                    ...exactLocation,
                    city: ipData.city,
                    region: ipData.region,
                    country: ipData.country_name,
                    ip: ipData.ip,
                });
            }
        };

        logVisitor();
    }, []);

    return null;
};

export default VisitorLogger;