import { Route, Routes, useNavigate } from "react-router-dom";
import style from "./manageteams.module.css"

export function ManageTeams(props) {
   
    return (
      <section className={style.manageTeams}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <div className={style.addteamcontainer}>
                  <input
                    className={style.teamNameInput}
                    type="text"
                    placeholder="TeamName"
                  />
                  <button className={style.addTeamButton}>Add Team</button>
                </div>

                <TeamListItem name="Team1"></TeamListItem>
                <TeamListItem name="Team2"></TeamListItem>
                <TeamListItem name="Team3"></TeamListItem>
              </>
            }
          />
          <Route path='team' element={<TeamMembersSection />} />
        </Routes>

        {/* <TeamListItem></TeamListItem>
        <TeamListItem></TeamListItem> */}
      </section>
    );
}


function TeamListItem(props) {
    const navigate =  useNavigate()
    const teamName = props.name;
    const click = () => {
        navigate("team")
    }

    return <div className={style.teamListItem} onClick={click}>
        <p>{teamName}</p>
    </div>
}


//TEAM MEMBERS SECTION


export function TeamMembersSection(props) {
    return (
      <div>
        <div className={style.addteamcontainer}>
          <input
            className={style.teamNameInput}
            type="text"
            placeholder="Member ID"
          />
          <button className={style.addTeamButton}>Add Member</button>
        </div>
        <div>
          <Member name="User12" id="34" />
          <Member name="User3" id="53" />
          <Member name="user4" id="65" />
          <Member name="user7" id="23" />
          <Member name="user9" id="98" />
          
        </div>
      </div>
    );
}

function Member(props) {
    return (
      <div className={style.member}>
        <div className={style.memberdetail}>
          <p className={style.memberName}>{props.name}</p>
          <p className={style.memberId}>{props.id}</p>
        </div>

        <img
          alt=""
          className={style.deleteMemberButton}
          src="https://img.icons8.com/plumpy/24/000000/cancel.png"
        />
      </div>
    );
}