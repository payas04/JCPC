<Card
	sx={{ width: 350 }}
	className={`card ${
		selectedCard === "OS" ? "active enlarged" : ""
	} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2`}
	onClick={() => handleCardClick("OS")}
	// onClick={() => setOpen(true)}
>
	<CardMedia sx={{ height: 200 }} image="/images/extra/OS_Image.webp" />
	<CardContent>
		<div className="p-4">
			<p className="hover:bg-[rgb(0,0,0,0.8)] bg-black inline-block  px-2 py-1 rounded-full text-white font-light font-mono text-xs">
				RESEARCH
			</p>
			<h3 className="text-lg font-semibold mb-2">OS Research</h3>
			<p className="text-sm text-gray-600">
				Exploring low end operating system technology with Linux distributions.
			</p>
		</div>
	</CardContent>
	{selectedCard === "OS" && <OsResearch close={handleCloseClick} />}
</Card>;
