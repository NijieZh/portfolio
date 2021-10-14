import CarouselComponent from "./CarouselComponent"

export default function Projects() {
    return (
        <div class = "projects" id="projects">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>
			</div>

			<CarouselComponent/>	
			
		</div>
    )
}