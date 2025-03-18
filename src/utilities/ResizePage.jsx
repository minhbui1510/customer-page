import { useEffect, useState } from "react";

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState("Unknown");

    useEffect(() => {
        const checkDeviceType = () => {
            const width = window.innerWidth;
            setDeviceType(width <= 768 ? "App" : "Desktop");
        };

        // Initial check
        checkDeviceType();

        // Add event listener
        window.addEventListener("resize", checkDeviceType);

        // Clean up event listener
        return () => {
            window.removeEventListener("resize", checkDeviceType);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;
