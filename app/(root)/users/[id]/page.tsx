interface UserProfilePageProps {
  params: {
    id: string;
  };
}
const UserProfilePage = ({ params }: UserProfilePageProps) => {
  return <div>UserProfilePage {params.id}</div>;
};

export default UserProfilePage;
