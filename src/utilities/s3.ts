require("dotenv").config();
const AWS = require("aws-sdk");
const uuid = require("uuid").v4;
import * as crypto from "crypto"
const { promisify } = require("util");
const randomBytes = promisify(crypto.randomBytes);


export const presignedURL = async (req: any, res: any) => {
    try {

        await AWS.config.update({ region: "us-east-1" });


        const s3 = new AWS.S3({
            signatureVersion: "v4",
        });

        // to see the content of the bucket
        // const response = await s3
        //   .listObjects({
        //     Bucket: "ts-shopping-cart",
        //   })
        //   .promise();

        // to add a file
        //   const param = {
        //     Bucket:"ts-shopping-cart",
        //     Key: `uplads/${uuid()}-${file.originalname}`,
        //     Body: file.buffer
        //   }
        // return await s3.upload(param).promise();
        const rawBytes = await randomBytes(16);
        const imageName = rawBytes.toString("hex");

        const params = {
            Bucket: "ts-shopping-cart",
            Key: imageName,
            Expires: 3600,
        };

        const response = await s3.getSignedUrl("putObject", params);


        // const imageUrl = response.split("?")[0];
        res.send(response);

    } catch (e) {
        console.log(e);
        res.send("There was some kind of an error")
    }

};

