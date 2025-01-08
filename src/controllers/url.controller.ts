import { Request, Response } from "express";
import { shortenUrl, getOriginalUrl, getTopDomains } from "../services/url.service";

export const shortenUrlController = (req: Request, res: Response) => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: "Original URL is required." });
  }

  const shortUrl = shortenUrl(originalUrl);
  res.json({ originalUrl, shortUrl });
};

export const redirectUrlController = (req: Request, res: Response) => {
  const { shortUrl } = req.params;
  const originalUrl = getOriginalUrl(shortUrl);

  if (!originalUrl) {
    return res.status(404).json({ error: "Short URL not found." });
  }

  res.redirect(originalUrl);
};

export const getTopDomainsController = (req: Request, res: Response) => {
  const topDomains = getTopDomains();
  res.json(topDomains);
};
