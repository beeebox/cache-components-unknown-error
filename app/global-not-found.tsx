import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Global Not Found",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <h1>Global Not Found</h1>
        <Suspense>
          <Year />
        </Suspense>
      </body>
    </html>
  );
}

function Year() {
  return (
    <Suspense>
      {new Date().getFullYear()}
    </Suspense>
  )
}