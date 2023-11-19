import { TARGET_URL } from "../setting";

const ARTICLE_PAGE_URL = TARGET_URL + "article.html";

test("check ogp", async () => {
  await page.goto(ARTICLE_PAGE_URL);

  const ogUrl = await page.$eval('meta[property="og:url"]', (el) => {
    return (el as HTMLMetaElement).content;
  });
  const ogTitle = await page.$eval('meta[property="og:title"]', (el) => {
    return (el as HTMLMetaElement).content;
  });
  const ogDescription = await page.$eval(
    'meta[property="og:description"]',
    (el) => {
      return (el as HTMLMetaElement).content;
    }
  );
  const ogImage = await page.$eval('meta[property="og:image"]', (el) => {
    return (el as HTMLMetaElement).content;
  });
  const ogType = await page.$eval('meta[property="og:type"]', (el) => {
    return (el as HTMLMetaElement).content;
  });
  const ogSiteName = await page.$eval('meta[property="og:site_name"]', (el) => {
    return (el as HTMLMetaElement).content;
  });

  expect(ogUrl).toBe(ARTICLE_PAGE_URL);
  expect(ogTitle).toBe("Let's master CSS flexboxes!");
  expect(ogDescription).toBe(
    "Introducing the developmental use of flexboxes in CSS"
  );
  expect(ogImage).toBe(TARGET_URL + "images/article_thumbnail.png");
  expect(ogType).toBe("article");
  expect(ogSiteName).toBe("Progate Path Developers Blog");
});
