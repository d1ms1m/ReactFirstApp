type Mods = Record<string, boolean | string>;

export function classNames(className: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    const filteredMods = Object.entries(mods)
        .filter(([_className, value]) => Boolean(value))
        .map(([className, _value]) => className)

    const result = [
        className,
        ...filteredMods,
        ...additional.filter(Boolean),
    ].join(' ')

    return result.trim()
}