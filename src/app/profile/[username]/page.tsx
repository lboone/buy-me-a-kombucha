"use client";
import { useRouter } from "next/navigation";

const UserProfilePage = (args: {
  params: { username: string }
}) => {
  const { username } = args.params;
  const router = useRouter();

  if (!username) {
    router.push("/profile");
  }

  return <div>Hello {username}</div>;
};

export default UserProfilePage;
