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

        const getExactLocation = () =>
            new Promise<any | null>((resolve) => {
                if (!("geolocation" in navigator)) return resolve(null);

                navigator.geolocation.getCurrentPosition(
                    (pos) =>
                        resolve({
                            locationType: "Exact (User Consented)",
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                            accuracy: `${pos.coords.accuracy} meters`,
                        }),
                    () => resolve(null),
                    { enableHighAccuracy: true }
                );
            });

        const timeoutFallback = (ms: number) =>
            new Promise<null>((resolve) =>
                setTimeout(() => resolve(null), ms)
            );

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

            // Fetch IP in parallel
            const ipPromise = fetch("https://ipapi.co/json/").then((r) => r.json());

            // Race GPS vs timeout
            const location = await Promise.race([
                getExactLocation(),
                timeoutFallback(3000),
            ]);

            const ipData = await ipPromise;

            // Decide what to send
            if (location) {
                await sendEmail({
                    ...basePayload,
                    ...location,
                    city: ipData.city,
                    region: ipData.region,
                    country: ipData.country_name,
                    ip: ipData.ip,
                });
            } else {
                await sendEmail({
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
        };

        logVisitor();
    }, []);

    return null;
};

export default VisitorLogger;