import Text from "@/components/common/Text";
import { useSession } from "@/hooks/useSession";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();

  return (
    <div>
      <div>{session?.user.user_metadata.name}</div>
      <Text typography="grey-description">계획적인 직장인</Text>
    </div>
  );
};

export default Profile;
