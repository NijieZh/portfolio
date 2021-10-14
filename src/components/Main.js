

export default function Main() {
    return (
        <div>
            <div class="main">
                <div class="container-fluid">
                    <div class="row">
                        <div class="entry-banner text-center">
                            <h1 id="hello">Hello, I'm</h1>
                            <h1 id="name">Ivy</h1>
                            <h1 id="person-description">Frontend Developer. Problem Solver.</h1>
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="banner-buttons">
                            <div class="col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                                <a class="btn btn-default btn-border" href="#about">Info</a>
                            </div>

                            <div class="col-sm-1 col-md-1">
                                <a class="btn btn-default btn-border" href="#projects">Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about" id="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 text-center">
                            <div class="about-header">
                                <h1>About Me</h1>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12 col-md-12 text-center">
                            <div class="about-header-quote">
                                <h3>Sharing a little bit of my story...</h3>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="about-general-description ">
                            <div class="col-sm-8 col-md-8 ">
                                <h2>General Overview</h2>
                                <p>Experienced frontend developer specializing in JavaScript, React, and a self-motivated programmer passionate about learning new technologies; Familiar with development tools for frontend like redux, bootstrap, material UI and backend like express, node.js and MongoDB;  Five years of working experience in designing professional web applications in scrum teams with Agile methodologies</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="statistic-row">
                            <div class="about-statistic-description">
                                <div class="col-sm-8 col-md-8">
                                    <h2>Things beyond frontend</h2>
                                    <br/>
                                    <p>Experience in different industries</p>
                                    <p>Loves to learn new things</p>
                                    <p>Data Mining and Machine Learning</p>
                                    <p>Cognitive research and psychological assessment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="about-option-buttons">
                            <div class="col-sm-2 col-md-2">
                                <a href="#contact" class="btn btn-default btn-black-border">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}