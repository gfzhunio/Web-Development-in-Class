/* B"H
*/

export function rest(url: string) {
    return fetch(url).then(res => res.json());
}