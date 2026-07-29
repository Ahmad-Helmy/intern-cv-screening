import React from "react";
import "./candidate-details.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import Badge from "../../UI/Atoms/Badge/Badge";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Title from "../../UI/Atoms/Title/Title";

const CandidateDetails: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="details-conatiner">
        <div className="back-btn">
          <BackButton
            label="Back to Candidates"
            onClick={() => window.history.back()}
          />
        </div>

        <section className="candidate-summary" aria-label="Mohammed Khalil">
          <CardInfo title="Mohammed Khalil">
            <div className="candidate-info">
              <span>mohammed.khalil@university.edu</span>
              <span className="candidate-info__separator">·</span>
              <span>+351 942 318 705</span>
              <span className="candidate-info__separator" aria-hidden="true">
                ·
              </span>
              <span>Full-Stack</span>
            </div>

            <div className="candidate-status" aria-label="Candidate status">
              <Badge text="Nominated" type="nominated" />
              <Badge text="Video: Pass" type="evaluated" />
              <Badge text="Strongly Recommended" type="nominated" />
            </div>
          </CardInfo>
        </section>

        <div className="details-main-container">
          <div className="left-container">
            <section aria-label="Academic Profile">
              <CardInfo title="Academic Profile">
                <div className="field-row">
                  <p className="description">
                    University: The American University in Cairo
                  </p>
                </div>
                <div className="field-row">
                  <p className="description">Major: Computer Science</p>
                </div>
                <div className="field-row">
                  <p className="description">GPA: 3.78</p>
                </div>
                <div className="field-row">
                  <p className="description">Graduation Year: 2027</p>
                </div>
              </CardInfo>
            </section>

            <section aria-label="Skills">
              <CardInfo title="Skills">
                <div className="skills-badges">
                  <Badge text="Java" type="default" />
                  <Badge text="Spring Boot" type="default" />
                  <Badge text="TypeScript" type="default" />
                  <Badge text="React" type="default" />
                  <Badge text="PostgreSQL" type="default" />
                  <Badge text="Docker" type="default" />
                  <Badge text="AWS" type="default" />
                  <Badge text="REST APIs" type="default" />
                </div>
              </CardInfo>
            </section>

            <section aria-label="Languages">
              <CardInfo title="Languages">
                <p className="description">
                  Portuguese (Native), English (Fluent), Spanish (Intermediate)
                </p>
              </CardInfo>
            </section>

            <section aria-label="Projects">
              <CardInfo title="Projects">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      Built a full-stack e-commerce platform with React and
                      Spring Boot serving 1k+ mock orders.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Implemented a microservices-based ticketing system with
                      Docker and Kubernetes.
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="Experience">
              <CardInfo title="Experience">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      Summer intern at a fintech startup — maintained backend
                      services in Java.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Teaching assistant for an introductory programming course
                      (2 semesters).
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="Certifications">
              <CardInfo title="Certifications">
                <p className="description">No certifications listed</p>
              </CardInfo>
            </section>

            <section aria-label="Extracurricular">
              <CardInfo title="Extracurricular">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      President of the university coding club.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Hackathon finalist — built a sustainability tracking app
                      in 24h.
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="AI Evaluation Report">
              <CardInfo title="AI Evaluation Report">
                <p className="description">
                  Mohammed Khalil demonstrates strong alignment with the
                  Software Engineering 2026 criteria. Technical skills and
                  project work are the primary contributors to the overall
                  score, weighted against academic performance and
                  communication. The candidate&apos;s CV indicates 8 relevant
                  skills and 2 notable projects.
                </p>
              </CardInfo>
            </section>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default CandidateDetails;
