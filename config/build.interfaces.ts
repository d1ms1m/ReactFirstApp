export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    html: string
    entry: string
    build: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
}