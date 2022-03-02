export const parsedLinksHeader = (linkHeader: any) => {
  const linkHeadersArray = linkHeader
    .split(", ")
    .map((header: any) => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map((header: any) => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl];
  });
  return Object.fromEntries(linkHeadersMap);
};
