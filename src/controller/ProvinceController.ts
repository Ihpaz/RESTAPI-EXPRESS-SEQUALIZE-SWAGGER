import { Request,Response } from "express";
import Province from "../db/models/Province";
import { Get, Route } from "tsoa";


const GetProvince =async (req:Request,res:Response):Promise<Response> => {
    try {
        const province= await Province.findAll({
            
        })

        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: province
        })

    } catch (error:any) {
        if(error != null && error instanceof Error){
            return res.status(500).send({
				status: 500,
				message: error.message,
				errors: error
			});
		}

		return res.status(500).send({
			status: 500,
			message: "Internal server error",
			errors: error
		});
    }
}




export default {GetProvince}