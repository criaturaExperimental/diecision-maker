declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: string;
  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: string;
  }
}
