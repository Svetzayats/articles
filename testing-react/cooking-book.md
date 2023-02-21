### Mock async part of module

[Article with example](https://medium.com/trendyol-tech/jest-mocking-part-2-module-60b80080d5d9)

```ts
import * as BookingCancelModal from "common/modals/BookingCancelModal/booking-cancel-modal";

jest.mock("common/modals/BookingCancelModal/booking-cancel-modal");
const mockedBookingCancelModal = jest.mocked(BookingCancelModal);

// in test
mockedBookingCancelModal.showBookingCancelModal.mockResolvedValueOnce(
  Promise.resolve()
);
```

### Getting access to params of mock call

It is stored in mock property of mocked function.

```ts
mockedFunction.mock.calls[0]; // first call
mockedFunction.mock.calls[0][0]; // first param from first call
```

### Testing custom hooks with renderHook

[How to test custom hooks by Kent C. Dodds](https://kentcdodds.com/blog/how-to-test-custom-react-hooks) - there are about testing components (that renders custom hooks) and renderHook from @testing-library/react-hooks.
[Documentation](https://react-hooks-testing-library.com/usage/basic-hooks)

renderHook from @testing-library/react-hooks return result, and result.current contains all data and methods that was returned from custom hook

**Simple sync hook**

```ts
import { renderHook } from "@testing-library/react-hooks";

// useCustomHook returns { customValue }
const { result } = renderHook(() => useCustomhook(params));
expect(result.current.customValue).toEqual("value");
```

**Async hook that use contextes**

1. Mock all requests for data

```ts
beforeEach(() => {
  mockedBookingContext = jest
    .spyOn(BookingContext, "useBookingContext")
    .mockReturnValue(BookingContextMock);
  getBookingsForUserSpy = jest
    .spyOn(ReservationsApi, "getBookingsForUser")
    .mockResolvedValue(BOOKINGS_DTO);
});
```

2. Use wrapper for renderHook for wrapping in providers of contextes

```ts
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <WrapperForRenderHook providerProps={{ common: CommonContext }}>
    {children}
  </WrapperForRenderHook>
);
const { result } = await renderHook(() => useBookingsData(), { wrapper });
```

3. Wait for async actions with waitForNextUpdate - whole example

```ts
describe("booking-widget-hooks - booking-widget - dashboard", () => {
  let mockedBookingContext;
  let getBookingsForUserSpy;

  beforeEach(() => {
    mockedBookingContext = jest
      .spyOn(BookingContext, "useBookingContext")
      .mockReturnValue(BookingContextMock);
    getBookingsForUserSpy = jest
      .spyOn(ReservationsApi, "getBookingsForUser")
      .mockResolvedValue(BOOKINGS_DTO);
  });

  test("works getting and preparing items for booking widget", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WrapperForRenderHook providerProps={{ common: CommonContext }}>
        {children}
      </WrapperForRenderHook>
    );
    const { result, waitForNextUpdate } = await renderHook(
      () => useBookingsData(),
      { wrapper }
    );
    await waitForNextUpdate();
    expect(result.current.items.length).toEqual(17);
  });
});
```
