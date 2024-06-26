// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

export default function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to continue?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 6:00 PM"
          blog="Nice post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Aug 20 at 4:35 PM"
          blog="Very good contents!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Yesterday at 11:00 AM"
          blog="Looks okay"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}
//export default App;
// 5) Show the component on the screen

