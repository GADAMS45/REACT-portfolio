import React from "react";
import Project from "./Project";

function Work() {
    const projects = [
        {
            title: "workday",
            description: "HTML/CSS",
            link: "https://gadams45.github.io/workdayscheduler/",
            id: "project-1"
        },
        {
            title: "project2",
            description: "HTML/CSS",
            link: "https://gadams45.github.io/workdayscheduler/",
            id: "project-2"
        },
        {
            title: "project3",
            description: "HTML/CSS",
            link: "https://gadams45.github.io/workdayscheduler/",
            id: "project-3"
        },
        {
            title: "project4",
            description: "HTML/CSS",
            link: "https://gadams45.github.io/workdayscheduler/",
            id: "project-4"
        },
        {
            title: "project5",
            description: "HTML/CSS",
            link: "https://gadams45.github.io/workdayscheduler/",
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