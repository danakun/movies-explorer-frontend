import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="project-info limits-container" id="about-project">
      <h2 className="project-info__title section-title">О проекте</h2>
      <div className="project-info__grid">
        <div className="project-info__element">
          <h3 className="project-info__header" >Дипломный проект включал 5 этапов</h3>
          <p className="project-info__copy section-text">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="project-info__element">
          <h3 className="project-info__header">На выполнение диплома ушло 5 недель</h3>
          <p className=" project-info__copy section-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div>
        <div className="project-info-bar">
          <div className="project-info__backend">1 Неделя</div>
          <div className="project-info__frontend">4 Недели</div>
          <div className="project-info__text">Back-end</div>
          <div className="project-info__text">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;