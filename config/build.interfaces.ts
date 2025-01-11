export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    html: string
    entry: string
    build: string
    src: string
}

export interface BuildEnv {
    mode?: BuildMode,
    port?: number
}

export interface BuildOptions extends BuildEnv {
    paths: BuildPaths
    isDev: boolean
}