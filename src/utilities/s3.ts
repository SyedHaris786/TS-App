require("dotenv").config();
const AWS = require("aws-sdk");
import * as crypto from "crypto"
const { promisify } = require("util");
// const randomBytes = promisify(crypto.randomBytes);
// import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
// import { S3Client } from "@aws-sdk/client-s3";

export const presignedURL = async (req: any, res: any) => {
    try {

        // const rawBytes = await randomBytes(16);
        // const imageName = rawBytes.toString("hex");


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

        params.Fields.key = req.query.filename || 'filename';
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

