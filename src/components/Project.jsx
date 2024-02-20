import React from "react";

function Project({project}) {
    return (
        <a href={project.link} id={project.id} class="box">
            <div class="smaller-box">
                <h3>{project.title}</h3>
                <h4>{project.description}</h4>
            </div>
        </a>
    )

}

export default Project;