import * as dotenv from 'dotenv'
dotenv.config()
import AWS from "aws-sdk";
import { Request, Response } from 'express';

// import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
// import { S3Client } from "@aws-sdk/client-s3";

export const presignedURL = async (req: Request, res: Response) => {
    try {
        const s3 = new AWS.S3({
            signatureVersion: "v4",
        });

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Expires: 3600, //time to expire in seconds

            Fields: {
                key: "test"
            },
            Conditions: [
                ['content-length-range', 0, 100000]
            ]
        };

        // params.Fields.key = req.query.filename || 'filename';
        s3.createPresignedPost(params, function (err: any, data: any) {
            if (err) {
                console.log("Error", err);
                res.status(500).json({
                    msg: "Error",
                    Error: "Error creating presigned URL"
                });
            } else {
                res.status(200).json(data);
            }
        });

    } catch (e) {
        console.log(e);
        res.send("There was some kind of an error")
    }
};

