import { createUploadthing, type FileRouter } from "uploadthing/next";
import { createClient } from "@/utils/supabase/server";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  submissionUploader: f({ 
    pdf: { maxFileSize: "16MB" }
  })
    .middleware(async ({ req }) => {
      const supabase = await createClient();
      const { data: { user }, error } = await supabase.auth.getUser();
 
      if (error || !user) {
        throw new Error("Unauthorized");
      }
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
 
      // Update user's submissionLink in database
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user/submission`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            userId: metadata.userId,
            submissionLink: file.ufsUrl
          }),
        });

        if (!response.ok) {
          console.error('Failed to update submission link in database');
        }
      } catch (error) {
        console.error('Error updating submission link:', error);
      }
 
      return { uploadedBy: metadata.userId, url: file.url };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;