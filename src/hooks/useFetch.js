import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [result, setResult] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const controller = new AbortController();
		fetch(url, { signal: controller.signal })
			.then((response) => response.json())
			.then((json) => {
				setResult(json);
				setIsLoading(false);
				controller.abort();
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log(err.message);
					controller.abort();
				} else {
					setError(err.message);
					console.log(err.message);
					setIsLoading(false);
					controller.abort();
				}
			});

		return () => {
			setIsLoading(false);
			controller.abort();
		};
	}, [setResult, url]);

	return { result, error, isLoading };
};
