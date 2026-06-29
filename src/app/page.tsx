import { redirect } from "next/navigation";

// The clone root is /gcc; send the bare root there.
export default function RootPage() {
  redirect("/gcc");
}
