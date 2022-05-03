import { ContentPanel, CreateButton, EmptyBar, ProjectItem, ProjectsPage, TopBar } from "./Components";

export function ProjectsTab() {

     const projects = []// [23,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]

     const loadProjects = (list) => {
       if(list.length === 0) return <EmptyBar/>
       return list.map((elem , index)=> {
         return <ProjectItem key={index}></ProjectItem>;
       })
     }
    return (
      <ProjectsPage>
        <TopBar>
          <CreateButton></CreateButton>
        </TopBar>
        <ContentPanel>
          {loadProjects(projects)}
          
          {/* <ProjectItem></ProjectItem>
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
          <ProjectItem></ProjectItem> */}
        </ContentPanel>
      </ProjectsPage>
    );
}