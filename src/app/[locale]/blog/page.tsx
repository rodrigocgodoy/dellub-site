import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

import { Switch } from "@/components/switch";

interface Blog {
  id: string;
  attributes: {
    title: string;
    body: string;
    locale: string;
    date: string;
  };
}

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const result = await axios.get(`http://localhost:1337/api/blogs?locale=${locale}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (
    <div>
      <Switch />

      {result.data.data.map((post: Blog) => (
        <div key={post.id}>
          <h2>{post.attributes.title}</h2>
          <div>
            <ReactMarkdown>{post.attributes.body}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
