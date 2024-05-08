import HTMLWebpackPlugin = require("html-webpack-plugin");
import autoprefixer = require("autoprefixer");
export let devtool: string;
export let entry: string;
export namespace output {
    let path: string;
    let filename: string;
}
export let plugins: HTMLWebpackPlugin[];
export namespace module {
    let rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options?: undefined;
        };
    } | {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
            };
        };
    } | {
        test: RegExp;
        use: {
            loader: string;
            options?: undefined;
        };
        exclude?: undefined;
    } | {
        test: RegExp;
        use: ({
            loader: string;
            options?: undefined;
        } | {
            loader: string;
            options: {
                postcssOptions: {
                    plugins: () => (typeof autoprefixer)[];
                };
            };
        })[];
        exclude?: undefined;
    })[];
}
