// import webpack, { RuleSetRule } from 'webpack';
// import path from 'path';
// import { getStyleLoader } from '../build/loaders/styleLoader';
// import { BuildPaths } from '../build.interfaces';
//
// export default ({ config }: {config: webpack.Configuration}) => {
//     const paths: BuildPaths = {
//         build: '',
//         html: '',
//         entry: '',
//         src: path.resolve(__dirname, '..', '..', 'src'),
//     };
//
//     config.plugins!.push(new webpack.ProvidePlugin({"React": "react"}))
//
//     config.resolve!.modules!.push(paths.src);
//     config.resolve!.extensions!.push('.ts', '.tsx');
//
//     // eslint-disable-next-line no-param-reassign
//     // @ts-expect-error off
//     config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
//         if (/svg/.test(rule.test as string)) {
//             return { ...rule, exclude: /\.svg$/i };
//         }
//
//         return rule;
//     });
//
//     config.module!.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//     });
//
//     config.module!.rules.push(getStyleLoader(true));
//
//     return config;
// };
