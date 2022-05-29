export function buildPagesArray(currentPage: number, pageCount: number, max: number): number[] {
    const hasMorePagesThanMax = max ? pageCount > max : false;
    if (!hasMorePagesThanMax)
        return Array(pageCount).fill(undefined).map((_, index) => index);

    const halfMax = Math.floor(max / 2);
    let pages: (number | undefined)[] = [];

    let p = currentPage - halfMax;
    while (pages.length < halfMax) {
        pages.push(p >= 0 ? p : undefined);
        p++;
    }

    pages = pages.filter(p => p !== undefined);

    pages.push(currentPage);
    p = currentPage + 1;
    while (pages.length < max && p < pageCount) {
        pages.push(p);
        p++;
    }

    return pages as number[];
}
