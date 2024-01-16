import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useNavigate } from "@remix-run/react";

export default function IndexPage() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Remix ShadcnUI</CardTitle>
          <CardDescription>Select Examples : </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-2">
          <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          <Button onClick={() => navigate("/music")}>Music</Button>
          <Button onClick={() => navigate("/mail")}>Mail</Button>
          <Button onClick={() => navigate("/tasks")}>Task</Button>
          <Button onClick={() => navigate("/forms")}>Form</Button>
        </CardContent>
      </Card>
    </div>
  );
}
