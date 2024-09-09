import Content from "@/components/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Userloging from "@/components/userloging";
import React from "react";
import Header from "@/components/header";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="bg-background text-foreground  min-h-screen flex flex-col items-center justify-center ">
      <Card>
        <CardContent>User Info</CardContent>
      </Card>
      <Content />
    </div>
  );
}
