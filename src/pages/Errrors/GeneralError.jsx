import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function GeneralError({ className, minimal = false }) {
  const navigate = useNavigate();

  return (
    <div className={cn("h-svh w-full", className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <h1 className="text-[7rem] font-bold leading-tight">500</h1>
        )}
        <span className="font-medium">Oops! Something went wrong {`:')`}</span>
        <p className="text-center text-muted-foreground">
          We apologize for the inconvenience. <br /> Please try again later.
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button   className="bg-[#120A32] hover:bg-[#120A3280] text-white" onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        )}
      </div>
    </div>
  );
}
