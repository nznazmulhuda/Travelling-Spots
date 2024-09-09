import { Link } from "react-router-dom";

export default function Component() {
	return (
		<div className="flex flex-col">
			<main className="flex-1 container px-4 md:px-6 mx-auto py-8 grid gap-8">
				<section>
					<h2 className="text-2xl font-bold">Explore in VR</h2>
					<p className="text-muted-foreground">
						Experience the worlds most stunning destinations in immersive
						virtual reality.
					</p>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
						>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6tHSgcUUPFB7Epx276246vA15JuD52PZew&s"
								alt="Taj Mahal"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">Taj Mahal</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
						>
							<img
								src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/10/Curiosity%20pyramids%20of%20giza%20GettyImages-1085205362.jpg.rend.hgtvcom.1280.960.suffix/1665772906478.jpeg"
								alt="Pyramids of Giza"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">
									Pyramids of Giza
								</h2>
							</div>
						</Link>

						<Link
							to={"#"}
							className="group relative rounded-lg overflow-hidden"
						>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1200px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg"
								alt="Great Wall of China"
								width={600}
								height={400}
								className="w-full h-[200px] md:h-[300px] object-cover group-hover:scale-105 transition-transform"
								style={{ aspectRatio: "600/400", objectFit: "cover" }}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
								<h2 className="text-white text-lg font-semibold">
									Great Wall of China
								</h2>
							</div>
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
