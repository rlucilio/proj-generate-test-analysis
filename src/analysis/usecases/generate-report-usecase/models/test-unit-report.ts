export interface TestUnitReport {
    unitName: string,
    countTests: number,
    success: boolean,
    tests: string[]
}