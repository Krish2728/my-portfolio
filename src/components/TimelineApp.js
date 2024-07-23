import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool,faCalendarDays,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import colorSharp2 from "../assets/img/color-sharp2.png";
export const TimelineApp= () =>{
  return (
    <div className="cont1" id="education">
    <div className="container2">
    <h1 id="ed">My Education</h1>
    <div className="row">
        <div className="col-md-12">
            <div className="main-timeline">
                <div className="timeline">
                    <div className="timeline-content">
                        <div className="timeline-icon">
                        <FontAwesomeIcon id="i" icon={faGraduationCap} />
                        </div>
                        <span className="timeline-year">2022-present</span>
                        <h3 className="title">Bachelors of Engineering</h3>
                        <p className="description">
                        I am currently pursuing a Bachelor of Engineering degree in Computer Engineering at TIET, Patiala.
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <div className="timeline-icon">
                        <FontAwesomeIcon id="i" icon={faCalendarDays} />
                        </div>
                        <span className="timeline-year">2022</span>
                        <h3 className="title">Preparation for Jee</h3>
                        <p className="description">
                        I diligently prepared for JEE Mains and various other competitive exams in past year, successfully qualifying in all of them. I achieved an impressive 96%ile in JEE Mains.
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <div className="timeline-icon">
                        <FontAwesomeIcon id="i" icon={faSchool} />
                        </div>
                        <span className="timeline-year">2019-2021</span>
                        <h3 className="title">Intermediate</h3>
                        <p className="description">
                        I achieved a distinguished score of 93.4% in Class 12, marking my graduation from Vikash Residential School with excellence.
                        </p>
                    </div>
                </div>
                <div className="timeline">
                    <div className="timeline-content">
                        <div className="timeline-icon">
                        <FontAwesomeIcon id="i" icon={faSchool} />
                        </div>
                        <span className="timeline-year">2009-2019</span>
                        <h3 className="title">Matriculation</h3>
                        <p className="description">
                        I completed my Class 10th from D.A.V. Public School with a score of 91.6%.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
  );
}
