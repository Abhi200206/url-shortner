import { Router } from "express";
import {
  shortenUrlController,
  redirectUrlController,
  getTopDomainsController,
} from "../controllers/url.controller";

const router = Router();
//@ts-ignore
router.post("/shorten", shortenUrlController);
//@ts-ignore
router.get("/:shortUrl", redirectUrlController);
router.get("/metrics/top-domains", getTopDomainsController);

export default router;
