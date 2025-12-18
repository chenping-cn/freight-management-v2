type ENV = "development" | "production" | "test";

const env = (document.documentElement.dataset.env as ENV) || "test";

const settings = {
  development: {
    baseApi: "/api",
    uploadApi: "http://api-driver-dev.marsview.cc",
    cdn: "http://xxx.aliyun.com",
    mock: false,
    mockApi:
      "https://www.fastmock.site/mock/5841b82d5672783b6fd62bb2a06aeb1f/api",
  },
  test: {
    baseApi: "/api",
    uploadApi: "http://api-driver-stg.marsview.cc",
    cdn: "http://xxx.aliyun.com",
    mock: false,
    mockApi:
      "https://www.fastmock.site/mock/5841b82d5672783b6fd62bb2a06aeb1f/api",
  },
  production: {
    baseApi: "/api",
    uploadApi: "http://api-driver.marsview.cc",
    cdn: "http://xxx.aliyun.com",
    mock: false,
    mockApi:
      "https://www.fastmock.site/mock/5841b82d5672783b6fd62bb2a06aeb1f/api",
  },
};

export default {
  env,
  ...settings.production,
};
