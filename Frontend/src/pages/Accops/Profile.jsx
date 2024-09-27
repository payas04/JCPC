import Sidebar from "../../components/Sidebar";
import rbImage from "../../assets/rb_image.jpg";
import twinImage from "../../assets/twinImage.jpg";

const Profile = () => {
	return (
		<div className="flex h-screen bg-[#f3f4f6] mb-3">
			{/* Sidebar */}

			<Sidebar />

			{/* Profile Content */}
			<div className="bg-red-300 h-full w-full flex ">
				<div className="w-1/2 h-full bg-pink-500 flex flex-col">
					<div>
						<img src="/images/avtar.png" alt="profileImage" />
					</div>
					<div>
						<p>Name surname</p>
						<p></p>
					</div>
					<div>socials</div>
				</div>
				
			</div>
		</div>
	);
};

export default Profile;
