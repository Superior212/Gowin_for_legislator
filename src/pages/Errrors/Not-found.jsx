import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundError() {
  const navigate = useNavigate();
  return (
    <div className="h-svh bg-[#F7F7F7]">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>
        <p className="text-center text-muted-foreground">
          It seems like the page you're looking for <br />
          does not exist or might have been removed.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button
            className="bg-[#120A32] hover:bg-[#120A3280] text-white"
            onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
