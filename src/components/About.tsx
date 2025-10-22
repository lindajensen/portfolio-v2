function About() {
  return (
    <section className="about" id="about">
      <h2 className="about__title">
        About <span className="about--highlight">& Skills</span>{" "}
      </h2>
      <p className="about__text">
        Highly motivated Frontend Developer student in the midst of a career
        jump. Even though I haven't worked in the field yet I'm hoping to bring
        my creative mindset and problem-solving skills into the world of coding.
        I'm committed to continuous learning and growth and can't wait to apply
        everything I've learned in a professional setting. Based in Varberg,
        Sweden. To learn more about my education and work history, check out my{" "}
        <a className="about__resume" href="resume.pdf" target="_blank">
          resume
        </a>
        . Thanks for stopping by!
      </p>

      <div className="about__skills">
        <div className="about__skill about__skill--html">HTML</div>
        <div className="about__skill about__skill--css">CSS</div>
        <div className="about__skill about__skill--js">JS</div>
        <div className="about__skill about__skill--vue">Vue</div>
        <div className="about__skill about__skill--react">React</div>
        <div className="about__skill about__skill--ts">TS</div>
        <div className="about__skill about__skill--uxui">UX/UI</div>
        <div className="about__skill about__skill--git">Git</div>
        <div className="about__skill about__skill--express">Express</div>
        <div className="about__skill about__skill--postgres">Postgres</div>
      </div>
    </section>
  );
}

export default About;
