import React from "react";

let pict = {
  border: "black solid 1px",
};
const ProfilePhoto = () => {
  return (
    <div className="con">
      <img style={pict} src="/me.jpg" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        voluptatem laudantium obcaecati vel quia porro cupiditate quae! Ab
        exercitationem distinctio quas consequatur, cum consequuntur optio
        asperiores. Aspernatur, sed! Delectus, aperiam?
      </p>
    </div>
  );
};

export default ProfilePhoto;
