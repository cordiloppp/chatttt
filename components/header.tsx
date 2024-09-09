"use client";

import Content from "@/components/content";
import { Card } from "@/components/ui/card";
import Userloging from "@/components/userloging";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="w-full min-h-16 bg-gray-400 text-gray-200 p-2 flex justify-center">
      <Card className="ml-auto flex items-center justify-center p-1 bg-white shadow-lg rounded-lg w-14">
        <div className="text-center">
          <Userloging />
        </div>
      </Card>
    </nav>
  );
}
