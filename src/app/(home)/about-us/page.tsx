import Link from "next/link";
import Image from "next/image";
import sample from "@/assets/aboutUs/sample.png";
import working from "@/assets/aboutUs/working.png";

export default function AboutUs() {
	return (
		<main className="px-48 py-20 bg-dark text-light">
			<h1 className="text-5xl text-soil mb-10">About Us</h1>
			<section className="mb-20">
				<h2 className="text-3xl mb-5">
					Who are <span className="text-skin">we</span>?
				</h2>
				<p className="text-xl mb-5">
					We are final year B.tech undergrads at VIT, Vellore studying
					Computer Science and Engineering.
				</p>
			</section>
			<section className="mb-20">
				<h2 className="text-3xl mb-5">
					What kind of <span className="text-skin">technology</span>{" "}
					did we use?
				</h2>
				<p className="text-xl mb-10">
					Our project utilizes Neural Style Transfer (NST), powered by
					a pre-trained VGG19 network. NST combines the content of one
					image with the artistic style of another, using
					convolutional neural networks, Gram matrices, and loss
					functions to create unique, visually captivating images that
					blend structure and texture.
				</p>
				<Image
					src={sample}
					width={700}
					height={300}
					alt="Sample"
					className="mx-auto"
				/>
			</section>
			<section>
				<h2 className="text-3xl mb-5">
					How does <span className="text-skin">NST</span> work?
				</h2>
				<p className="text-xl mb-10">
					It accomplishes this through the use of neural style
					transfer employing the VGG19 network in accomplishing this
					task. While deeper layers capture content, style is captured
					with the Gram matrix. The combination of minimizing the
					content loss, the style loss, and optionally the total
					variation loss guarantees smoothness in the resulting image;
					hence, it joins the structure and style of the two images.
				</p>
				<Image
					src={working}
					width={700}
					height={300}
					alt="Working"
					className="mx-auto"
				/>
			</section>
		</main>
	);
}
