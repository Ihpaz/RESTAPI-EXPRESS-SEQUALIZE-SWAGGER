import express from "express";
import ProvinceController from "../controller/ProvinceController";
import { Get, Route } from "tsoa";




const router= express.Router();


/**
 * @openapi
 * /province:
 *   get:
 *     description: get all province!
 *     responses:
 *       200:
 *         description: Returns all province.
 */
router.get("/province", ProvinceController.GetProvince);


/**
 * @openapi
 * /province:
 *   post:
 *     description: create province!
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               provinceName:
 *                 type: string
 *             required:
 *               - provinceName
 *     responses:
 *       201:
 *         description: success.
 */
router.post("/province", ProvinceController.CreateProvince);

/**
 * @openapi
 * /province/{id}:
 *   post:
 *     description: update province!
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               provinceName:
 *                 type: string
 *             required:
 *               - provinceName
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Edit Province by id
 *          schema:
 *               type: number
 *     responses:
 *       200:
 *         description: success.
 */
router.post("/province/:id", ProvinceController.UpdateProvince);

/**
 * @openapi
 * /province/{id}:
 *   delete:
 *     description: delete province by id!
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Delete Province by id
 *          schema:
 *               type: number
 *     responses:
 *       200:
 *         description: success.
 */
router.delete("/province/:id", ProvinceController.DeleteProvince);

/**
 * @openapi
 * /province/{id}:
 *   get:
 *     description: get province by id !
 *     parameters:
 *        - name: id
 *          in: path
 *          description: Get Province by id
 *          schema:
 *               type: number
 *     responses:
 *       200:
 *         description: success.
 */
router.get("/province/:id", ProvinceController.GetProvinceById);



export default router