import { ComponentInterface } from '../../stencil-public-runtime';
export declare class AsyncContent implements ComponentInterface {
  documentLocation?: string;
  content: string;
  componentWillLoad(): Promise<void> | undefined;
  fetchNewContent(newDocumentLocation: string): Promise<void>;
  render(): any;
}
