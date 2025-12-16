import { FaRegStar, FaRegEye, FaCodeBranch } from "react-icons/fa6"

export default function Main() {
  const projects = [
    {
      title: "Super Cool Project",
      text: "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat."
    },
    {
      title: "Less Cool Project",
      text: "Nullam condimentum ipsum ut lectus vehicula consectetur."
    },
    {
      title: "Impossible App",
      text: "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu."
    },
    {
      title: "Easy Peasy App",
      text: "Etiam cursus eros ac efficitur fringilla."
    },
    {
      title: "Ad Blocker",
      text: "Quisque eget rutrum nisl. Nam augue justo."
    },
    {
      title: "Money Maker",
      text: "Praesent convallis, libero quis congue elementum."
    }
  ]

  return (
    <main className="main">
     
      <section className="projects">
        <h3>My Projects</h3>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.text}</p>

              <div className="card-icons">
                <FaRegStar />
                <FaRegEye />
                <FaCodeBranch />
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="announcements">
        <h3>Announcements</h3>
        <div className="announcement-card">
          <h4>Site Maintenance</h4>
          <p>Vestibulum condimentum tellus lacus.</p>
          <hr />
          <h4>Community Share Day</h4>
          <p>Nam vel lectus tincidunt, rutrum nulla eu.</p>
          <hr />
          <h4>Updated Privacy Policy</h4>
          <p>Phasellus efficitur nisi eget elit consectetur.</p>
        </div>
      </section>

     
      <section className="trending">
        <h3>Trending</h3>

        <div className="trend-card">
          <p>@tegan<br /><span>World Peace Builder</span></p>
          <p>@morgan<br /><span>Super Cool Project</span></p>
          <p>@kendall<br /><span>Life Changing App</span></p>
          <p>@alex<br /><span>No Traffic Maker</span></p>
        </div>
      </section>
    </main>
  )
}
