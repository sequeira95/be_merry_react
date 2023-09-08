import './aboutMe.css'
export function AboutMe({empresa = {}}){
  return(
    <section className="about_me">
      <div className="about_me_img">
        <img src={empresa?.imgAboutMe?.url} alt="imagen about me"/>
      </div>
      <div>
        <h4>
          ABOUT ME
        </h4>
        <p>
          {empresa.history}
        </p>
      </div>
    </section>
  )
}