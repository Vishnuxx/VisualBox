import { ContentPanel, CreateButton, ProjectItem, ProjectsPage, TopBar } from "./Components";

export function ProjectsTab() {
    return (
      <ProjectsPage>
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
      </ProjectsPage>
    );
}