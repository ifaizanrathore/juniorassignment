"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ReactQuill with no SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

export default function RichTextEditor({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
}
