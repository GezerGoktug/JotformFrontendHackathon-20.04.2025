import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="    text-center   h-screen col-center gap-3   ">
      <Ban className="size-56" />
      <h4 className="text-4xl sm:text-6xl font-bold">Oops... Not Founded</h4>
      <p className="text-lg sm:text-xl font-semibold">
        Something went wrong. Page not found.
      </p>
      <Button variant="destructive" onClick={() => navigate(-1)}>
        Return previous page
      </Button>
    </div>
  );
};

export default Error;
