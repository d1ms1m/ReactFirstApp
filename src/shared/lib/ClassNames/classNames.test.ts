import {classNames} from "shared/lib/ClassNames/classNames";

describe('test ClassNames function', () => {
    test('with first arg only', () => {
        const expected = 'mainClass'
        expect(classNames('mainClass')).toBe(expected);
    })
    test('with first arg and additional classes', () => {
        const expected = 'mainClass class1 class2'
        expect(classNames('mainClass', {}, ['class1', 'class2'])).toBe(expected);
    })
    test('with empty first arg and with additional classes', () => {
        const expected = 'class1 class2'
        expect(classNames('', {}, ['class1', 'class2'])).toBe(expected);
    })
    test('with first arg, with "true" mods and with additional classes', () => {
        const expected = 'mainClass modClass1 modClass2 class1 class2'
        expect(classNames('mainClass', {modClass1: true, modClass2: true}, ['class1', 'class2'])).toBe(expected);
    })
    test('with first arg, with "false" mods and with additional classes', () => {
        const expected = 'mainClass class1 class2'
        expect(classNames('mainClass', {modClass1: false, modClass2: false}, ['class1', 'class2'])).toBe(expected);
    })
    test('with first arg, with first "false" mod and with additional classes', () => {
        const expected = 'mainClass modClass2 class1 class2'
        expect(classNames('mainClass', {modClass1: false, modClass2: true}, ['class1', 'class2'])).toBe(expected);
    })
    test('with first arg, with second "false" mod and with additional classes', () => {
        const expected = 'mainClass modClass1 class1 class2'
        expect(classNames('mainClass', {modClass1: true, modClass2: false}, ['class1', 'class2'])).toBe(expected);
    })
    test('with first arg, with second "empty" mod and with additional classes', () => {
        const expected = 'mainClass modClass1 class1 class2'
        expect(classNames('mainClass', {modClass1: true, modClass2: ''}, ['class1', 'class2'])).toBe(expected);
    })
})