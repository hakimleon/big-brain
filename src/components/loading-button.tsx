import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const LoadingButton = ({
  children,
  stateLoading,
  LoadingText,
}: {
  children: React.ReactNode;
  stateLoading: boolean;
  LoadingText: string;
}) => {
  return (
    <Button type="submit" disabled={stateLoading}>
      {stateLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {stateLoading ? LoadingText : children}
    </Button>
  );
};

export default LoadingButton;
