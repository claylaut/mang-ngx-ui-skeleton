import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import nodeResolve from "rollup-plugin-node-resolve-angular";

const globals = {
    "@angular/core": "ng.core",
    // "rxjs/Observable": "Rx",
};

export default {
    entry: "./tmp/src-inlined/index.ts",
    dest: "./dist/index.js",
    format: "umd",
    exports: "named",
    moduleName: "@mang/ngx-ui-skeleton",
    plugins: [
        typescript(),
        cleanup(),
        nodeResolve({
            jsnext: true,
            main: true
		})
    ],
    external: Object.keys(globals),
    onwarn: () => {
        return
    }
}