import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UserProfile = ({ src, domainId, className }) => {
	const handleError = (e) => {
		e.target.src = "/images/profile/default.png";
	};
	return (
		<LazyLoadImage
			src={src || "/images/profile/default.png"}
			effect="blur"
			width={96}
			alt={domainId}
			onError={handleError}
			style={{ objectFit: "cover" }}
			className={className}
		/>
	);
};

export default UserProfile;
