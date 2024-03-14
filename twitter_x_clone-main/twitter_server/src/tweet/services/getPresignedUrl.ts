import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

interface imageUpload {
  imgType: string;
  imgName: string;
  userID: string;
}

const getPresignedUrl = async (imagePayload: imageUpload) => {
  const allowedImagTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedImagTypes.includes(imagePayload.imgType)) {
    throw new Error("Unrecognized Type");
  }
  const clientParams = {
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACC_KEY!,
      secretAccessKey: process.env.AWS_SECRATE_KEY!,
    },
  };
  const getObjectParams = {
    Bucket: "twitter-dev-avik",
    ContentType: imagePayload.imgType,
    Key: `uploads/${imagePayload.userID}/tweets/${
      imagePayload.imgName
    }-${Date.now()}`,
  };
  const client = new S3Client(clientParams);
  const command = new PutObjectCommand(getObjectParams);

  try {
    const Signedurl = await getSignedUrl(client, command,{expiresIn:1000});
    return Signedurl;
  } catch (error) {
    console.log("error", error);
    throw new Error("Somthing got Wrong");
  }
};

export default getPresignedUrl;