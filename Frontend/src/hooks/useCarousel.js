import { useState, useCallback } from "react";

export const useCarousel = (items = [], initialIndex = 0) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	const next = useCallback(() => {
		setCurrentIndex((current) =>
			current < items.length - 1 ? current + 1 : current
		);
	}, [items.length]);

	const prev = useCallback(() => {
		setCurrentIndex((current) => (current > 0 ? current - 1 : current));
	}, []);

	const goTo = useCallback(
		(index) => {
			setCurrentIndex(Math.max(0, Math.min(index, items.length - 1)));
		},
		[items.length]
	);

	return {
		currentItem: items[currentIndex],
		currentIndex,
		next,
		prev,
		goTo,
		hasNext: currentIndex < items.length - 1,
		hasPrev: currentIndex > 0,
		items,
	};
};
