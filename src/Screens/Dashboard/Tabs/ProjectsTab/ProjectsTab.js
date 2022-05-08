import { ContentPanel, CreateButton, EmptyBar, ProjectItem, ProjectsPage, TopBar } from "./Components";

export function ProjectsTab() {

     const projects =  [23,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]

     const loadProjects = (list) => {
       if(list.length === 0) return <EmptyBar/>
       return list.map((elem , index)=> {
         return <ProjectItem key={index} postThumb="" postTitle="project sdfsdfsd f ds fs df s  f sd fsd f sd fs  fsdf sd f sf sd fs  fs1" postDescription="description          dfe sdf sf sfd sdf ds f sd f ds f s f s dfsdf sdf sdfds "></ProjectItem>;
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