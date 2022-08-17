import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const msg = {
		to: process.env.ADMIN_EMAIL,
		from: "info@newcode.be",
		subject: req.body.subject,
		html: req.body.message,
	};

	try {
		await sgMail.send(msg);
		res.status(200).json({
			message: "Mail sent",
		});
	} catch (err: any) {
		console.log(err?.code, err?.response?.body);
		res.status(500).json({
			error: err,
		});
	}
}
