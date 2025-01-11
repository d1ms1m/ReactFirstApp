import {kebabize} from "shared/lib/Kebabize/kebabize";

describe('test kebabize function', () => {
    test('with set of str', () => {
        const words = [
            'StackOverflow',
            'camelCase',
            'alllowercase',
            'ALLCAPITALLETTERS',
            'nOTaLLcAPITALlETTERS',
            'CustomXMLParser',
            'APIFinder',
            'JSONResponseData',
            'Person20Address',
            'UserAPI20Endpoint'
        ];
        const expected = [
            "stack-overflow",
            "camel-case",
            "alllowercase",
            "allcapitalletters",
            "n-o-ta-l-lc-apita-ll-etters",
            "custom-xml-parser",
            "api-finder",
            "json-response-data",
            "person20-address",
            "user-api20-endpoint"
        ]
        for (let i = 0; i < words.length; i++) {
            expect(kebabize(words[i])).toBe(expected[i]);
        }
    })
})