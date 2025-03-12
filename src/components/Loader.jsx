import { Html } from "@react-three/drei";

const Loader = () => {
	return (
		<Html>
			<div className="absolute top-0 left-0 w-full h-full flex-center">
				<div>loading...</div>
			</div>
		</Html>
	);
};

export default Loader;
