import express from "express";
import ProvinceController from "../controller/ProvinceController";
import { Get, Route } from "tsoa";


const router= express.Router();


/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns all province.
 */
router.get("/province", ProvinceController.GetProvince);

// router.get("/province", async (_req, res) => {
//     const controller = new ProvinceController();
//     const response = await controller.getProvince();
//     return res.send(response);
//   });


export default router