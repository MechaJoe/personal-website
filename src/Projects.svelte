<script>
  import Project from "./Project.svelte"

  const projectTitles = ['concourse', 'MusicBar']
  const technologies = [
    'React, Express, Passport.js, Tailwind CSS, Amazon RDS',
    'React, Express, Material UI, Amazon RDS'
  ]
  const descriptions = [
    `An EdTech platform for students to search for teammates and form groups for
     classes, while learning about their classmates in the process. Implemented features including
     profile creation, authentication via Google OIDC, chat, and instructor management mode. Built
     for Penn CIS Senior Design (CIS 4000/4010).`,
    `Webapp for users to query for Spotify songs and musical artists and obtain similar music
     recommendations. Implemented federated user authentication using Passport.js, styled website
     using Material UI, and hosted music database on Amazon RDS. Built for CIS 4500.`]

  const projects = projectTitles.map((v, i) => [v, technologies[i], descriptions[i]])
</script>

<div class="
  p-6
  flex flex-col
  bg-black
  text-white
">
  <h1 class="pt-20">PROJECTS</h1>
  {#each projects as project}
    <Project title={project[0]} technologies={project[1]} description={project[2]} />
  {/each}
</div>