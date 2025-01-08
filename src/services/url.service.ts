const urlMap = new Map<string, string>();
const domainMetrics = new Map<string, number>();

export const shortenUrl = (originalUrl: string): string => {

  if (urlMap.has(originalUrl)) {
    return urlMap.get(originalUrl)!;
  }

  const shortUrl = Math.random().toString(36).substring(2, 8);
  urlMap.set(originalUrl, shortUrl);
  urlMap.set(shortUrl, originalUrl);

  
  const domain = new URL(originalUrl).hostname;
  domainMetrics.set(domain, (domainMetrics.get(domain) || 0) + 1);

  return shortUrl;
};

export const getOriginalUrl = (shortUrl: string): string | null => {
  return urlMap.get(shortUrl) || null;
};

export const getTopDomains = (): { domain: string; count: number }[] => {
   
    return Array.from(domainMetrics.entries())
      .sort(([, countA], [, countB]) => countB - countA) 
      .slice(0, 3)
      .map(([domain, count]) => ({ domain, count })); 
  };
  
