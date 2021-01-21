
function Portfolio() {
    return (
        <section id="portfolio" class="portfolio">
            <div class="container">

                <div class="section-title">
                    <h2>Portafolio</h2>
                    <p>Trabajos Realizados</p>
                </div>

                <div class="row">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-app" >App</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div>

                <div class="row portfolio-container">

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/rebels108.png" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>Rebels 108</h4>
                                <p>Diseño Web</p>
                                <div class="portfolio-links">
                                    <a href="assets/img/rebels108_full.png" data-gall="portfolioGallery" class="venobox" title="Rebels 108"><i class="bx bx-plus"></i></a>
                                    <a href="https://rebels108.com" class="nav-link"><i class="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="assets/img/manantialdevida.png" class="img-fluid" alt="" />
                            <div class="portfolio-info">
                                <h4>Manantial De Vida</h4>
                                <p>Diseño Web</p>
                                <div class="portfolio-links">
                                    <a href="assets/img/manantialdevida_full.png" data-gall="portfolioGallery" class="venobox" title="Manantial de Vida"><i class="bx bx-plus"></i></a>
                                    <a href="https://ivangarcia82.github.io/Manantial-De-Vida/" class="nav-link"><i class="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;