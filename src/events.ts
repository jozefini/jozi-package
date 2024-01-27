// Register an event listener on an element
export const on = (
  el: HTMLElement | null,
  event: string,
  handler: (event: Event) => void,
  useCapture: boolean = false
): void => {
  el?.addEventListener(event, handler, useCapture);
};

// Remove an event listener from an element
export const off = (
  el: HTMLElement | null,
  event: string,
  handler: (event: Event) => void,
  useCapture: boolean = false
): void => {
  el?.removeEventListener(event, handler, useCapture);
};

// Register a delegated event listener on a parent element
export const delegate = (
  parent: HTMLElement | null,
  selector: string,
  event: string,
  handler: (event: Event) => void,
  useCapture: boolean = false
): void => {
  const delegatedHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.matches(selector)) {
      handler.call(target, event);
    }
  };

  on(parent, event, delegatedHandler, useCapture);
};

// Remove a delegated event listener from a parent element
export const undelegate = (
  parent: HTMLElement | null,
  selector: string,
  event: string,
  handler: (event: Event) => void,
  useCapture: boolean = false
): void => {
  const delegatedHandler = (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.matches(selector)) {
      handler.call(target, event);
    }
  };

  off(parent, event, delegatedHandler, useCapture);
};

// Register an event listener that will be invoked only once
export const once = (
  el: HTMLElement | null,
  event: string,
  handler: (event: Event) => void,
  useCapture: boolean = false
): void => {
  const onceHandler = (event: Event) => {
    handler(event);
    off(el, event.type, onceHandler, useCapture);
  };

  on(el, event, onceHandler, useCapture);
};
