export async function getFoods() {
    const response = await fetch('https://learn.codeit.kr/7008/foods')
    const body = await response.json();
    return body;
}