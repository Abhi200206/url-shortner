import { shortenUrl, getOriginalUrl, getTopDomains } from "../services/url.service";

describe("URL Service", () => {
  it("should shorten a URL", () => {
    const originalUrl = "https://example.com";
    const shortUrl = shortenUrl(originalUrl);

    expect(shortUrl).toBeDefined();
    expect(getOriginalUrl(shortUrl)).toBe(originalUrl);
  });

  it("should return top domains", () => {
    shortenUrl("https://youtube.com/video1");
    shortenUrl("https://youtube.com/video2");
    shortenUrl("https://google.com/search");

    const topDomains = getTopDomains();
    expect(topDomains[0].domain).toBe("youtube.com");
  });
});
