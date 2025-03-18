import React from "react";
import { UserImage, UserInformation } from ".";
import { users } from "../../../../data/appStoreData";

function ProfileSection() {
  const user = users[0];

  return (
    <section className="p-5">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <div className="space-y-8">
        <UserImage user={user} />
        <UserInformation user={user} />
      </div>
    </section>
  );
}

export default ProfileSection;
