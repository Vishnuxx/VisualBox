import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AppStorage } from "../../../../AppConstants/AppStorage";
import { cloudfunctions } from "../../../../Services/Appwrite";
import { projectsListState } from "../../../../State/DashboardScreenState";
import {
  ContentPanel,
  CreateButton,
  EmptyBar,
  ProjectItem,
  ProjectsPage,
  TopBar,
} from "./Components";

export function ProjectsTab() {
  const [projectList, setProjectList] = useRecoilState(projectsListState);
  const navigate = useNavigate();

  //fetches the project list
  useEffect(() => {
    cloudfunctions.getPrivateProjects(
      (projectlist) => {
        console.log(projectlist);
        setProjectList(projectlist);
      },
      (error) => {
        setProjectList([]);
        console.log(error);
      }
    );
  }, []);

  const openProject = () => {
    AppStorage.viewAs("project");
    navigate("/view", {
      projectid: projectList.projectdata,
    });
  };

  //loads project from projectlist
  const loadProjects = () => {
    if (projectList.length === 0) return <EmptyBar title="You havent created any projects." message="Click create button to create project"/>;
    return (
      <ContentPanel>
        {projectList.map((elem, index) => {
          return (
            <ProjectItem
              onClick={() => openProject()}
              key={index}
              postThumb=""
              postTitle={elem.title}
              postDescription={elem.description}
            ></ProjectItem>
          );
        })}
      </ContentPanel>
    );
  };

  return (
    <ProjectsPage>
      <TopBar>
        <CreateButton></CreateButton>
      </TopBar>
      {loadProjects()}
    </ProjectsPage>
  );
}
