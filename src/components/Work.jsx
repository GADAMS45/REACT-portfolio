import React from "react";
import Project from "./Project";

function Work() {
    const projects = [
        {
            title: "workday",
            description: "Click Here",
            link: "https://gadams45.github.io/workdayscheduler/",
            id: "project-1"
        },
        {
            title: "Coding Quiz",
            description: "Click Here",
            link: "https://gadams45.github.io/Coding-Quiz//",
            id: "project-2"
        },
        {
            title: "Note Taker",
            description: "Click Here",
            link: "https://github.com/GADAMS45/Note-Taker",
            id: "project-3"
        },
        {
            title: "Employee Tracker",
            description: "Click Here",
            link: "https://github.com/GADAMS45/Employee-tracker",
            id: "project-4"
        },
        {
            title: "Weather Dashboard",
            description: "Click Here",
            link: "https://gadams45.github.io/WeatherDashboard/",
            id: "project-5"
        }
    ]


    return (
        <section id="work">
            <h2>Work</h2>
            <div>
                <div class="first-row">
                    <Project project={projects[0]} />
                </div>

                <div class="second-row">
                    <Project project={projects[1]}/>
                    <Project  project={projects[2]}/>

                </div>

                <div class="third-row">
                    <Project  project={projects[3]}/>
                    <Project  project={projects[4]}/>

                </div>
            </div>
        </section>

    )
}

export default Work;