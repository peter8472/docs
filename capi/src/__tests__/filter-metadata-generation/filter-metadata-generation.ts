import * as c from "../..";

test("filter metadata generation", async () => {
  await c.API({
    cwd: __dirname,
    contentDir: "content",
    filters: {
      platform: ["android", "ios", "js"],
      framework: ["angular", "ionic", "react", "react-native", "vue"],
    },
    outDir: "api",
    publicDir: "www",
  });

  // eslint-disable-next-line
  // @ts-ignore
  expect((await import("./api/product/product")).versions).toEqual({
    android: "/product?platform=android",
    ios: "/product?platform=ios",
    js: "/product?platform=js",
  });

  // eslint-disable-next-line
  // @ts-ignore
  expect((await import("./api/product/a/all-three")).versions).toEqual({
    android: "/product/a/all-three?platform=android",
    ios: "/product/a/all-three?platform=ios",
    js: "/product/a/all-three?platform=js",
  });

  expect(
    // eslint-disable-next-line
    // @ts-ignore
    (await import("./api/product/a/just-one")).versions,
  ).toEqual({
    android: "/product?platform=android",
    ios: "/product?platform=ios",
    js: "/product/a/just-one?platform=js",
  });

  expect(
    // eslint-disable-next-line
    // @ts-ignore
    (await import("./api/product/a/one-but-agnostic")).versions,
  ).toEqual({
    android: "/product/a/one-but-agnostic?platform=android",
    ios: "/product/a/one-but-agnostic?platform=ios",
    js: "/product/a/one-but-agnostic?platform=js",
  });
});
