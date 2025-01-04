type Mods = Record<string, boolean | string>;

export function classNames(className: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    const filteredMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)

    const result = [
        className,
        ...filteredMods,
        ...additional.filter(Boolean)
    ].join(' ')

    return result.trim()
}