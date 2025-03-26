import React, { useState } from "react";
import { UserImage, UserInformation } from ".";
import { getUserById } from "../../../../services/userService";

function Profile() {
  const [user] = useState(getUserById(1));
  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div>
        <div className="mb-4">
          <UserImage user={user} />
        </div>
        <UserInformation user={user} />
      </div>
    </section>
  );
}

export default Profile;
