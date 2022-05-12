import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AppStorage } from "../../../../AppConstants/AppStorage";
import { cloudfunctions } from "../../../../Services/Appwrite";
import { projectsListState } from "../../../../State/DashboardScreenState";
import { EmptyBar } from "../ProjectsTab/Components";
import { ArticlesPane, ExplorePage, Footer, Post, TopBar } from "./Components";


export function ExploreTab() {
  const [projectList, setProjectList] = useRecoilState(projectsListState);
  const navigate = useNavigate();
 

  //fetches the public project list
  useEffect(() => {
    cloudfunctions.getSharedProjects(
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
    if (projectList.length === 0) return <EmptyBar title="Fetching..." message="please make sure you have proper connection"   />;
    return (
      <ArticlesPane>
        {projectList.map((elem, index) => {
          return (
            <Post
              key={index}
              postTitle={elem.title}
              postDescription={elem.description}
              postThumb={elem.thumbnail}
              onClick={openProject}
            />
          );
        })}
      </ArticlesPane>
    );
  };

  return (
    <ExplorePage>
      <TopBar>
        <h1>Explore</h1>
      </TopBar>
      
        {loadProjects()}
     
      <Footer></Footer>
    </ExplorePage>
  );
}
