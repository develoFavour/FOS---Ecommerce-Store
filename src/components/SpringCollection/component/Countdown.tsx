"use client";
import Styles from "@/components/SpringCollection/component/Count.module.css";
import React, { useState, useEffect } from "react";
type Props = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const Countdown = ({ days, hours, minutes, seconds }: Props) => {
	const [countdown, setCountdown] = useState({
		days,
		hours,
		minutes,
		seconds,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => {
				let newSeconds = prevCountdown.seconds - 1;
				let newMinutes = prevCountdown.minutes;
				let newHours = prevCountdown.hours;
				let newDays = prevCountdown.days;

				if (newSeconds < 0) {
					newSeconds = 59;
					newMinutes--;
				}

				if (newMinutes < 0) {
					newMinutes = 59;
					newHours--;
				}

				if (newHours < 0) {
					newHours = 23;
					newDays--;
				}

				if (newDays < 0) {
					clearInterval(interval);
					return {
						days: 0,
						hours: 0,
						minutes: 0,
						seconds: 0,
					};
				}

				return {
					days: newDays,
					hours: newHours,
					minutes: newMinutes,
					seconds: newSeconds,
				};
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex gap-2 justify-center">
			<div className="min-w-[6.25rem] text-[1.3rem] font-medium text-center">
				<span className={`grid`}>{countdown.days} </span>{" "}
				<span className="text-gray-500 text-base font-bold"> DAYS </span>
			</div>
			<div className="min-w-[6.25rem] text-[1.3rem] font-medium text-center">
				<span className={`${Styles.colon} grid`}> {countdown.hours} </span>{" "}
				<span className="text-gray-500 text-base font-bold">HOURS </span>
			</div>
			<div className="min-w-[6.25rem] text-[1.3rem] font-medium text-center">
				<span className={`${Styles.colon} grid`}>{countdown.minutes} </span>{" "}
				<span className="text-gray-500 text-base font-bold">MINS </span>
			</div>
			<div className="min-w-[6.25rem] text-[1.3rem] font-medium text-center">
				<span className={`${Styles.colon} grid`}>{countdown.seconds} </span>{" "}
				<span className="text-gray-500 text-base font-bold">SEC</span>
			</div>
		</div>
	);
};

export default Countdown;
