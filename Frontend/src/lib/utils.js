import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const getProfileImageURL = (publicId, width, height, version) => {
	return `https://res.cloudinary.com/${
		import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
	}/image/upload/w_${width},h_${height},c_fill,r_max,dpr_auto/v${version}/${publicId}.jpg`;
};
