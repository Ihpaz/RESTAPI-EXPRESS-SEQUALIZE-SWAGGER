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

const CreateProvince = async (req: Request, res: Response): Promise<Response> => {
	try {

		const { provinceName } = req.body;

		const create = await Province.create({
			provinceName
		});

		return res.status(201).send({
			status: 201,
			message: "Created",
			data: create
		});
	} catch (error:any) {
		if (error != null && error instanceof Error) {
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

const UpdateProvince = async (req: Request, res: Response): Promise<Response> => {
	try {

        console.log(req.params)

		const { id } = req.params;
		const { provinceName } = req.body;

		const province = await Province.findByPk(id);

		if (!province) {
			return res.status(404).send({
				status: 404,
				message: "Data Not Found",
				data: null
			});
		}

		province.provinceName = provinceName;
	

		await province.save();

		return res.status(200).send({
			status: 200,
			message: "OK",
			data: province
		});
	} catch (error: any) {
		if (error != null && error instanceof Error) {
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
};

const DeleteProvince = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		const province = await Province.findByPk(id);

		if (!province) {
			return res.status(404).send({
				status: 404,
				message: "Data Not Found",
				data: null
			});
		}

		await province.destroy();

		return res.status(200).send({
			status: 200,
			message: "Deleted",
			data: null
		});
	} catch (error:any) {
		if (error != null && error instanceof Error) {
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

const GetProvinceById = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { id } = req.params;

		const province = await Province.findByPk(id);

		if (!province) {
			return res.status(404).send({
				status: 404,
				message: "Data Not Found",
				data: null
			});
		}

		return res.status(200).send({
			status: 200,
			message: "OK",
			data: province
		});
	} catch (error:any) {
		if (error != null && error instanceof Error) {
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




export default {GetProvince,CreateProvince,UpdateProvince,DeleteProvince,GetProvinceById}