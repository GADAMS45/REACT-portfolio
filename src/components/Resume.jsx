import React from "react";
import { useState } from "react";

function Resume () {
    return (
        <section id="resume">
        <h2>Resume</h2>
        <div>
        <object data="/resume.pdf" type="application/pdf" width="100%" height="500px">
      <p>Unable to display PDF file. <a href="/resume.pdf">Download</a> instead.</p>
    </object>
        </div>
      </section>

    )
}

export default Resume;