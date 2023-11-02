export const useRouterMock = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
  }));
};
