import { NotFound } from "@/components/not-found";

export default function Article() {
  return (
    <div>
      <NotFound
        message="The page is currently under development, please come back in some time."
        statusTextCode="Service Unavailable 503"
        mode="maintenance"
      />
    </div>
  );
}
