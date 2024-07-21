// import { GoIssueClosed, GoIssueOpened, GoComment } from "react-icons/go";
// import { Link } from "react-router-dom";
// import { relativeDate } from "../helpers/relativeDate";
// import { useUserData } from "../helpers/useUserData";

// export const IssueItem = ({
//   title,
//   number,
//   assignee,
//   commentCount,
//   createdBy,
//   createdDate,
//   labels,
//   status,
// }) => {
//   const assigneeUser = useUserData(assignee);
//   const createdByUser = useUserData(createdBy);

//   console.log('user',assigneeUser);
  

//   return (
//     <li>
//       <div>
//         {status === "done" || "cancelled" ? (
//           <GoIssueClosed style={{ color: "red" }} />
//         ) : (
//           <GoIssueOpened style={{ color: "green" }} />
//         )}
//       </div>
//       <div className="issue-content">
//         <span>
//           <Link to={`/issue/${number}`}>{title}</Link>{" "}
//           {labels.map((label) => (
//             <span key={label} className={`label red`}>
//               {label}
//             </span>
//           ))}
//         </span>

//         <small>
//           #{number} opened {relativeDate(createdDate)}{" "}
//           {createdByUser.isSuccess ? `by  ${createdByUser.data.name}` : null}
//         </small>
//       </div>
//       {assignee ? (
//         <img
//           src={assigneeUser.isSuccess ? assigneeUser.profilePictureUrl: ""}
//           className="assigned-to"
//           alt={`Assign-to ${
//             assigneeUser.isSuccess ? assigneeUser.data.name : "avatar"
//           }`}
//         />
//       ) : null}
//       <span>
//         {commentCount > 0 ? (
//           <>
//             <GoComment /> {commentCount}
//           </>
//         ) : null}
//       </span>
//     </li>
//   );
// };


import { GoIssueClosed, GoIssueOpened, GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../helpers/useUserData";

export const IssueItem = ({
  title,
  number,
  assignee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) => {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);

  console.log("user", assigneeUser);

  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoIssueOpened style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>{" "}
          {labels.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>

        <small>
          #{number} opened {relativeDate(createdDate)}{" "}
          {createdByUser.isSuccess ? `by ${createdByUser.data.name}` : null}
        </small>
      </div>
      {assignee ? (
        <img
          src={
            assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ""
          }
          className="assigned-to"
          alt={`Assigned to ${
            assigneeUser.isSuccess ? assigneeUser.data.name : "avatar"
          }`}
        />
      ) : null}
      <span>
        {commentCount > 0 ? (
          <>
            <GoComment /> {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
};
