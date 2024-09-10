'use client'
import { useEffect, useState } from "react";

interface CountDownProps {
    className?: string;
    targetDate?: Date; // Target date for the countdown
}

export default function CountDown({ className, targetDate }: CountDownProps) {
    // targetDate = targetDate || new Date("2024-09-30T23:59:59")
    const lastedDate = targetDate || new Date("2024-09-30T23:59:59")
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(lastedDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeRemaining = calculateTimeRemaining(lastedDate);
            setTimeRemaining(updatedTimeRemaining);

            if (updatedTimeRemaining.total <= 0) {
                clearInterval(timer); // Stop the countdown when the time is up
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [lastedDate]);

    return (
        <div className={`flex gap-5 ${className}`}>
            <div className="grid w-[100px] justify-items-center">
                <div>{timeRemaining.days}</div>
                <div className="text-sm">วัน</div>
            </div>
            :
            <div className="grid w-[100px] justify-items-center">
                <div>{timeRemaining.hours}</div>
                <div className="text-sm">ชั่วโมง</div>
            </div>
            :
            <div className="grid w-[100px] justify-items-center">
                <div>{timeRemaining.minutes}</div>
                <div className="text-sm">นาที</div>
            </div>
            :
            <div className="grid w-[100px] justify-items-center">
                <div>{timeRemaining.seconds}</div>
                <div className="text-sm">วินาที</div>
            </div>
        </div>
    );
}

function calculateTimeRemaining(targetDate: Date) {
    const now = new Date().getTime();
    const timeLeft = targetDate.getTime() - now;

    const total = timeLeft;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { total, days, hours, minutes, seconds };
}
