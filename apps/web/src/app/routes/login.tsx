import { Button } from "../components/Button";
import { GoogleIcon } from "../icons";

export function Index() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center w-full h-full">
      <h1 className="text-3xl font-bold">todoit</h1>
      <Button icon={<GoogleIcon />}>Login with google</Button>
    </div>
  );
}
