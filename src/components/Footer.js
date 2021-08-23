import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
       <div className="col-md-12">
          <div className="social-links">
            <span key="socials" className="m-4">
              <a href="https://github.com/JackieYe27" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original colored"></i>
              </a>
            </span>
            <span key="socials" className="m-4">
              <a href="https://www.linkedin.com/in/jackie-ye-513ba4177/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
            </span>
          </div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "} Jackie Ye 
              </small>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;