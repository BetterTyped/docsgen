/* eslint-disable @typescript-eslint/no-explicit-any */
export type ExtractProps<Component> = Component extends React.ComponentType<infer Props> ? Props : never;

export type PlaygroundStory<Args> = Args extends (props: infer Props) => any
  ? {
      args: Props;
      components?: Record<string, (...args: any) => any>;
      render: (args: Props) => React.ReactNode | JSX.Element;
    }
  : Args extends Record<string, any>
    ? {
        args?: Args;
        components?: Record<string, (...args: any) => any>;
        render: (args: Args) => React.ReactNode | JSX.Element;
      }
    : {
        args?: never;
        components?: Record<string, (...args: any) => any>;
        render: (args?: any) => React.ReactNode | JSX.Element;
      };

export type PlaygroundComponentProps = {
  code: string;
  setState: (state: string) => void;
};
