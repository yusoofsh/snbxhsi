type QueryParams = {
  [key: string]: string | number | undefined;
};

const constructUrlArticleList = (params: QueryParams) => {
  const baseUrl = "https://hsi-sandbox.vercel.app/api/articles";
  const queryParams = new URLSearchParams();

  for (const key in params) {
    if (params[key] !== undefined) {
      queryParams.append(key, String(params[key]));
    }
  }

  return `${baseUrl}?${queryParams.toString()}`;
};

export { constructUrlArticleList };
