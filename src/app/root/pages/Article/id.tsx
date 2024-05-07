import { NotFound } from "@/components/not-found";
// import { useParams } from "react-router-dom";

export default function ArticleID() {
  // const { id } = useParams();
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
