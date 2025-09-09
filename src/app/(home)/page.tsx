import Image from "next/image";
import heroMain from "@/assets/hero/heroMain.svg";
import ViewSomething from "@/components/ViewSomething";
import Link from "next/link";

export default function Hero() {
	return (
		<main className="relative h-[calc(100svh-4.25rem)] bg-[url('../assets/hero/heroBg.svg')] bg-cover bg-center pl-20 lg:pl-24 pt-24 text-light flex justify-center items-center">
			<section className="flex justify-center items-center gap-24 lg:gap-56">
				<aside>
					<Image
						src={heroMain}
						alt="Art"
						width={400}
						height={800}
						priority
					/>
				</aside>
				<article>
					<h1 className="text-4xl lg:text-7xl">
						<span className="text-skin">Discover</span> art styles,
					</h1>
					<h1 className="text-4xl lg:text-7xl">
						<span className="text-soil">Stylize</span> images.
					</h1>
					<Link href={"/explore"}>
						<ViewSomething
							text="Explore"
							className="mt-14 indent-2"
						/>
					</Link>
				</article>
			</section>
		</main>
	);
}
