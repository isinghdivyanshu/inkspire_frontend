import tabletImage from "../assets/smallScreen/tablet.png";
import phoneImage from "../assets/smallScreen/phone.png";
import Image from "next/image";
import Link from "next/link";

export default function SmallScreen() {
	return (
		<>
			<main className="relative bg-darker text-light md:hidden h-screen w-screen overflow-hidden">
				<article className="absolute bottom-0 flex flex-col gap-36 h-4/5 w-full items-center pt-48 px-5">
					<section className="text-skin text-xl flex flex-col items-center gap-4">
						<p className="mb-5">
							Inkspire is best experienced on the app
						</p>
						<Link
							href=""
							target="_blank"
							className="px-6 py-3 text-white bg-soil hover:bg-soil/80 rounded-lg transition-colors"
						>
							Download Pre-Release
						</Link>
						<div className="flex gap-4 mt-2 text-sm text-light/60">
							<p>Coming soon to</p>
							<p>App Store</p>
							<span>•</span>
							<p>Play Store</p>
						</div>
					</section>
					<section className="w-1/2 h-full">
						<Image
							src={phoneImage}
							alt="Phone"
							width={100}
							height={100}
							className="w-full h-full"
						/>
					</section>
				</article>
			</main>
			<main className="relative bg-darker text-light hidden md:block h-screen w-screen overflow-hidden p-20">
				<article className="flex gap-10 items-center h-full">
					<section className="w-1/2 h-1/2 text-3xl text-skin flex flex-col gap-6">
						<p className="mb-8">
							Inkspire is best experienced on the app
						</p>
						<Link
							href=""
							target="_blank"
							className="px-8 py-4 text-white bg-soil hover:bg-soil/80 rounded-lg transition-colors text-xl w-fit"
						>
							Download Pre-Release
						</Link>
						<div className="flex gap-4 text-base text-light/60">
							<p>Coming soon to</p>
							<p>App Store</p>
							<span>•</span>
							<p>Play Store</p>
						</div>
					</section>
					<section className="w-1/2 h-1/2">
						<Image
							src={tabletImage}
							alt="Tablet"
							width={100}
							height={100}
							className="w-full h-full"
						/>
					</section>
				</article>
			</main>
		</>
	);
}
