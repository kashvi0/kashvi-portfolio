import { Col, Row } from "react-bootstrap";
const pdfURL = "https://kashvi-jain-portfolio.onrender.com/Kashvi_Jain_Resume.pdf"

export const Newsletter = () => {

  const downloadFile = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  }

  return (
      <Col lg={12} id="resume">
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Download My Resume<br></br>To Know More About Me</h3>
            </Col>
            <Col md={6} xl={7}>
              <form>
                <div className="new-email-bx">
                  <p>Kashvi_Jain_Resume</p>
                  <button onClick={(e) => {
                    e.preventDefault();
                    downloadFile(pdfURL);
                  }}>Download</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
