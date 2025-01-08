import { Router } from "express";
import {
  shortenUrlController,
  redirectUrlController,
  getTopDomainsController,
} from "../controllers/url.controller";

const router = Router();

router.post("/shorten", shortenUrlController);
router.get("/:shortUrl", redirectUrlController);
router.get("/metrics/top-domains", getTopDomainsController);

export default router;
