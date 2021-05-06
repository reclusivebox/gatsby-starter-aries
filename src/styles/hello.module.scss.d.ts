declare namespace HelloModuleScssNamespace {
  export interface IHelloModuleScss {
    helloModule: string;
  }
}

declare const HelloModuleScssModule: HelloModuleScssNamespace.IHelloModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HelloModuleScssNamespace.IHelloModuleScss;
};

export = HelloModuleScssModule;
