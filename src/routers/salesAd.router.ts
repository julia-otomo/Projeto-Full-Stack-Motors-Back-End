import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";

const salesAd: Router = Router();

salesAd.post("", controllers.salesAd.create);
salesAd.get("", controllers.salesAd.readAll);
salesAd.get("/:id", controllers.salesAd.readById);
salesAd.patch("/:id", controllers.salesAd.updateById);
salesAd.delete(
    "/:id",
    middlewares.existsSalesAdId,
    controllers.salesAd.deleteById
);

salesAd.post("/:id/images", controllers.salesAd.createImage);
salesAd.patch("/:id/images/:imageId", controllers.salesAd.updateImageById);

export default salesAd;
