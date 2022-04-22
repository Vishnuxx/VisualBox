import { ContentPanel, CreateButton, ProjectItem, TopBar } from "./Components";

export function ProjectsTab() {
    return (
      <section className="projectsTab">
        <TopBar>
          <h1>Projects</h1>
          <CreateButton></CreateButton>
        </TopBar>
        <ContentPanel>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
          <ProjectItem></ProjectItem>
        </ContentPanel>
      </section>
    );
}