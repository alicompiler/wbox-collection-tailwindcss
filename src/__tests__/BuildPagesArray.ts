import {buildPagesArray} from "../Components/Pagination/BuildPagesArray";

describe('BuildPagesArray', () => {
    it('should build pages array when pageCount less than max', function () {
        const pages = buildPagesArray(1, 3, 5);
        expect(pages).toEqual([0, 1, 2]);
    });

    it('should build pages array when pageCount>max, currentPage=1, max=2, pageCount=2', function () {
        const pages = buildPagesArray(0, 2, 2);
        expect(pages).toEqual([0, 1]);
    });

    it('should build pages array when pageCount>max, currentPage=1, max=1, pageCount=2', function () {
        const pages = buildPagesArray(0, 2, 1);
        expect(pages).toEqual([0]);
    });

    it('should build pages array when pageCount>max, currentPage=0', function () {
        const pages = buildPagesArray(0, 10, 6);
        expect(pages).toEqual([0, 1, 2, 3, 4, 5]);
    });

    it('should build pages array when pageCount>max, currentPage=1', function () {
        const pages = buildPagesArray(1, 10, 5);
        expect(pages).toEqual([0, 1, 2, 3, 4]);
    });

    it('should build pages array when pageCount>max, currentPage=2', function () {
        const pages = buildPagesArray(2, 10, 5);
        expect(pages).toEqual([0, 1, 2, 3, 4]);
    });

    it('should build pages array when pageCount>max, currentPage=4', function () {
        const pages = buildPagesArray(4, 10, 5);
        expect(pages).toEqual([2, 3, 4, 5, 6]);
    });

    it('should build pages array when pageCount>max, currentPage=9,pageCount=10', function () {
        const pages = buildPagesArray(9, 10, 5);
        expect(pages).toEqual([7, 8, 9]);
    });

    it('should build pages array when pageCount>max, currentPage=8,pageCount=10', function () {
        const pages = buildPagesArray(8, 10, 5);
        expect(pages).toEqual([6, 7, 8, 9]);
    });

    it('should build pages array when pageCount>max, currentPage=7,pageCount=10', function () {
        const pages = buildPagesArray(7, 10, 5);
        expect(pages).toEqual([5, 6, 7, 8, 9]);
    });

});
