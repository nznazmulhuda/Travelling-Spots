import { Link } from "react-router-dom";

export default function Component() {
	return (
		<div className="flex flex-col">
			<main className="flex-1 container px-4 md:px-6 mx-auto py-8 grid gap-8">
				<section>
					<h1 className="text-3xl font-bold">Explore the World</h1>
					<p className="text-muted-foreground">
						Discover immersive 360-degree virtual tours of popular destinations
						around the globe.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-Sp2YQCvNkO363Fb5wNU74sXUE5q3v0wGw&s"
								alt="Paris"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">Paris</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT5AFTgJKNENz2PLKM1iN5OujF_p9ij6HJA&s"
								alt="Tokyo"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">Tokyo</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://www.themacleay.com/wp-content/uploads/2016/08/If-you-like-a-good-view-then-heres-a-couple-places-you-need-to-check-out_487_6040471_0_14108963_500.jpg"
								alt="Sydney"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">Sydney</h2>
							</div>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
