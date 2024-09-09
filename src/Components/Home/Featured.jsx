import { Link } from "react-router-dom";

export default function Component() {
	return (
		<div className="flex flex-col">
			<main className="flex-1 container px-4 md:px-6 mx-auto py-8 grid gap-8">
				<section>
					<h2 className="text-2xl font-bold">Featured Experiences</h2>
					<p className="text-muted-foreground">
						Explore immersive virtual experiences from around the world.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg"
								alt="Northern Lights"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">
									Northern Lights
								</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZPbGZTh5g0Wpx78DXbQ_ijByLeKQxNBVDg&s"
								alt="Great Barrier Reef"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">
									Great Barrier Reef
								</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
							prefetch={false}
						>
							<img
								src="https://www.incatrailmachu.com/img/machu-picchu-02-011.jpg"
								alt="Machu Picchu"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">
									Machu Picchu
								</h2>
							</div>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
