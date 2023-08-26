import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to={"/"} rel="noopener noreferrer" className="w-fit">
        <Button>Test</Button>
      </Link>
    </div>
  );
};

export { Home };
