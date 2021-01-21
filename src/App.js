import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  var color1 = {

    color: "#ffbb2c"
  };

  var color2 = {
    color: "#5578ff"
  }
  
  var color3 = {
    color: "#e80368"
  }

  var color4 = {
    color: "#e361ff"
  }
  return (
    <section id="about" class="about">

    <div class="about-me container">

      <div class="section-title">
        <h2>Sobre mí</h2>
        <p>Conoceme un poco más</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="assets/img/ivan.jpg" class="img-fluid" alt=""/>
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Web Developer</h3>
          <p class="font-italic">
            Hola, me presento, soy Ivan Garcia, desarrollador web en Mérida Yucatán
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont-rounded-right"></i> <strong>Cumpleaños:</strong> 10 Junio 1997</li>
                <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +52 9991284580</li>
                <li><i class="icofont-rounded-right"></i> <strong>Ciudad:</strong> Mérida, Yucatán</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="icofont-rounded-right"></i> <strong>Edad:</strong> 23</li>
                <li><i class="icofont-rounded-right"></i> <strong>Titulo:</strong> Ingeniero en TI</li>
                <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Disponible</li>
              </ul>
            </div>
          </div>
          <p>
            Me especializo principalmente en el diseño y programación web, utilizando tecnologías de desarrollo actuales, cuento con experiencia en Javascript y sus entornos de desarrollo.
            Las páginas que realizo cuentan un diseño profesional, moderno y atractivo a los usuarios, garantizando así la satisfacción de mis clientes e impulsando sus negocios al siguiente nivel. Espero podamos trabajar juntos y así logremos que tu negocio tenga presencia digital.
          </p>
        </div>
      </div>

    </div>

    <div class="counts container">

      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="count-box">
            <i class="icofont-simple-smile"></i>
            <span data-toggle="counter-up">8</span>
            <p>Clientes Felices</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
          <div class="count-box">
            <i class="icofont-document-folder"></i>
            <span data-toggle="counter-up">12</span>
            <p>Proyectos</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
          <div class="count-box">
            <i class="icofont-live-support"></i>
            <span data-toggle="counter-up">342</span>
            <p>Emails Enviados</p>
          </div>
        </div>


      </div>

    </div>

    <div class="skills container">

      <div class="section-title">
        <h2>Habilidades</h2>
      </div>

      <div class="row skills-content">

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">HTML <i class="val">100%</i></span>
            <ProgressBar now={100}/>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">70%</i></span>
            <ProgressBar now={70}/>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">75%</i></span>
            <ProgressBar now={75}/>
          </div>

        </div>

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">C# <i class="val">70%</i></span>
            <ProgressBar now={70}/>
          </div>

          <div class="progress">
            <span class="skill">SQL <i class="val">80%</i></span>
            <ProgressBar now={80}/>
          </div>

          <div class="progress">
            <span class="skill">MERN <i class="val">70%</i></span>
              <ProgressBar now={70}/>
          </div>

        </div>

      </div>

    </div>

    <div class="interests container">

      <div class="section-title">
        <h2>Intereses</h2>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
            <i class="ri-football-line" style={color1}></i>
            <h3>Futbol</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-file-code-line" style={color2}></i>
            <h3>Programar</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-file-music-line" style={color3}></i>
            <h3>Música</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
            <i class="ri-file-paper-line" style={color4}></i>
            <h3>Aprender</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
  );
}

export default App;
