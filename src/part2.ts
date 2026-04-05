import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    stringToArray,
    R.map(R.toLower),
    R.filter((c: string) => R.includes(c, vowels)),
    R.length
);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    
    const cleaned = R.pipe(
        stringToArray,
        R.map(R.toLower),
        R.filter(R.test(/[a-z0-9]/))
    )(text);

    const half = Math.floor(cleaned.length / 2);
    return R.all((i: number) => cleaned[i] === cleaned[cleaned.length - 1 - i], R.range(0, half));
};
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    if (t.children.length === 0) {
        return t.root;
    }
    return t.root + " " + t.children.map(treeToSentence).join(" ");
};
