let projects = [
    {title: "Project 1", url: "#project1"},
    {title: "Project 2", url: "#project2"},
  ]
  
  document.querySelector('nav').addEventListener('click', (e) => {
    if(e.target.tagName == 'A' && e.target.textContent == 'Projects') {
      let projectSection = document.getElementById('projects');
      projectSection.innerHTML = "";  // clear the section
      
      projects.forEach((project) => {
        let div = document.createElement('div');
        let a = document.createElement('a');
        a.href = project.url;
        a.textContent = project.title;
        div.appendChild(a);
        projectSection.appendChild(div);
      });
      
      e.preventDefault();
    }
  });
  