"use client";

import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { api } from "@/convex/_generated/api";

type Props = {};

const Content = (props: Props) => {
  return (
    <div>
      <Authenticated>
        <Chat />
      </Authenticated>
      <Unauthenticated>Porfavor inicia sesion</Unauthenticated>
    </div>
  );
};

export default Content;

function Chat({}: Props) {
  const [text, setText] = useState("");

  const messages = useQuery(api.messages.list);
  const sendMenssage = useMutation(api.messages.send);

  async function handdleSendMessage() {
    event?.preventDefault();
    await sendMenssage({ body: text });
    setText("");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Chat Probien</h1>
      <span>{text}</span>
      <div className="my-4 border-2 border-black min-h-[400px] flex flex-col gap-2 p-4">
        {messages?.map((message) => (
          <div className="flex gap-2" key={message._id}>
            <span className="font-bold text-lg">{message.author}:</span>{" "}
            {message.body} -{" "}
            {new Date(message._creationTime).toLocaleTimeString()}
          </div>
        ))}
      </div>
      <form className="flex gap-2 " onSubmit={handdleSendMessage}>
        <Input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Escribe aqui"
        />
        <Button>Enviar</Button>
      </form>
    </div>
  );
}
