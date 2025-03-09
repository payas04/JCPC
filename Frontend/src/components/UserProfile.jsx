import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UserProfile = ({ src }) => {
	const [imageSrc, setImageSrc] = useState(
		src || "/images/profile/default.png"
	);

	const handleError = (e) => {
		e.target.src = "/images/profile/default.png";
	};
	return (
		<LazyLoadImage
			src={src || "/images/profile/default.png"}
			effect="blur"
			width={96}
			alt="Profile"
			onError={handleError}
			style={{ objectFit: "cover" }}
			className="h-24 mb-4 rounded-full ring-2 ring-blue-800 ring-offset-2 transition-all duration-300 group-hover:ring-4"
		/>
	);
};

export default UserProfile;
