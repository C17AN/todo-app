import Home from "@/components/pages/home";
import { useSession } from "@/hooks/useSession";

// auth guard 등 페이지 단위로 적용해야 할 로직이 있을 경우 이곳에 작성한다.
const HomePage = () => {
  useSession();

  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
